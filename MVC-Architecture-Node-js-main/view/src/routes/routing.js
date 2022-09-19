import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Signup from '../screen/signup/signup';
import Login from '../screen/login/login';

import * as React from 'react'
import NotFound from '../components/NotFound/notfound';

const Routing = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route index element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Routing