import axios from "axios";
import { useState } from "react";
import "./signup.css"; // Import the new CSS file

export default function SignUp() {
  const [empdata, setempdata] = useState({ name: "", email: "", phone: 0 });
  const [server_msg, setmsg] = useState("");

  function senddata() {
    axios.post("http://localhost:8080/addemp", empdata).then((response) => {
      if (response.status === 200) {
        console.log("Registered");
        // setmsg(d.msg);
      } else {
        setmsg("page not found");
      }
    });
  }

  return (
    <div className="signup-container">
      <label className="signup-label">Name</label>
      <input
        type="text"
        className="signup-input"
        onChange={(e) => setempdata({ ...empdata, name: e.target.value })}
      />

      <label className="signup-label">Email</label>
      <input
        type="email"
        className="signup-input"
        onChange={(e) => setempdata({ ...empdata, email: e.target.value })}
      />

      <label className="signup-label">Phone</label>
      <input
        type="phone"
        className="signup-input"
        onChange={(e) => setempdata({ ...empdata, phone: e.target.value })}
      />

      <input
        type="button"
        value="Signup"
        className="signup-button"
        onClick={senddata}
      />

      <div className="signup-msg">
        <h3>{server_msg}</h3>
      </div>
    </div>
  );
}
