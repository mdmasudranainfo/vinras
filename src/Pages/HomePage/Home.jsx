import React from "react";
// import Finance from "../../Components/Finance/Finance";
import HeroHome from "../../Components/HeroHome/HeroHome";
import HomeCounter from "../../Components/HomeCounter/HomeCounter";
import HomeServices from "../../Components/HomeServices/HomeServices";
import LiveDiscussion from "../../Components/LiveDiscussion/LiveDiscussion";
import MakeAgency from "../../Components/MakeAgency/MakeAgency";
import MeetOutTeam from "../../Components/MeetOutTeam/MeetOutTeam";
import PopularServices from "../../Components/PopularServices/PopularServices";
import SuccessExperience from "../../Components/SuccessExperience/SuccessExperience";
import Testimonial from "../../Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="">
      <HeroHome />
      <HomeServices />

      <PopularServices />
      {/* finance */}
      <LiveDiscussion />
      <MakeAgency />
      <HomeCounter />
      <MeetOutTeam />
      <SuccessExperience />
      <Testimonial />
    </div>
  );
};

export default Home;
