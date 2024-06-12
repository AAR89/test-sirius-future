/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import message from "../../icons/Scheduler-logos/Messages.png";
import avatar from "../../icons/Scheduler-logos/avatar.png";
import arrow from "../../icons/Scheduler-logos/Arrow.png";
import './Header.css'

export default function Header() {
  const [count, setCount] = useState(2);
  return (
    <header className="header">
      <div className="circles">
        <div className="header_circle">
          <img className="msg_logo" src={message} alt="Message logo" />
          <div className="msg_count" onClick={() => setCount(count - 1)}>
            {count}
          </div>
        </div>
        <div className="header_circle">
          <img src={avatar} alt="Avatar" />
        </div>
      </div>
      <a href="#">
        <img src={arrow} alt="Arrow" />
      </a>
    </header>
  );
}
