import { Row, Col, Card } from "antd";
// import styles from "../styles/Home.module.css"
// import EmailSec from "../components/sections/email/EmailSec";
// import AntdCard from "../components/singleton-comp/antdCard";
// import ImageBanner from "../../components/banner/Banner";
import Banner from "../../components/banner/Banner";
import EmailSec from "../../components/email-section/EmailSec";
import AntdCard from "../../components/antdcard/AntdCard";
// import AntdCard from "../../components/antdcard/AntdCard";


const Home = () => {
  return (
    <>
           <div className="main_row_home">
            <Banner/>        
              <EmailSec />
              <AntdCard />  

    </div>
    </>

  );
}

export default Home