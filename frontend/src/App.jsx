import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./component/Header";
// import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/vendor.css";
import "./assets/css/main.css";
import Main from "./component/Main";
function App() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch("/members/hello")
      .then((response) => {
        return response.json();
      })
      .then(function (data) {
        setMessage(data);
      });
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
