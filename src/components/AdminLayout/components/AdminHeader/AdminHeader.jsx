import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Input from '../../../Input';

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
  width: 120px;
  height: 30px;
  margin-left: 250px;
  font-family: Poppins;
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  color: #0f0f0f;
`;

const NavMiddle = styled.div`
  width: 400px;
  height: 30px;
  margin-left: 300px;
  display: flex;
  align-content: space-between;
`;

const NavRight = styled.div`
  width: 200px;
  height: 30px;
  display: flex;
  align-content: space-between;
`;

const SearchInput = styled(Input)`
  border-radius: 20px;
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

const AvatarIconImg = styled.img`
  margin-left: 80px;
  width: 40px;
  height: 40px;
  margin-top: -5px;
  border: 2px solid #8f8f8f;
  border-radius:50%;
`;

const AdminName = styled.div`
  font-size : 18px;
  font-family: Poppins;
  font-weight: bold;
  color: #2e2e2e;
  margin-left: 10px;
`;
const AdminHeader = () => (
  <Wrapper>
    <NavLeft>
      Guest List
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
      <AvatarIconImg src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="Avatar" />
      <AdminName>Name</AdminName>
    </NavRight>

  </Wrapper>
);

export default AdminHeader;
