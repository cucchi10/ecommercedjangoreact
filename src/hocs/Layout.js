import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//import connect from "react-redux/es/exports";
import { connect } from 'react-redux';
import { useEffect } from "react";

import { check_authenticated, load_user, refresh } from '../redux/actions/auth';

import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";

const Layout = (props) => {

    useEffect(()=>{
        props.refresh()
        props.check_authenticated()
        props.load_user()
    }, []);

    return (
        <div>
            <Navbar/>
            <ToastContainer autoClose={5000}/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default connect(null, {
    check_authenticated,
    load_user,
    refresh,
})(Layout);