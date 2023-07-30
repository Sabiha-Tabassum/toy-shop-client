import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/Category/Category";
import OnlinePartner from "../../Components/OnlinePartner/OnlinePartner";
import Slider from "../../Components/Slider/Slider";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <Category></Category>
            <OnlinePartner></OnlinePartner>
        </div>
    );
};

export default Home;