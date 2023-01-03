import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import "@assets/css/vendor.css";
// import "@assets/css/main.css";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import { PrivateRoute } from "@components/route/privateRoute";
import {
  authComponentRouters,
  privateComponentRouters,
  publicComponentRouters,
} from "@components/route/componentRouter";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Routes>
          {authComponentRouters.map((route) => (
            <Route
              element={<route.component />}
              key={route.path}
              path={route.path}
            />
          ))}
        </Routes>
        <Routes>
          <Route element={<Header />} />
          {publicComponentRouters.map((route) => (
            <Route
              element={<route.component />}
              key={route.path}
              path={route.path}
            />
          ))}
          <Route element={<Footer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

{
  /* <Routes>
        <Route element={<Header />} />
        {publicComponentRouters.map((route) => (
          <Route
            element={<route.component />}
            key={route.path}
            path={route.path}
          />
        ))} */
}
{
  /* 인증을 반드시 해야지만 접속 가능한 페이지 정의 */
}
{
  /* {privateComponentRouters.map((route) => ( */
}
