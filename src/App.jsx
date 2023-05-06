import {Route, Routes} from "react-router-dom";
import {Breadcrumb, Layout, Menu, theme} from "antd";

import SubRoutes from "./SubRoutes";
import NavBarMain from "./components/navbar/Navbar";
import FooterMain from "./components/footer/FooterMain";

const { Content, Footer } = Layout;

function App() {
  return (
    <>
      <Layout className="layout">
        <Content>
          <div className="site-layout-content">
            <NavBarMain />

            <SubRoutes />
          </div>
        </Content>
        <Footer className="footer_main">
          <FooterMain />
        </Footer>
      </Layout>
    </>
  );
}

export default App;
