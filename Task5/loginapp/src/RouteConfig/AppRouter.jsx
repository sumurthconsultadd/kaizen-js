/* eslint-disable react/prop-types */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRouteList from "./ProtectedRoutes";
import PublicRouteList from "./PublicRoutes";
import { useAppContext } from "../AppContext";

const AppRouter = () => {
  const { token, loading } = useAppContext();

  const protectedCheck = (element) => {
    return loading ? null : token ? (
      element
    ) : (
      <Navigate replace to={"/login"} />
    );
  };

  const publicCheck = (element) => {
    return loading ? null : token ? <Navigate replace to={"/"} /> : element;
  };

  const RoutesList = ProtectedRouteList.map(({ path, element }, index) => {
    return <Route key={index} path={path} element={protectedCheck(element)} />;
  }).concat(
    PublicRouteList.map(({ path, element }, index) => {
      return <Route key={index} path={path} element={publicCheck(element)} />;
    })
  );

  return (
    <>
      <Router>
        <Routes>{RoutesList}</Routes>
      </Router>
    </>
  );
};

export default AppRouter;
