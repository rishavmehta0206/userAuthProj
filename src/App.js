import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";
import Shared from "./pages/Shared";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function App() {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Shared />}>
          <Route index element={<Home />} />
          <Route
            path="/login"
            element={user !== null ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user !== null ? <Navigate to="/" /> : <Register />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
