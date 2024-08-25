import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate("/");
  };
  return (
    <>
      <h1>This is Contact page</h1>
      <button onClick={handleRoute}>Click here to go home</button>
    </>
  );
};

export default Contact;
