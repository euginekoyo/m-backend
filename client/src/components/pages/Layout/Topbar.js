import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const TopbarWrapper = styled.div`
  width: 100%;
  height: 60px;
  background: linear-gradient(135deg, red, blue); /* Consistent gradient background */
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  opacity: ${({ isFocused }) => (isFocused ? '0' : '1')}; /* Hide logo when search is focused */
  transition: opacity 0.3s ease;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  transition: width 0.3s ease;
  width: ${({ isFocused }) => (isFocused ? '200px' : '40px')}; /* Collapse width when not focused */
  overflow: hidden;

  input {
    width: 100%;
    padding: 5px;
    border: none;
    border-radius: 4px;
    outline: none;
    background: #333;
    color: white;
    opacity: ${({ isFocused }) => (isFocused ? '1' : '0')}; /* Hide text when collapsed */
    transition: opacity 0.3s ease;
  }

  svg {
    margin-left: 10px;
    cursor: pointer;
    font-size: 1.5rem; /* Set a more reasonable size for the search icon */
  }
`;

const Topbar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TopbarWrapper>
      <Container>
        <Logo isFocused={isFocused}>M-Flix</Logo>
      </Container>
      <SearchBox isFocused={isFocused}>
        <input
          type="text"
          placeholder="Search..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <FaSearch onClick={() => setIsFocused(!isFocused)} />
      </SearchBox>
    </TopbarWrapper>
  );
};

export default Topbar;
