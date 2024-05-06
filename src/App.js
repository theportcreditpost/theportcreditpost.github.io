import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepages from "./components/Homepages";
import Events from "./components/Events";
import Pages from "./components/Pages";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Homepages} />
          <Route path="/page/:id" exact Component={Pages}></Route>
          <Route exact path="/events" Component={Events}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
