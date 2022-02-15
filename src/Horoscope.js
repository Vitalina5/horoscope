import { useState } from "react";
import Buttons from "./Buttons";
import { data } from "./data";
import SignHoroscope from "./SignHoroscope";

export default function Horoscope() {
    const [signs, setSign] = useState(data);
    

    const chosenSign = (searchSign) => {
        const newSign = data.filter(element => element.searchSign === searchSign);
        setSign(newSign);
    }

    return (
        <div>
            <div className="cont">
                <h1>Гороскоп на 2022 год </h1>
            </div>
            <Buttons filteredHoroscope={chosenSign} />
            <SignHoroscope anyHoroscope={signs} />
        </div>
        );
    }