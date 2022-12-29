import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import "@assets/css/vendor.css";
import "@assets/css/main.css";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import { PrivateRoute } from "@components/route/privateRoute";
import SignIn from "@components/member/signin/SignIn";
import {
  privateComponentRouters,
  publicComponentRouters,
} from "@components/route";
// import { PublicRoute } from "@common/publicRoute";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* 인증을 반드시 하지 않아야만 접속 가능한 페이지 정의 */}
        {/* <Route element={<PrivateRoute authentication={false} />}> */}
        {publicComponentRouters.map((route) => (
          <Route
            element={<route.component />}
            key={route.path}
            path={route.path}
          />
        ))}
        {/* 인증을 반드시 해야지만 접속 가능한 페이지 정의 */}
        {privateComponentRouters.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <PrivateRoute authentication={true}>
                <route.component />
              </PrivateRoute>
            }
          />
        ))}
        <Route />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
