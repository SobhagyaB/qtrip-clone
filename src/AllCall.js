import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import './App.css';
import Mid from "./Components/Mid";
import Navigation from "./Components/Navigation";
import Data from "./Data";
import Down from "./Components/Down";
import Footer from "./Components/Footer";

export default function AllCombo() {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter data based on search term
    const filteredData = Data.filter(item =>
        item.h1.toLowerCase().includes(searchTerm)
    );
// on the mid page i have created a prop called onsearchchange and passed the setsearchterm which is then called inside inputs onchange function using this.props
    return (
        <>
            <Navigation />
            <Mid onsearchchange={setSearchTerm} /> 
            
                <div id="main_div">
                    {
                        filteredData.map((x, index) => {
                            return (
                                <Link to="/BangloreSubpage" className="Linkr" key={index}><Down   src={x.src} h1={x.h1} p={x.p} /></Link>
                            );
                        })
                    }
                </div>
            
            <Footer />
        </>
    );
}
