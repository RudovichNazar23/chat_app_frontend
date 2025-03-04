import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRouter from "./components/ProtectedRouter";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/" element={<ProtectedRouter child={<Home/>}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
