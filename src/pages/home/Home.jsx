import Banner from "../../components/banner/Banner";
import EmailSec from "../../components/email-section/EmailSec";
import HomeCard from "../../components/homecard/HomeCard";

const Home = () => {
  return (
    <>
      <div className="main_row_home">
        <Banner />
        <EmailSec />
        <HomeCard />
      </div>
    </>
  );
};

export default Home;
