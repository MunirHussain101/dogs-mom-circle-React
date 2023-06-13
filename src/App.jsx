import {useEffect, useState} from "react";
import {Layout} from "antd";
import {io} from "socket.io-client";

import SubRoutes from "./SubRoutes";
import NavBarMain from "./components/navbar/Navbar";
import FooterMain from "./components/footer/FooterMain";
import {useSelector} from "react-redux";

const {Content, Footer} = Layout;

function App() {
  const authUser = useSelector((state) => state.auth.userDetails);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io("http://localhost:8080"));
  }, []);

  useEffect(() => {
    socket?.emit("newUser", authUser);
  }, [socket, authUser]);

  return (
    <>
      <Layout className="layout">
        <Content>
          <div className="site-layout-content">
            <NavBarMain />

            <SubRoutes socket={socket} />
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
