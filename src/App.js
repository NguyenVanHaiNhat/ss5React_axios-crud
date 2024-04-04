import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import ListStudent from "./pages/student/ListStudent";
import CreateStudent from "./pages/student/CreateStudent";

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home/>}>
            <Route path={'/'} element={<ListStudent/>}></Route>
            <Route path={'/create-student'} element={<CreateStudent/>}></Route>
            <Route path={'/edit-student/:id'} element={<CreateStudent/>}></Route>
        </Route>
        <Route path={'/admin'} element={<Admin></Admin>}></Route>
      </Routes>
    </>
  );
}

export default App;
