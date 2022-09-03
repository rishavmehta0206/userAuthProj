import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";
import Shared from "./pages/Shared";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import RequireAuth from "./httpHandler/RequireAuth";
import UnAuthorized from "./pages/UnAuthorized";
import PrivateRoute from "./httpHandler/PrivateRoute";
function App() {
  const { user } = useSelector((state) => state.auth);
  // const user = JSON.stringify(localStorage.getItem("user"))
  console.log(user);

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Shared />}>
          {/*these routes are public routes. do not require auth logic */}
          <Route index element={<Home />} />
          <Route path="/unauthorized" element={<UnAuthorized />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          {/*1. This is one way to protect the routes.We want to protect these routes */}

          {/* <Route element={<RequireAuth allowedRoles={[2001]} />}>
            <Route path="/about" element={<About />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[1984]} />}>
            <Route path="/blog" element={<Blogs />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[5150]} />}>
            <Route path="/contact" element={<Contact />} />
          </Route> */}

          {/* This is second way to protect the routes. */}
          <Route element={<PrivateRoute allowedRoles={[2001]} />}>
            <Route exact path="/about" element={<About />} />
          </Route>
          <Route element={<PrivateRoute allowedRoles={[1984]} />}>
            <Route exact path="/contact" element={<Contact />} />
          </Route>
          <Route element={<PrivateRoute allowedRoles={[5150]} />}>
            <Route exact path="/blog" element={<Blogs />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
