import React from "react";
import styled from "styled-components";
import Sidebar from "./SideBar";
import Header from "./Header";

function DashboardLayout({ children }) {

  return (
    <Div>

        <Sidebar className="sec"  />

      <Header/>
      <Main>{children}</Main>
    </Div>
  );
}

export default DashboardLayout;
const Div = styled.div`
  section {
    @media (max-width: 500px) {
      display: none !important;
    }
  }
`;

const Main = styled.main`
  position: fixed;
  right: 0;
  height: calc(100% - 70px);
  bottom: 0;
  width: calc(100% - 230px);
 background: rgba(79, 75, 245, 0.15);

  @media (max-width: 500px) {
    width: 100%;
  }
`;
