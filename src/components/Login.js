// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Form from "react-bootstrap/Form";
// // import "./login.css";
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";

// export default function Login() {
//   const [email, setEmail] = useState("");

//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     alert(email);
//     alert(password);
//   }

//   return (
//     <div className="container bg-warning">
//       <Form onSubmit={handleSubmit} class="formS bg-warning">
//         <Form.Group size="lg" controlId="email">
//           <Form.Label>Email</Form.Label>

//           <Form.Control
//             autoFocus
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Password</Form.Label>

//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Button block size="lg" type="submit" disabled={!validateForm()}>
//           Login
//         </Button>
//       </Form>
//     </div>
//   );
// }
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${formData.username}\nPassword: ${formData.password}`);
    setFormData({ username: "", password: "" });
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      <form class="lForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
        <div>
          <Link to="/Signup">SignUp</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;