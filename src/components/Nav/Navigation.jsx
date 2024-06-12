/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import "./Navigation.css";
import Logomark from "../../icons/Navigation-logos/Logomark.png";
import Group from "../../icons/Navigation-logos/Group.png";
import Home from "../../icons/Navigation-logos/Home.png";
import Wallet from "../../icons/Navigation-logos/Wallet.png";
import Url0 from "../../icons/Navigation-logos/left menu icon (0).png";
import Url1 from "../../icons/Navigation-logos/left menu icon (1).png";
import Url2 from "../../icons/Navigation-logos/left menu icon (2).png";
import Url3 from "../../icons/Navigation-logos/left menu icon (3).png";
import Url4 from "../../icons/Navigation-logos/left menu icon (4).png";
import Url5 from "../../icons/Navigation-logos/left menu icon (5).png";
import Url6 from "../../icons/Navigation-logos/left menu icon (6).png";

export default function Navigation() {
  return (
    <div className="Nav">
      <div className="nav_logos">
        <img src={Logomark} alt="Logomark image" />
        <img className="Group_logo" src={Group} alt="Group image" />
      </div>
      <div className="nav_links">
        <button className="nav_links_container">
          <img
            src={Home}
            alt="Home logo"
            className="nav_links_container_logo"
          />
          <a
            href="http://localhost:3000/2"
            className="nav_links_container_link"
          >
            Главная
          </a>
        </button>
        <button className="nav_links_container">
          <img
            src={Url0}
            alt="Home logo"
            className="nav_links_container_logo"
          />
          <a
            href="http://localhost:3000/3"
            className="nav_links_container_link"
          >
            Расписание
          </a>
        </button>
        <button className="nav_links_container">
          <img
            src={Wallet}
            alt="Home logo"
            className="nav_links_container_logo"
          />
          <a href="#" className="nav_links_container_link">
            Оплата
          </a>
        </button>
        <button className="nav_links_container">
          <img
            src={Url1}
            alt="Home logo"
            className="nav_links_container_logo"
          />
          <a href="#" className="nav_links_container_link">
            Достижения
          </a>
        </button>
        <button className="nav_links_container">
          <img
            src={Url2}
            alt="Home logo"
            className="nav_links_container_logo"
          />
          <a href="#" className="nav_links_container_link">
            Тренажеры
          </a>
        </button>
        <button className="nav_links_container">
          <img
            src={Url3}
            alt="Home logo"
            className="nav_links_container_logo"
          />
          <a href="#" className="nav_links_container_link">
            Библиотека
          </a>
        </button>
        <button className="nav_links_container">
          <img
            src={Url4}
            alt="Home logo"
            className="nav_links_container_logo"
          />
          <a href="#" className="nav_links_container_link">
            Проверка связи
          </a>
        </button>
        <button className="nav_links_container">
          <img
            src={Url5}
            alt="Home logo"
            className="nav_links_container_logo"
          />
          <a href="#" className="nav_links_container_link">
            Настройка
          </a>
        </button>
        <button className="nav_links_container">
          <img
            src={Url6}
            alt="Home logo"
            className="nav_links_container_logo"
          />
          <a href="#" className="nav_links_container_link">
            Вопросы
          </a>
        </button>
      </div>
      <div className="nav_footer">
        <div className="nav_footer_text">
          <h3 className="nav_footer_title">Учитесь бесплатно</h3>
          <div className="nav_footer_main">
            Приводите друзей с детьми заниматься в Sirius Future и получайте
            подарки!
          </div>
          <button className="nav_footer_btn">Узнать</button>
        </div>
      </div>
    </div>
  );
}

// const links = {
//   url1: "../../icons/Navigation-logos/Home.png",
//   url2: "../../icons/Navigation-logos/left menu icon (1).png",
//   url3: "../../icons/Navigation-logos/left menu icon (2).png",
//   url4: "../../icons/Navigation-logos/left menu icon (3).png",
//   url5: "../../icons/Navigation-logos/left menu icon (4).png",
//   url6: "../../icons/Navigation-logos/left menu icon (5).png",
//   url7: "../../icons/Navigation-logos/left menu icon (6).png",
// };
