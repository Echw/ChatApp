import React from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <Wrapper>
      <Sidebar />
      {props.children}
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: flex;
`;
