import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const [data, setData] = useState();
  const { state } = useLocation();
  useEffect(() => {
    setData(state?.item);
  }, [state?.item]);
  console.log(data);
  return (
    <div>
      <div
        key={data?.id}
        className="ui grid"
        style={{
          paddingTop: "10rem",
          display: "flex",
          flex: "1",
          justifyContent: "center",
          color:"#453C67"
        }}
      >
        <div style={{ flexBasis: "35rem", margin: "2em" }}>
          <img src={data?.image} style={{}} className="img-fluid" alt="" />
        </div>
        <div style={{ flexBasis: "35rem", margin: "2em" }}>
          <h2 style={{fontWeight:'600'}}>Description :</h2>
          <p style={{fontSize:'1.2em',fontWeight:"500"}}>{data?.description}</p>
        </div>
      </div>
    </div>
  );
};
export default Details;
