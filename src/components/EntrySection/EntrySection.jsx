/* eslint-disable jsx-a11y/anchor-is-valid */
import "./EntrySection.css";
import mainLogo from "../../icons/EntrySection-logos/entry-logo.png";
import detailLogo1 from "../../icons/EntrySection-logos/logo2.png";
import detailLogo2 from "../../icons/EntrySection-logos/logo3.png";
import "../../fonts/Circe Rounded/stylesheet.css";

export default function EntrySection() {
  return (
    <div className="EntrySection">
      <div className="content">
        <div className="EntrySection_logos_container">
          <img
            className="EntrySection_logo_main"
            src={mainLogo}
            alt="Entry logo main"
          />
          <img
            className="EntrySection_logo_detail1"
            src={detailLogo1}
            alt="Entry logo detail 1"
          />
          <img
            className="EntrySection_logo_detail2"
            src={detailLogo2}
            alt="Entry logo detail 2"
          />
        </div>
        <h3 className="EntrySection_title">Вход в Sirius Future</h3>
        <input
          className="EntrySection_input"
          placeholder="E-mail"
          type="text"
        />
        <input
          className="EntrySection_input2"
          placeholder="Пароль"
          type="password"
        />
        <div className="Checkbox_container">
          <input className="Checkbox" type="checkbox" />
          <label className="Checkbox_label">Запомнить меня</label>
        </div>
      </div>
      <button className="Submit">Войти</button>
      <div className="linksSection">
        <a className="linksSection_link" href="#">
          Я забыл пароль
        </a>
        <a className="linksSection_link" href="#">
          Войти как тренер
        </a>
      </div>
      <div className="Registration_content">
        <h3 className="Registration_content_title">Нет аккаунта?</h3>
        <a className="Registration_content_link" href="#">
          Зарегистрироваться
        </a>
      </div>
      <div className="language">
        <a className="language_link1" href="#">
          RU
        </a>
        <a className="language_link2" href="#">
          EN
        </a>
      </div>
    </div>
  );
}
