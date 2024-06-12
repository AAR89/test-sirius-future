import "./Timer.css";
import React from "react";

export default function Timer({ days = 0, hours = 0, minutes = 0 }) {
  let [[d, h, m], setTime] = React.useState([days, hours, minutes]);

  const tick = () => {
    if (d === 0 && h === 0 && m === 0) {
      setTime((d = 0), (h = 0), (m = 0));
    } else if (h === 0 && m === 0) {
      setTime([d - 1, 59, 59]);
    } else if (m === 0) {
      setTime([d, h - 1, 59]);
    } else {
      setTime([d, h, m - 1]);
    }
  };

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div>
      <p className="timer">
        {`
        ${d.toString().padStart(2)} д 
        ${h.toString().padStart(2, "0")} ч 
        ${m.toString().padStart(2, "0")} мин
        `}
      </p>
    </div>
  );
}
