import { useState } from "react";

export default function SignHoroscope({anyHoroscope}) {
  const [showText, setShowText] = useState(false);

  const showTextClick = (element) => {
    element.showMore = !element.showMore
    setShowText(!showText);
  }

    return (
        <div className="signs">
        {anyHoroscope.map((element => {
            const{id, image, nativity, description, showMore} = element;
            return (
                <div className="signs-card" key={id}>
                    <img className="sign-image" src={image} width="400px" height="350px" alt="Знак зодиака"/>
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
    )
}