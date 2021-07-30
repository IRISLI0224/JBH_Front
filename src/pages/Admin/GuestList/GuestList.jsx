import React from 'react';
import styled, { css } from 'styled-components';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import getBookingByDate from '../../../apis/getBookingByDate';//eslint-disable-line

const Container = styled.div`
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
  border-bottom: 2px solid darkslateblue;
  padding: 0.7rem 0.5rem;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.7rem;
  cursor: pointer;
    
  ${(props) => ({
    nav: css`
      justify-content: space-around;
      color: white;
      background-color: darkslateblue;
      border-radius: 10px;
      margin-bottom: 1rem;
      width: 13%;
      padding: 0.2rem 1rem 0.2rem 1rem;
      border: none;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.03);
      font-family: 'Poppins';
    `,
    form: css`
      justify-content: center;
      color: darkslateblue;
      background-color: white;
      border-radius: 30px;
      border: solid 1.5px darkslateblue;
      padding: 0.4rem 1.3rem;
      letter-spacing: 0.4px;
      font-family: 'PoppinsBold';
    `,
  }[props.variant])}
`;

class GuestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: 'Guest',
          field: 'guest',
        },
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
          headerName: 'Ticket Type',
          field: 'ticketType',
          sortable: true,
        },
        {
          cellRendererFramework: (params) => (
            <div>
              <Button variant="form" onClick={() => this.actionButton(params)}>Detail</Button>
            </div>
          ),
        },
      ],
      rowData: [
        // {
        //   guest: '👤',
        // },
      ],
    };
    this.actionButton = this.actionButton.bind(this);
  }

  componentDidMount() {
    // getBookingByDate('2022-06-10').then((rowData) => this.setState({ rowData }));
  }

  handleSearch = (event) => {
    this.gridApi.setQuickFilter(event.target.value);
  }

  actionButton = (params) => {
    console.log(params.data);
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  }

  render() {
    return (
      <>
        <Container>
          <NavBar>
            <TabMenu>
              <EmployeeNum>All Employee (216)</EmployeeNum>
            </TabMenu>
            <SearchBox>
              <Input type="search" onChange={this.handleSearch} placeholder="Search here" />
              <FontAwesomeIcon color="darkslateblue" size="0.2rem" icon={faSearch} />
            </SearchBox>
            <Button variant="nav">
              <FontAwesomeIcon color="white" size="0.2rem" icon={faFileAlt} />
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
        </Container>
      </>
    );
  }
}

export default GuestList;
