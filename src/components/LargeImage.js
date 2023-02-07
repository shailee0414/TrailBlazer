import React from "react";

const LargeImage = (data) => {
  
  return (
    <div position="static">
      <div>
        <img alt=''
          src={data?.data[0]?.image}
          width="100%"
          height="400rem"
          position="relative"
        />
        <div
          style={{
            textAlign: "center",
            position: "absolute",
            top: "17rem",
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <h2
            style={{ color: "white", fontSize: "3.5em", marginBottom: "0" ,fontWeight:'bolder'}}
            height="fitToContent"
          >
            BOOK'S  WORLD 
          </h2>
          <h2 style={{ color: "white", textAlign: "center", marginTop: "0",fontWeight:'500'}}>
           There is only one thing that could replace a book with the next book
          </h2>
        </div>
      </div>
    </div>
  );
};
export default LargeImage;
