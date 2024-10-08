// Dashboard.js
import React from 'react';
import styled from 'styled-components';
import couresel from '../Layout/couresel';
const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: linear-gradient(135deg, rgba(0, 0, 50, 1) 0%, rgba(0, 0, 0, 1) 100%);
  min-height: 100vh;
  color: white;
`;

const Header = styled.header`
  background: #1e1e1e;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
`;

const WidgetsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Widget = styled.div`
  background: #2e2e2e;
  border-radius: 8px;
  padding: 20px;
  flex: 1;
  min-width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

const ADashboard = () => {
  return (
    <DashboardWrapper>
      <Header>
        <h1>Dashboard</h1>
      </Header>
      <WidgetsContainer>
        <Widget>
          <Title>Statistics</Title>
          {/* Add content or components for statistics */}
        </Widget>
        <Widget>
          <Title>Recent Activity</Title>
          {/* Add content or components for recent activity */}
        </Widget>
        <Widget>
          <Title>Notifications</Title>
          {/* Add content or components for notifications */}
        </Widget>
        <Widget>
          <Title>Analytics</Title>
          {/* Add content or components for analytics */}
        </Widget>
      </WidgetsContainer>
      <couresel />
    </DashboardWrapper>
  );
};
export default ADashboard;
