import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./Test.js";
import Viewer from "./Viewer.js";



const AppRouter = () => {
    const [images, setImages] = useState([]);

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Test />} />
                    {/* Définition de la route de visualisation des images. L'id est défini en tant que paramètre via le :id */}
                    <Route path="/view/:id" element={<Viewer />} />
                </Routes>

            </Router>
        </>
    )

};

export default AppRouter