import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Landing_page/Navigation";
import LoginPage from "./pages/LoginPage";
import Signup_orphanage_page from "./pages/Signup_orphanage_page";
import Signuppage from "./pages/Signuppage";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import "./App.css";
import Value from "./components/Landing_page/Value";

function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Value" element={<Value />} />
          <Route path="/Signup" element={<Signuppage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Orphanage_signup" element={<Signup_orphanage_page />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
