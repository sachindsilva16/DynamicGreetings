import React from "react";
const currentDate = new Date("January 29,2023 15:00:00");
const currentTime = currentDate.getHours();

function Heading() {
  let greetings;
  let colorType = {
    color: ""
  };

  if (currentTime <= 12) {
    greetings = "Good Morning";
    colorType.color = "red";
  } else if (currentTime > 12 && currentTime <= 18) {
    greetings = "Good Afternoon";
    colorType.color = "green";
  } else if (currentTime > 18) {
    greetings = "Good Evening";
    colorType.color = "blue";
  }
  return (
    <h1 className="heading" style={colorType}>
      {greetings}
    </h1>
  );
}
export default Heading;
