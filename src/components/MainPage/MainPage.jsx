/* eslint-disable jsx-a11y/anchor-is-valid */
import Header from "../Header/Header";
import Navigation from "../Nav/Navigation";
import Timer from "../Timer/Timer";
import MainPageButton from "../MainPageButton/MainPageButton";
import "./MainPage.css";
import adImg from "../../icons/MainPage-logos/ad-banner-img.png";
import book from "../../icons/MainPage-logos/book.png";
import checkmark from "../../icons/MainPage-logos/checkmark.png";
import userLogo from "../../icons/MainPage-logos/User.png";

export default function MainPage() {
  return (
    <div className="main_page">
      <div className="left">
        <Navigation />
      </div>
      <div className="right">
        <Header />
        <div className="content">
          <div className="ad_banner">
            <div className="ad_banner_left">
              {" "}
              <h3 className="ad_banner_title">
                До 31 декабря любой курс со скидкой 20%
              </h3>
              <div className="ad_banner_text">
                До конца года у вас есть уникальная возможность воспользоваться
                нашей новогодней скидкой 20% на любой курс!
              </div>
            </div>
            <div className="ad_banner_right">
              <img className="ad_img" src={adImg} alt="Ad banner logo" />
            </div>
          </div>
          <div className="upcoming_lessons">
            <h3 className="title">Следующее занятие начнется через:</h3>
            <Timer days={6} hours={0} minutes={0} />
            <a href="#">
              <button className="upcoming_btn">Перейти</button>
            </a>
          </div>
          <div className="tasks">
            <div className="homework">
              <h3 className="tasks_title">Домашние задания</h3>
              <div className="tasks_circle">
                <img src={book} alt="Book logo" />
              </div>
            </div>
            <div className="report">
              <h3 className="tasks_title">
                Отчеты
                <br /> от учителей
              </h3>
              <div className="tasks_circle">
                <img src={checkmark} alt="Checkmark logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="balance_container">
          <div className="balance">
            <h3 className="balance_title">Баланс занятий </h3>
            <div className="cards">
              <div className="card">
                <div className="card_name">Ментальная Арифметика</div>
                <div className="card_circle">
                  <div className="card_circle_number">32</div>
                </div>
              </div>
              <div className="card">
                <div className="card_name">Программирование</div>
                <div className="card_circle">
                  <div className="card_circle_number">0</div>
                </div>
              </div>{" "}
              <div className="card">
                <div className="card_name">Скорочтение</div>
                <div className="card_circle">
                  <div className="card_circle_number">4</div>
                </div>
              </div>
              <MainPageButton />
            </div>
          </div>
          <div className="upcoming_schedule">
            <div className="upcoming_schedule_title">Ближайшие уроки</div>
            <div className="upcoming_schedule_main">
              <div className="date_container">
                <div className="date">1</div>
                <div className="month">мая</div>
              </div>
              <div className="upcoming_schedule_name">
                Ментальная Арифметика
              </div>
              <div className="time_teacher_container">
                <div className="time">14:00-14:25</div>
                <div className="teacher">
                  <img src={userLogo} alt="User logo" />
                  <div className="teacher_name">Белкина Инна</div>
                </div>
                <div className="buttons_container">
                  <button className="light_button">Button</button>
                  <button className="dark_button">Button</button>
                </div>
              </div>
            </div>
            <MainPageButton />
          </div>
        </div>
      </div>
    </div>
  );
}
