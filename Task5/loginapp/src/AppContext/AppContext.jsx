import { useState, useEffect, createContext, useContext } from "react";

const AppContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Context is unavailable");
  }
  return context;
};

// eslint-disable-next-line react/prop-types
export const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const appToken = localStorage.getItem("token");
    if (appToken) {
      setToken(appToken);
    }
    setLoading(false);
  }, []);

  return (
    <AppContext.Provider value={{ token, setToken, loading }}>
      {children}
    </AppContext.Provider>
  );
};
