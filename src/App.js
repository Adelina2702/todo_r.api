import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Header from "./components/header";
import AdminPage from "./page/Admin";
import HomePage from "./page/HomePage";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/homepage" element={<HomePage/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/admin" element={<AdminPage/>}/>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
