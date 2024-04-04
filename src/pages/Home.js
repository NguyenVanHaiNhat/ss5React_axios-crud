import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link, Outlet} from "react-router-dom";

export default function Home(){
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <Link to={'/'}>List Student</Link>
            <Link to={'/create-student'}>Create Student</Link>
            <Link to={'/edit-student'}>Edit Student</Link>
            <hr/>
            <Outlet></Outlet>
        <h1>Home</h1>
            <Footer></Footer>
        </>
    )
}