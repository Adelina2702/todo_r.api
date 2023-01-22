import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Card from "./components/card";
import Header from "./components/header";
import AdminPage from "./page/Admin";
import HomePage from "./page/HomePage";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/admin" element={<AdminPage/>}/>
      <Route path="/todo" element={<Card/>}/>  
    </Routes>
    </BrowserRouter>
  );
}

export default App;
