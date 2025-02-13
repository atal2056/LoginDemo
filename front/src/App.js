// Frontend - src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Landing from "./components/Landing";
function App() {
    return (
        <Router>
            <Routes>
                 <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/landing" element={<Landing />} />
            </Routes>
        </Router>
    );
}
export default App;