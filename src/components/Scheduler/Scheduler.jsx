/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Scheduler.css";
import Navigation from "../Nav/Navigation";
import DayOfTheMonth from "../DayOfTheMonth/DayOfTheMonth";
import message from "../../icons/Scheduler-logos/Messages.png";
import avatar from "../../icons/Scheduler-logos/avatar.png";
import arrow from "../../icons/Scheduler-logos/Arrow.png";
import monthArrowLeft from "../../icons/Scheduler-logos/left.png";
import monthArrowRight from "../../icons/Scheduler-logos/right.png";
import { useState } from "react";

export default function Scheduler() {
  const [count, setCount] = useState(2);

  return (
    <div className="scheduler">
      <div className="left">
        <Navigation />
      </div>
      <div className="right">
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
        <div className="change_panel">
          <select className="select_subject" name="select">
            <option defaultValue>Выбрать предмет</option>
            <option value="value1">Значение 1</option>
            <option value="value2">Значение 2</option>
            <option value="value3">Значение 3</option>
          </select>
          <a href="#">
            <button className="submit_btn">Изменить расписание</button>
          </a>
        </div>
        <div className="calendar">
          <div className="month_pagination">
            <a href="#">
              <img
                src={monthArrowLeft}
                alt="Left arrow"
                className="left_arrow"
              ></img>
            </a>
            <a href="#">
              <div className="name">Март 2024</div>
            </a>
            <a href="#">
              <img
                src={monthArrowRight}
                alt="Right arrow"
                className="right_arrow"
              ></img>
            </a>
          </div>
          <a href="#">
            <div className="day_section">Сегодня</div>
          </a>
          <a href="#">
            <div className="faq">?</div>
          </a>
        </div>
        <div className="main_section">
          <div className="week_section">
            <div className="week_day">Пн</div>
            <div className="week_day">Вт</div>
            <div className="week_day">Ср</div>
            <div className="week_day">Чт</div>
            <div className="week_day">Пт</div>
            <div className="week_day">Сб</div>
            <div className="week_day">Вс</div>
          </div>
          <DayOfTheMonth />
        </div>
      </div>
    </div>
  );
}
