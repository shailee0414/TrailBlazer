import React from "react";

import Header from "../components/Header";
import LargeImageScreen from "./LargeImageScreen";
import TextContent from "../components/TextContent";
import CourseScreen from "./CourseScreen";
import Footer from "../components/Footer";

const HomeScreen = () => {
  return (
    <div style={{ fontFamily: "Roboto" }}>
      <Header />
      <LargeImageScreen />
      <TextContent />
      <CourseScreen />
      <div style={{ marginBottom: "3em" }}>
        <img
          alt=""
          height="400vh"
          width="100%"
          src="https://t3.ftcdn.net/jpg/05/60/95/32/240_F_560953239_yFKXs4bdr8cNOswwPMiJh7upCwQpBtJ1.jpg"
        />
      </div>
      <Footer />
    </div>
  );
};
export default HomeScreen;
