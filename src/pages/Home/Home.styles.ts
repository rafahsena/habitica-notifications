import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const Container = styled.div`
  width: 320px;
  height: 400px;
  overflow-y: scroll;
  `;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  height: 400px;
  justify-content: center;
  align-items: center;
  background-color: #2d2d2d;
`;

export const Loading = styled.div`
  border: 8px solid #f3f3f3; 
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 2s linear infinite;
`;
