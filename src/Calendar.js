import { useState } from "react";
import { data1 } from "./data1";
import CalendarSlide from "./CalendarSlide";

export default function Calendar() {
    const [calendars] = useState(data1);
    const [showText, setShowText] = useState(false);

    const showTextClick = (element) => {
    element.showMore = !element.showMore
    setShowText(!showText);
    }

    return (
        <div>
            <div className="cont">
            <h1>Китайский календарь на 2022 год</h1>
            </div>
            <CalendarSlide />
            <div className="signs">
            {calendars.map((element => {
                const {id, image, nativity, description, showMore} = element;
                
                return (
                    <div className="signs-card" key={id}>
                        <img className="sign-image" src={image} width="370px" height="350px" alt="Знак зодиака"/>
                    <div>
                        <h3>{nativity}</h3>
                        <p>{showMore ? description : description.substring(0, 170) + "..."}
                        <button className="change" onClick={() => showTextClick(element)}>{showMore ? "Cкрыть" : "Показать"}</button>
                        </p>
                    </div>
                    </div>
                )
                }))}
                </div>
            </div>
            )
    }
