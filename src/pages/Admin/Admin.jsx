import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import GuestList from './GuestList';
import Calendar from './components/Calendar';
import { getBookingByDate } from '../../apis/getBookingByDate';
import AdminLayout from '../../components/AdminLayout';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  min-height: 100vh;
  padding: 1.5rem 3rem 0 0;
  width: 85%;
  /* background-color: #e8f0f8; */
  font-family: 'Poppins';
  margin-left: 11rem;
`;

const LeftPanel = styled.div`
  flex-direction: column;
  min-height: 100vh;
  width: 365px;
  background:white;
  font-family: 'Poppins';
  margin-left: 2rem;
  padding: 1rem 1rem 0;
`;

const Center = styled.div`
  flex-direction: column;
  min-height: 100vh;
  padding: 1.5rem 3rem 0 0;
  width: 2800px;
  background:white;
  font-family: 'Poppins';
`;

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: '2021-07-29',//eslint-disable-line
      today: '',
      allData: [],//eslint-disable-line
    };
    this.handleDate = this.handleDate.bind(this);
    this.getBookingDetails = this.getBookingDetails.bind(this);
    const myDate = new Date();
    const currentdate = `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`;
    this.state.today = (moment)(currentdate).format('YYYY-MM-DD');
    // console.log(this.props.location.email)
    this.getBookingDetails(this.state.today);//eslint-disable-line
  }

  handleDate(chosenDate) {
    this.setState({
      chosenDate,//eslint-disable-line
    });
    // console.log(this.state.chosenDate);
  }

  async getBookingDetails(chosenDate) {
    // const { chosenDate } = this.state;
    this.setState({
      allData: await getBookingByDate(chosenDate),//eslint-disable-line
    });
    // console.log(this.state.allData);
  }

  render() {
    return (
      <AdminLayout>
        <Container>
          <Center>
            <GuestList
              allData={this.state.allData} //eslint-disable-line
            />
          </Center>
          <LeftPanel>
            <Calendar
              handleDate={this.handleDate}
              getBookings={this.getBookingDetails} //eslint-disable-line
            />
          </LeftPanel>
        </Container>
      </AdminLayout>
    );
  }
}

export default Admin;
