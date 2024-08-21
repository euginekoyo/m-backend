import React from 'react';
import styled from 'styled-components';
import { FaBars, FaHome, FaFilm, FaUser, FaUserShield, FaSignOutAlt, FaSign, FaSignInAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/authContext'; // Ensure this is the correct path

const SidebarWrapper = styled.div`
  width: ${({ isVisible }) => (isVisible ? '100px' : '50px')};
  height: 100vh;
  background: ${({ isVisible }) => isVisible ?
    'linear-gradient(135deg, red, white)' : 'linear-gradient(135deg, red, blue)'};  
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(0)')};  
  transition: transform 0.3s ease, width 0.3s ease;
  font-family: 'Dancing Script', cursive;
  padding-top: 60px; 
`;

const ToggleButton = styled.div`
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  position: fixed;
  top: 10px;
  left: 8px;
  z-index: 10;
`;

const SidebarItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px;
  color: white;
  font-family: 'Dancing Script', cursive;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease, padding-left 0.3s ease;

  svg {
    font-size: 1.5rem; /* Icon size */
    margin-right: ${({ isVisible }) => (isVisible ? '10px' : '0')}; /* Space for text */
  }

  span {
    display: ${({ isVisible }) => (isVisible ? 'inline' : 'none')}; /* Show text only if sidebar is visible */
  }

  &:hover {
    background-color: #333; /* Background on hover */
  }
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  color: white;
  font-family: 'Dancing Script', cursive;
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  svg {
    font-size: 1.5rem; /* Icon size */
    margin-right: ${({ isVisible }) => (isVisible ? '10px' : '0')}; /* Space for text */
  }

  span {
    display: ${({ isVisible }) => (isVisible ? 'inline' : 'none')}; /* Show text only if sidebar is visible */
  }

  &:hover {
    background-color: #333; /* Background on hover */
  }
`;

const Sidebar = ({ isVisible, toggleSidebar }) => {
  const navigate = useNavigate();
  const { isAuthenticated, isAdmin, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to login page after logout
  };

  return (
    <>
      <ToggleButton onClick={toggleSidebar}>
        <FaBars />
      </ToggleButton>
      <SidebarWrapper isVisible={isVisible}>


        {isAuthenticated && (
          <>
            <SidebarItem to="/dashboard" isVisible={isVisible}>
              <FaHome />
              {isVisible && <span>Home</span>}
            </SidebarItem>
            <SidebarItem to="/movielist" isVisible={isVisible}>
              <FaFilm />
              {isVisible && <span>Movies</span>}
            </SidebarItem>
            <SidebarItem to="/profile" isVisible={isVisible}>
              <FaUser />
              {isVisible && <span>Profile</span>}
            </SidebarItem>
            {isAdmin && (
              <>
                <SidebarItem to="/admin" isVisible={isVisible}>
                  <FaUserShield />
                  {isVisible && <span>Admin</span>}
                </SidebarItem>
              </>
            )}
            <LogoutButton onClick={handleLogout} isVisible={isVisible}>
              <FaSignOutAlt />
              {isVisible && <span>Logout</span>}
            </LogoutButton>
          </>
        )}
        {!isAuthenticated && !isAdmin && (
          <>
            <SidebarItem to="/dashboard" isVisible={isVisible}>
              <FaHome />
              {isVisible && <span>Home</span>}
            </SidebarItem>
            <SidebarItem to="/authForm" isVisible={isVisible}>
              <FaSignInAlt />
              {isVisible && <span>Login</span>}
            </SidebarItem>
          </>
        )}
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
