import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import './style.scss';
import { AgGridReact } from 'ag-grid-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { getBookingByDate } from '../../../apis/getBookingByDate';
import Calendar from '../components/Calendar';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: 'Poppins';
  margin-left: 11rem;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.03);
  width: 32%;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  padding: 0.3rem 0.5rem;
  outline: 0;
  font-size: 0.7rem;
  font-family: 'Poppins';
`;

const TabMenu = styled.div`
  width: 50%;
  flex-grow: 0;
  margin-bottom: 1rem;
  padding: 0.2rem 0 0 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.03);
  background-color: #ffffff;
  font-size: 0.7rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  font-family: 'Poppins';
`;

const EmployeeNum = styled.div`
  border-bottom: 2px solid #181b50;
  padding: 0.7rem 0.5rem;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.7rem;
  cursor: pointer;
  ${(props) =>
    ({
      nav: css`
        justify-content: space-around;
        color: white;
        background-color: #181b50;
        border-radius: 10px;
        margin-bottom: 1rem;
        width: 15%;
        padding: 0.2rem 1rem 0.2rem 1rem;
        border: none;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.03);
        font-family: 'Poppins';
      `,
      form: css`
        justify-content: center;
        color: #181b50;
        background-color: white;
        border-radius: 30px;
        border: solid 1.5px #181b50;
        padding: 0.4rem 1.3rem;
        letter-spacing: 0.4px;
        font-family: 'PoppinsBold';
      `,
    }[props.variant])}
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem 0 0 0;
  font-family: 'Poppins';
`;

const RightPanel = styled.div`
  flex-direction: column;
  width: 365px;
  background: white;
  font-family: 'Poppins';
  margin: 3.8rem 1rem;
  padding: 1rem 1rem;
  border-radius: 10px;
`;

class GuestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: '2021-07-29',//eslint-disable-line
      today: '',
      guestNum: 0,
      columnDefs: [
        {
          headerName: 'FirstName',
          field: 'firstName',
          sortable: true,
        },
        {
          headerName: 'LastName',
          field: 'lastName',
          sortable: true,
        },
        {
          headerName: 'Phone',
          field: 'phone',
          sortable: true,
        },
        {
          headerName: 'Email',
          field: 'email',
          sortable: true,
        },
        {
          headerName: 'Booking Number',
          field: 'bookingNum',
          sortable: true,
        },
        {
          cellRendererFramework: (params) => (
            <div>
              <Button
                variant="form"
                onClick={() => {
                  const { history } = this.props;
                  history.push({
                    pathname: '/admin/bookingdetail',
                    id: params.data._id,//eslint-disable-line
                  });
                }}
              >
                Detail
              </Button>
            </div>
          ),
        },
      ],
      rowData: [],
    };
    this.getBookingDetails = this.getBookingDetails.bind(this);
    const myDate = new Date();
    const currentdate = `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`;
    this.state.today = moment(currentdate).format('YYYY-MM-DD');
    this.getBookingDetails(this.state.today);//eslint-disable-line
  }

  async getBookingDetails(chosenDate) {
    const response = await getBookingByDate(chosenDate);
    if (typeof response !== 'string') {
      this.setState({
        rowData: response,//eslint-disable-line
        guestNum: response.length,
      });
    } else {
      this.setState({
        rowData: [],//eslint-disable-line
        guestNum: 0,
      });
    }
  }

  handleSearch = (event) => {
    this.gridApi.setQuickFilter(event.target.value);
  };

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  };

  render() {
    const { guestNum } = this.state;
    return (
      <Container>
        <FormContainer>
          <NavBar>
            <TabMenu>
              <EmployeeNum>All Guest ({guestNum})</EmployeeNum>
            </TabMenu>
            <SearchBox>
              <Input type="search" onChange={this.handleSearch} placeholder="Search here" />
              <FontAwesomeIcon color="#181b50" size="1x" icon={faSearch} />
            </SearchBox>
            <Button variant="nav">
              <FontAwesomeIcon color="white" size="lg" icon={faFileAlt} />
              Generate Report
            </Button>
          </NavBar>
          <div className="ag-theme-material" style={{ height: 600 }}>
            <AgGridReact
              onGridReady={this.onGridReady}
              defaultColDef
              pagination
              paginationPageSize={5}
              columnDefs={this.state.columnDefs} //eslint-disable-line
              rowData={this.state.rowData} //eslint-disable-line
            />
          </div>
        </FormContainer>
        <RightPanel>
          <Calendar getBookings={this.getBookingDetails} />
        </RightPanel>
      </Container>
    );
  }
}

GuestList.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default GuestList;
