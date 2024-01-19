import { useState } from "react";
import { loginApi } from "../API/auth";
import { useAppContext } from "../AppContext";

// eslint-disable-next-line react/prop-types
const Login = () => {
  const { setToken } = useAppContext();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await loginApi({ username, password });
      localStorage.setItem("token", res.token);
      setToken(res.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={() => handleLogin()}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
