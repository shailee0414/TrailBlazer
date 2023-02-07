import React from "react";

const TextContent = () => {
  return (
    <div className="ui container">
      <div
        style={{
          display: "flex",
          marginTop: "3em",
          color: "#453C67",
          justifyContent: "center",
          flexDirection: "column",
          // marginLeft: "10rem",
          // marginRight: "10rem",
        }}
      >
        <h4
          style={{
            textAlign: "center",
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: "1.7em",
          }}
        >
          BOOK QUOTES
        </h4>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.2em",
          }}
        >
          The more that you read, the more things you will know.
          The more that you learn, them more place you will do.
          <br></br>
          <b>- DR SEUSS</b>

        </p>
      </div>
    </div>
  );
};

export default TextContent;
