import React from "react";

const containerStyle = {
  position: "relative",
  width: 500,
  height: 40,
  border: "1px solid #0d47a1",
  borderRadius: 5,
  backgroundColor: "#bbdefb",
  color: "#263238",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: 10,
  margin: 10,
  paddingRight: 30
};

const buttonStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  fontSize: "1.5em",
  color: "#0d47a1",
  outline: "none"
};

const Notification = ({ children, onDismiss }) => {
  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={onDismiss}>
        &#x2717;
      </button>
      <p>{children}</p>
    </div>
  );
};

export default Notification;
