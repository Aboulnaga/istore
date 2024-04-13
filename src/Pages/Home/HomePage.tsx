import HeroSectionComp from "./HomePageComp/HeroSectionComp/HeroSectionComp";
import SecondSectionComp from "./HomePageComp/SecondSectionComp/SecondSectionComp";
import ThirdSectionComp from "./HomePageComp/ThirdSectionComp/ThirdSectionComp";
import FourthSectionComp from "./HomePageComp/FourthSectionComp/FourthSectionComp";
import FifthSectionComp from "./HomePageComp/FifthSectionComp/FifthSectionComp";
// import WhiteSpace from "./HomePageComp/WhiteSpace/WhiteSpace";
import LastSectionComp from "./HomePageComp/LastSectionComp/LastSectionComp";
import Footer from "../../Components/Footer/Footer";
export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSectionComp />
      <SecondSectionComp />
      <ThirdSectionComp />
      <FourthSectionComp />
      <FifthSectionComp />
      <LastSectionComp />
      <Footer />
      {/* <WhiteSpace /> */}
    </div>
  );
}
