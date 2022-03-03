
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import FloatingActionButtons from "../components/MuiButton";
// import Dashboard from "../screen/Dashboard";
// import Home from "../screen/Home";
import Login from "../screen/Login";
import Signup from "../screen/Signup";
import SpeechApp from "../screen/speech";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<SpeechApp />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/muibutton' element={<FloatingActionButtons />} />
        </Routes>
      </div>
    </Router>
  );
}


