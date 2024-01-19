import { AppContextProvider } from "./AppContext";
import AppRouter from "./RouteConfig/AppRouter";

const App = () => {
  return (
    <>
      <AppContextProvider>
        <AppRouter />
      </AppContextProvider>
    </>
  );
};

export default App;
