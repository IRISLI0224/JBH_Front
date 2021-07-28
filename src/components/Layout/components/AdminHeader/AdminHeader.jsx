import React from 'react';
import styled from 'styled-components';
import Input from '../../../Input';
import SearchImg from '../../../../assets/images/search.svg';
import AvatarImg from '../../../../assets/images/account.svg';

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 1900px;
  margin: auto;
  height: 100px;
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
`;
const SearchIconImg = styled.img`
  margin-left: -40px;
  padding-top: 5px;
  width: 30px;
  height: 30px;
`;

const AvatarIconImg = styled.img`
  margin-left: 80px;
  width: 50px;
  height: 50px;
  margin-top: -10px;
`;

const AdminName = styled.div`
  font-size : 18px;
  font-family: Poppins;
  font-weight: bold;
  color: #2e2e2e;
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
        <SearchIconImg src={SearchImg} alt="Logo" />
      </SearchButton>
    </NavMiddle>
    <NavRight>
      <AvatarIconImg src={AvatarImg} alt="Avatar" />
      <AdminName>Name</AdminName>
    </NavRight>

  </Wrapper>
);

export default AdminHeader;
