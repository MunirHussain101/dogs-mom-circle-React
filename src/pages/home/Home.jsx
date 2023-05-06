import Banner from "../../components/banner/Banner";
import EmailSec from "../../components/email-section/EmailSec";
import AntdCard from "../../components/antdcard/AntdCard";

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