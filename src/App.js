import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./components/Navbar";
import Four from "./components/Four";
import Six from "./components/Six";
import Eight from "./components/Eight";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Home from "./Home";
import KnowMore from "./components/knowMore";
import Login from "./components/Login";
import Seven from "./components/Seven";
import SignUp from "./components/SignUp";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [btnstatus, setBtnStatus] = useState(true);
  const [empdata, setEmpData] = useState({
    fname: "",
    lname: "",
    uname: "",
    email: "",
    pass: "",
  });
  const [logdata, setLogData] = useState({ uname: "", pass: "" });
  const [serverMsg, setServerMsg] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if there's a user token in localStorage
    const userToken = localStorage.getItem("userToken");

    if (userToken) {
      // Set the isLoggedIn state to true if a token exists
      setIsLoggedIn(true);
    }
  }, []);
  const handleLogin = () => {
    axios
      .post("http://localhost:8080/checklogin", logdata)
      .then((response) => {
        // Handle successful login
        console.log("Login successful");
        setBtnStatus(!btnstatus);
        setIsLoggedIn(true);

        // Store user information or token in localStorage
        localStorage.setItem("userToken", response.data.token); // assuming a token is returned
      })
      .catch((error) => {
        // Handle login error
        // console.error("Login error:", error);
        alert("Login failed");
        setServerMsg("Login failed. Please check your credentials.");
      });
  };
  // const handleLogout = () => {
  //   // Clear user information or token from localStorage
  //   localStorage.removeItem('userToken');
  //   setIsLoggedIn(false);

  //   // Redirect to the login page or perform any other necessary actions
  //   // For example, you can use react-router-dom to navigate to the login page
  //   window.location.href = '/login';
  // };
  const handleLogout = () => {
    // Clear user information or token from localStorage
    localStorage.removeItem("userToken");
    setIsLoggedIn(false);

    // Redirect to the login page or perform any other necessary actions
    // For example, you can use react-router-dom to navigate to the login page
    window.location.href = "/login";
  };
  const Layout = () => {
    return (
      <>
        <Nav />
        <button onClick={handleLogout}>Logout</button>
        <Outlet />
      </>
    );
  };

  const handleSignup = () => {
    axios
      .post("http://localhost:8080/adduser", empdata)
      .then((response) => {
        if (response.status === 200) {
          let d = response.data;
          alert(d.msg);
          console.log("successfull");
        } else {
          setServerMsg("Page not found");
        }
      })
      .catch((error) => {
        if (error && error.response && error.response.status === 400) {
          // Handle status code 400 (Bad Request)
          alert("User already exist, please login to continue");
        } else {
          console.error("Signup error:", error);
          setServerMsg("Signup failed. Please try again.");
        }
      });
  };
  useEffect(() => {
    if (serverMsg) {
      alert(serverMsg);
    }
  }, [serverMsg]);
  const handleLoginClick = () => {
    handleLogin();
  };

  const handleSignupClick = () => {
    handleSignup();
  };

  return (
    <>
      {!isLoggedIn ? (
        <div className="body">
          <div className="mainpage">
            <input
              type="checkbox"
              className="input"
              id="chk"
              aria-hidden="true"
            />

            <div className="signup">
              <form onSubmit={handleSignupClick}>
                <label
                  className="label"
                  htmlFor="chk"
                  aria-hidden="true"
                  id="signup"
                >
                  Sign up
                </label>
                <input
                  id="input"
                  type="text"
                  name="fname"
                  placeholder="First name"
                  required=""
                  onChange={(e) =>
                    setEmpData({ ...empdata, fname: e.target.value })
                  }
                />
                <input
                  id="input"
                  type="text"
                  name="lname"
                  placeholder="Last name"
                  required
                  onChange={(e) =>
                    setEmpData({ ...empdata, lname: e.target.value })
                  }
                />
                <input
                  id="input"
                  type="text"
                  name="uname"
                  placeholder="User name"
                  required=""
                  onChange={(e) =>
                    setEmpData({ ...empdata, uname: e.target.value })
                  }
                />
                <input
                  id="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""
                  onChange={(e) =>
                    setEmpData({ ...empdata, email: e.target.value })
                  }
                />
                <input
                  id="input"
                  type="password"
                  name="pswd"
                  placeholder="Password"
                  required=""
                  onChange={(e) =>
                    setEmpData({ ...empdata, pass: e.target.value })
                  }
                />
                <button id="btnlog" type="submit">
                  Sign up
                </button>
              </form>
            </div>

            <div className="login">
              <form>
                <label className="label" htmlFor="chk" aria-hidden="true">
                  Login
                </label>
                <input
                  id="input"
                  type="text"
                  name="uname"
                  placeholder="Username"
                  required=""
                  onChange={(e) =>
                    setLogData({ ...logdata, uname: e.target.value })
                  }
                />
                <input
                  id="input"
                  type="password"
                  name="pswd"
                  placeholder="Password"
                  required=""
                  onChange={(e) =>
                    setLogData({ ...logdata, pass: e.target.value })
                  }
                />
                <button id="btnlog" type="button" onClick={handleLoginClick}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/About" element={<Four />}></Route>
              <Route path="/Contact" element={<Eight />}></Route>
              <Route path="/News" element={<Six />}></Route>
              <Route path="/KnowMore" element={<KnowMore />}></Route>
              <Route path="/Login" element={<Login />}></Route>
              <Route path="/Subscribe" element={<Seven />}></Route>
              <Route path="/Signup" element={<SignUp />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

// export default App;
