import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCourse } from "../redux/action";
import Data from "../data/Data";
import Courses from "../components/Courses";

const CourseScreen = () => {
  const data = useSelector((state) => state?.course ?? []);
  const dispatch = useDispatch();
  const [index, setIndex] = useState();

  useEffect(() => {
    setIndex(6);
    dispatch(fetchCourse(Data));
  }, [dispatch]);
  const click = () => {
    setIndex(index + 3);
  };

  return (
    <div>
      <Courses data={data.slice(0, index)} />;
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2em",
        }}
      >
        <button
          className=" ui large button"
          onClick={click}
          style={{
            justifySelf: "center",
            marginBottom: "2.3rem",
            backgroundColor: "#645CBB",
            color: "white",
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
};
export default CourseScreen;
