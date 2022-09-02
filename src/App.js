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
function App() {
  const { user } = useSelector((state) => state.auth);
  // const user = JSON.stringify(localStorage.getItem("user"))
  console.log(user);

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Shared />}>
          {/* public routes */}
          <Route index element={<Home />} />
          <Route path="/unauthorized" element={<UnAuthorized />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          {/* we want to protect these routes */}
          <Route element={<RequireAuth allowedRoles={[2001]} />}>
            <Route path="/about" element={<About />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[1984]} />}>
            <Route path="/blog" element={<Blogs />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[5150]} />}>
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
