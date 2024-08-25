import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);

    if (username === "topg" || password === "bottomg") {
      const someUserInfo = {
        name: "Shazid Hossain",
        email: "hossainshazid567@gmail",
        city: "Dhaka",
      };

      alert("your login successful");
      navigate("/dashboard/user/profile", { state: someUserInfo });
    }
  };

  return (
    <>
      <br />
      <br />
      <h1>User signin</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          onChange={handleEmailChange}
        />{" "}
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          onChange={handlePasswordChange}
        />{" "}
        <button type="submit">Click to Submit</button>
      </form>
    </>
  );
};

export default Signin;
