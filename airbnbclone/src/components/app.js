import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from "./Footer";
import SearchHouse from "./search/SearchHouse";
import Header from "./Header";
import Main from "./main/Main";
import './App.css';


const App = () => {
    return ( 
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={Main}/>
                    <Route path="/s" exact component={SearchHouse} />
                </div>
            </BrowserRouter>
            <Footer />
        </div>
        
    );
};

export default App;