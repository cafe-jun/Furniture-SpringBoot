import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "@assets/css/vendor.css";
import "@assets/css/main.css";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import { publicRoutes } from "@components/route";
import PublicRoute from "@common/publicRoute";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          {publicRoutes.map((route) => (
            <PublicRoute
              component={route.component}
              key={route.path}
              path={route.path}
            />
          ))}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
