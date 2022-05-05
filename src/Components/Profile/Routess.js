import React from "react";
import Footer from "./Footer";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Submit from "./Submit";
import FindEmail from "./FindEmail";
import FindPassword from "./FindPassword";

export default function Routess() {
    return (
        <div>
    <BrowserRouter>
        <Footer />

        <Routes>
            <Route path="/Submit" element={<Submit/>}/>
            <Route path="/FindEmail" element={<FindEmail/>} />
            <Route path="/FindPassword" element={<FindPassword/>} />
        </Routes>

    </BrowserRouter>
</div>
    )
}

