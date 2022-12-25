import Header from "./component/Header";
import "./assets/css/vendor.css";
import "./assets/css/main.css";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import Main from "./component/Main";
import OAuth2RedirectHandler from "./common/config/oauth2/OAuth2RedirectHandler";
import SearchPws from "./component/Auth/SearchPws";
import Profile from "./component/Auth/Profile";
import EditPwd from "./component/Auth/EditPwd";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/search_password" element={<SearchPws />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit_password" element={<EditPwd />} />
          <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
