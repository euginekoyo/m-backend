// src/components/LoadingSkeleton.js
import React from 'react';
import styled from 'styled-components';

const SkeletonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border-radius: 10px;
`;

const SkeletonBlock = styled.div`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '20px'};
  background: linear-gradient(90deg, #ececec 25%, #f0f0f0 50%, #ececec 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  margin-bottom: 10px;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const LoadingSkeleton = () => (
    <SkeletonContainer>
        <SkeletonBlock width="80%" height="30px" />
        <SkeletonBlock width="90%" height="20px" />
        <SkeletonBlock width="70%" height="20px" />
    </SkeletonContainer>
);

export default LoadingSkeleton;
