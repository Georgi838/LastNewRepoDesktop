import React, { useEffect, useState } from "react";

import { useAuth } from "../AuthContext";

import { GridLoader } from "react-spinners";
import PageHeader from "../custom/Components/header";
import PageFooter from "../custom/Components/footer";
import "../styles/AuthPage.css";
import { useNavigate } from "react-router-dom";

function App() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const { userSighIn, currentUser, loading } = useAuth();
 const navigate = useNavigate();
  // function handleSubmit() {
  //   userSighIn(email, password);
  // }

  return (
    <div className={loading ? "disable-events" : null}>
      {loading ? (
        <GridLoader className="loader" color="#1D566B" size={30} />
      ) : null}
      <div
        className={
          loading
            ? "auth-main-content-div opacity-container"
            : "auth-main-content-div"
        }
      >
        <PageHeader />

        <main className="main__section--AuthPage">
          <div className="mainForm">
            <div className=" mainForm-div">
              {/* <h3>Имейл:</h3>
              <input
                type="email"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mainForm-div">
              <h3>Парола:</h3>
              <input
                type="password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />*/}
              <h2> firebase authentication системата беше премахната за да мога да го кача в github, бутоните просто ви навигират между страниците.  </h2>
            </div> 

            <button className="submit-btn" type="submit" onClick={() => navigate("/mainPage")} >
            
              Вляз
            </button>
          </div>
        </main>

        <PageFooter />
      </div>
    </div>
  );
}

export default App;
