import axios from "axios";
import React, { useState } from "react";
import Loader from "../../components/Loader/loader";
import styles from './login.module.css'
const Login = () => {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userData = {
      email, password
    }


    const loginUser = (e) => {
        setLoading(true)
        e.preventDefault();
        axios.post("http://localhost:5000/api/v1/login", userData)
            .then((res) => {
                setLoading(false)
                console.log(res)
                alert("Success Login")
            })
            .catch((err) => { console.log(err) });

    }

    return (
        <React.Fragment>
        <section className={styles.auth_account}>
            <div className="container">
                <div className="row">
                    <div className="col-6 m-auto">
                        <h1 className="text-center my-2">LOGIN ACCOUNT</h1>
                        <form>
                            <input className="form-control my-2" type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter email" />
                            <input className="form-control my-2" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="password" />
                                {loading ? <Loader /> : <button className={`btn btn-primary ${styles.btn_main}`}   onClick={loginUser}>Login</button>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </React.Fragment>
    );
};

export default Login;