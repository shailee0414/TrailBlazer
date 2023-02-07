import React from "react";
import { useNavigate } from "react-router-dom";

const Courses = ({ data }) => {
  const navigate = useNavigate();

  const RenderList = () => {
    return data?.map((item, index) => {
      return (
        <div
          key={index}
          className="  "
          id="character"
          style={{
            marginTop: "4em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flexBasis: "20em",
          }}
          onClick={() => {
            navigate("/details", { state: { item, index } });
          }}
        >
          <div className="image">
            <img
              alt=""
              src={item.image}
              style={{
                height: "18em",
                width: "22em",
                borderRadius: "10px",
              }}
            ></img>
          </div>
          <div style={{ marginTop: "0.8em" }}>
            <h4 color="#453C67">{item?.title}</h4>
          </div>
        </div>
      );
    });
  };

  const course = () => {
    return (
      <div className="ui container">
        <div className="ui grid">
          <div
            className="doubling three column row"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {RenderList()}
          </div>
        </div>
      </div>
    );
  };
  return <div>{course()}</div>;
};
export default Courses;
