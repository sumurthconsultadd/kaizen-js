import { useAppContext } from "../AppContext";

// eslint-disable-next-line react/prop-types
const Home = () => {
  const { setToken } = useAppContext();

  const handleLogout = () => {
    setToken(null);
    localStorage.clear();
  };

  return (
    <>
      <div>Welcome to home page</div>
      <button onClick={() => handleLogout()}>Logout</button>
    </>
  );
};

export default Home;
