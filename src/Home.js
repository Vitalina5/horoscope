import React from "react";
import image from './horoscope.jpg';

function Home() {
    return (
        <div className="main">
            <img className="picture" src={image} width="350px" height="215px" alt="гороскоп"/>
            <div className="container">
                <h2>Гороскоп по знакам зодиака</h2>
            </div>
            <div className="container">
                <h2>Восточный календарь животных</h2>
            </div> 
            <div className="container">
                <h2>Характеристика значения мужских и женских имен</h2>
            </div> 
        </div>

    )
}

export default Home;