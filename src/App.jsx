import {useEffect, useState} from "react";
import {Layout} from "antd";
import {io} from "socket.io-client";

import SubRoutes from "./SubRoutes";
import NavBarMain from "./components/navbar/Navbar";
import FooterMain from "./components/footer/FooterMain";
import {useSelector} from "react-redux";
import socket from './utils/socket'

const {Content, Footer} = Layout;

function App() {
  const id = useSelector(state => state.auth.userDetails?.id)
  const authUser = useSelector((state) => state.auth.userDetails);
  // const [socket, setSocket] = useState(null);

  // useEffect(() => {
  //   // setSocket(socket);
  //   // socket?.emit('storeId', id)
  // }, []);

  useEffect(() => {
    socket?.emit("newUser", authUser);
    socket?.emit('storeId', id)
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
