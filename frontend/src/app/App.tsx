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
import {
  privateComponentRouters,
  publicComponentRouters,
} from "@components/route";
import { PrivateRoute } from "@components/route/privateRoute";
import SignIn from "@components/member/signin/SignIn";
// import { PublicRoute } from "@common/publicRoute";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          {/* 인증을 반드시 하지 않아야만 접속 가능한 페이지 정의 */}
          {/* <Route element={<PrivateRoute authentication={false} />}> */}
          <Route element={<PrivateRoute authentication={false} />}>
            <Route path="/signin" element={<SignIn />} />
          </Route>
          {/* {publicComponentRouters.map((route) => (
              <Route
                element={<route.component />}
                key={route.path}
                path={route.path}
              />
            ))} */}
          {/* </Route> */}
          {/* 인증을 반드시 해야지만 접속 가능한 페이지 정의 */}
          {/* <Route element={<PrivateRoute authentication={true} />}> */}
          {/* {privateComponentRouters.map((route) => (
              <Route
                element={<route.component />}
                key={route.path}
                path={route.path}
              />
            ))} */}
          {/* </Route> */}
          <Route />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
