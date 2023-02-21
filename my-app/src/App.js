import logo from "./logo.svg";
import "./App.css";
import { React, useContext, useEffect, useState } from "react";

function Language() {
  const languageData = {
    vi: {
      login: "Đăng nhập",
      logout: "Đăng xuất",
      username: "Tên đăng nhập ...",
      required: "Không được bỏ trống",
      welcome: "Xin chào",
    },
    en: {
      login: "Login",
      logout: "Logout",
      username: "Username ...",
      required: "This field is required",
      welcome: "Welcome",
    },
    fr: {
      login: "connexion",
      logout: "Se déconnecter",
      username: "Nom d'utilisateur ...",
      required: "This field is required",
      welcome: "Bonjour",
    },
  };
  const [language, setLanguage] = useState("vi");
  const [content, setContent] = useState({});
  const [show, setShow] = useState(true);
  const [formValue, setFormValue] = useState({
    name: "",
  });

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    setFormValue({
      ...formValue,
      [fieldName]: value,
    });
  };
  console.log(formValue.name.length);
  useEffect(() => {
    if (language == "en") {
      setContent(languageData.en);
    } else if (language == "vi") {
      setContent(languageData.vi);
    } else if (language == "fr") {
      setContent(languageData.fr);
    }
  }, [language]);
  return (
    <div className="container">
      {show ? (
        <div className="content-container">
          <div className="header">
            <div>MindX</div>
            <div>{content.login}</div>
          </div>
          <div className="login-container">
            <form className="user-input-container">
              <h1 className="login-title"> {content.login} </h1>
              <input
                value={formValue.name}
                onChange={handleChange}
                name="name"
                type="name"
                className="user-input"
                placeholder={content.username}
              ></input>
              <button className="btn-login" onClick={() => setShow(false)}>
                {" "}
                {content.login}{" "}
              </button>
            </form>
          </div>
        </div>
      ) : (
        <>
          <div className="header">
            <div>MindX</div>
            <div>
              {" "}
              {content.welcome} {formValue.name}
            </div>
          </div>
          <button
            className="btn-login"
            onClick={() => setShow(!show)}
            type="button"
          >
            {content.logout}
          </button>
        </>
      )}
      <div className="select-container">
        <select
          className="form-select"
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
        >
          <option> vi </option>
          <option> en </option>
          <option> fr </option>
        </select>
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Language />
    </div>
  );
}

export default App;
