import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Input from '../../../Input';
import { removeToken } from '../../../../utils/authentication';

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 100%;
  margin: auto;
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  align-content: space-between;
`;

const NavLeft = styled.div`
  width: 30%;
  height: 30px;
  margin-left: 250px;
  font-family: Poppins;
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  color: #0f0f0f;
`;

const NavMiddle = styled.div`
  width: 30%;
  height: 30px;
  display: flex;
  align-content: space-between;
`;

const NavRight = styled.div`
  width: 30%;
  height: 30px;
  display: flex;
  align-content: space-between;
`;

const SearchInput = styled(Input)`
  padding-left: 2rem;
  font-size: 0.7rem;
  border-radius: 20px;
  font-family: 'Poppins';
`;

const SearchButton = styled.button`
  outline: 0;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  margin-top: 3px;
  margin-left: -40px;
`;

// const AvatarIconImg = styled.img`
//   margin-left: 80px;
//   width: 40px;
//   height: 40px;
//   margin-top: -5px;
//   border: 2px solid #8f8f8f;
//   border-radius:50%;
// `;

// const AdminName = styled.div`
//   font-size : 18px;
//   font-family: Poppins;
//   font-weight: bold;
//   color: #2e2e2e;
//   margin-left: 10px;
// `;

const LogoutButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  font-family: 'Poppins';
  font-size: 0.8rem;
  color: #181b50;
  border-radius: 10px;
  border: solid 1.5px #181b50;
  padding: 0.4rem 1.3rem;
  cursor: pointer;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.03);
  margin-left: 60%;
`;

const AdminHeader = (props) => (
  <Wrapper>
    <NavLeft>
      Japanese Bath House
    </NavLeft>
    <NavMiddle>
      <SearchInput
        size="lg"
        name="adminSearch"
        id="adminSearch"
        type="search"
        placeholder="Search here"
      />
      <SearchButton>
        <FontAwesomeIcon color="#181b50" size="1x" icon={faSearch} />
      </SearchButton>
    </NavMiddle>
    <NavRight>
      <LogoutButton
        onClick={() => {
          removeToken();
          props.history.replace('/admin');
        }}
      >
        Logout
      </LogoutButton>
    </NavRight>
  </Wrapper>
);

AdminHeader.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func,
  }).isRequired,
};

export default withRouter(AdminHeader);
