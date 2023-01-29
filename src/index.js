//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

// Method 1:

// import React from "react";
// import ReactDOM from "react-dom";

// const currentDate = new Date("July 21,2022 15:05:23");

// const currentTime = currentDate.getHours();

// function GreetMorning() {
//   return <h1 className="colorRed">Good Morning</h1>;
// }

// function GreetAfternoon() {
//   return <h1 className="colorGreen">Good Afternoon</h1>;
// }

// function GreetEvening() {
//   return <h1 className="colorBlue">Good Evening</h1>;
// }

// function Greetings(currentTime) {
//   const time = currentTime.time;
//   if (time <= 12) {
//     return <GreetMorning />;
//   } else if (time > 12 && time <= 19) {
//     return <GreetAfternoon />;
//   } else if (time > 19) {
//     return <GreetEvening />;
//   }
// }

// ReactDOM.render(
//   <div>
//     <Greetings time={currentTime} />
//   </div>,
//   document.getElementById("root")
// );

// Method 2 :

import React from "react";
import ReactDOM from "react-dom";
import App from "./ReactComponents/App";

ReactDOM.render(<App />, document.getElementById("root"));
