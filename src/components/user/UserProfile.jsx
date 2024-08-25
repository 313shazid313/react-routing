import { useLocation } from "react-router-dom";

const UserProfile = () => {
  const { state } = useLocation();
  console.log({state});  

  return (
    <>
      {" "}
      <br />
      <br />
      <>
        {state ? (
          <>
            <h1>User Profile</h1>
            <h3>User Name is : {state.name}</h3>
            <h3>User Email is : {state.email}</h3>
            <h3>User City is : {state.city}</h3>
          </>
        ) : (
          <>
            <p>NoProfile Found</p>
          </>
        )}
      </>
    </>
  );
};

export default UserProfile;
