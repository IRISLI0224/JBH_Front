import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FormTitle from '../../../components/FormTitle';
import FormSubTitle from '../../../components/FormSubTitle';
import FormWrapper from '../../../components/FormWrapper';
import FormItem from '../../../components/FormItem';
import Input from '../../../components/Input';
import { updateSession } from '../../../apis/updateSession';
import { addSession } from '../../../apis/addSession';
import { getSessionByDate } from '../../../apis/getSessionByOneDate';
import Modal from './modal';

const Container = styled.div`
  display: inline-block;
  margin: 2rem auto;
  padding: 3rem 4rem;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.03);
  margin-bottom:20%
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 32rem;
`;
const Button = styled.button`
  font-family: "Roboto";
  letter-spacing: 0.46px;
  border: none;
  border-radius: 0.3rem;
  background-color: rgb(24, 28, 77);
  color: #fff;
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  &:hover {
    cursor: pointer;
  }
`;

class EditSession extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      time: 0,
      maxnumber: 0,
      visible: false,
      exist: false,
    };
    const history = this.props;
    this.state.date = history.location.state.date; //eslint-disable-line
    this.handleAddSession = this.handleAddSession.bind(this);
    this.handleDataChange = this.handleDataChange.bind(this);
  }

  async componentDidMount() {
    const { date, time } = this.state;
    const check = await getSessionByDate(date, time);
    if (typeof (check) !== 'string') {
      this.setState({
        exist: true,
        maxnumber: check.maxNumber,
      });
    }
  }

  handleDataChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  async handleAddSession() {
    // if session exists, run update, else run add
    const {
      date, maxnumber, time, exist,
    } = this.state;
    if (exist) {
      updateSession(date, maxnumber, time);
    } else {
      addSession(date, maxnumber, time);
    }
    this.setState({ visible: true });
  }

  render() {
    const {
      date, time, maxnumber, visible,
    } = this.state;
    return (
      <>
        <Container>
          <FormTitle variant="primary">Add Avaliability</FormTitle>
          <FormSubTitle font="special">
            Date :
            {date}
          </FormSubTitle>
          <FormWrapper>
            <FormItem label="MaxNumber" htmlFor="maxnumber">
              <Input
                size="lg"
                name="maxnumber"
                id="maxnumber"
                type="number"
                value={maxnumber}
                onChange={this.handleDataChange}
              />
            </FormItem>
            <FormItem label="Time" htmlFor="time">
              <Input
                size="lg"
                name="time"
                id="time"
                type="number"
                value={time}
                onChange={this.handleDataChange}
                disabled
              />
            </FormItem>
          </FormWrapper>
          <Buttons>
            <Button>
              <Link to="/admin/addsession" style={{ color: 'white', textDecoration: 'none' }}>
                Cancel
              </Link>
            </Button>
            <Button onClick={this.handleAddSession}>Confirm</Button>
          </Buttons>
          <Modal visible={visible} />
        </Container>
      </>
    );
  }
}

export default EditSession;
