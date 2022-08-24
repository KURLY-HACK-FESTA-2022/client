import theme from 'libs/styles/theme';
import React from 'react';
import { CustomerRouting, DeliveryRouting } from 'routes/Routing';
import styled, { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <PageLayout>
          <PageWrapper>
            <CustomerRouting />
            <DeliveryRouting />
          </PageWrapper>
        </PageLayout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

const PageLayout = styled.div`
  overflow: auto;
  height: 100%;
  &::-webkit-scrollbar {
    background-color: white;
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 0px 10px 10px 0;
  }
  &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 12px;
    background-clip: padding-box;
    border: 1px solid transparent;
  }
`;
const PageWrapper = styled.main`
  margin: 0 auto;
  max-width: 360px;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
`;

export default App;
