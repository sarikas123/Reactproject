import React from "react";
import "./styles.css";
function App() {
  let cdate = new Date();
  cdate = cdate.toLocaleTimeString();
  let message = "";
  if (cdate >= 5 && cdate < 12) {
    message = "Good morning";
  } else if (cdate >= 12 && cdate < 4) {
    message = "Good afternoon";
  } else if (cdate >= 4 && cdate < 6) {
    message = "Good evening";
  } else {
    message = "Good night";
  }

  return (
    <div className="App">
      <h1>Hello sir,{message}</h1>
    </div>
  );
}
export default App;
