import axios from "axios";
import { useState } from "react";
import "./seven.css"; // Import the CSS file

export default function Seven() {
  const [empdata, setempdata] = useState({ name: "", email: "", phone: 0 });
  const [server_msg, setmsg] = useState("");

  function senddata() {
    axios.post("http://localhost:8080/addsub", empdata).then((response) => {
      if (response.status === 200) {
        console.log("Registered");
        // setmsg(d.msg);
      } else {
        setmsg("page not found");
      }
    });
  }

  return (
    <div className="container">
      <label>Name</label>
      <input
        type="text"
        className="inputField"
        onChange={(e) => setempdata({ ...empdata, name: e.target.value })}
      />

      <label>Email</label>
      <input
        type="email"
        className="inputField"
        onChange={(e) => setempdata({ ...empdata, email: e.target.value })}
      />

      <label>Phone</label>
      <input
        type="phone"
        className="inputField"
        onChange={(e) => setempdata({ ...empdata, phone: e.target.value })}
      />

      <input
        type="button"
        value="Signup"
        className="signupButton"
        onClick={senddata}
      />

      <div>
        <h3>{server_msg}</h3>
      </div>
    </div>
  );
}
