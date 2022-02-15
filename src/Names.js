import { useState } from "react";
import { data3 } from "./data3";
import ButtonsName from "./ButtonsName";

function Names() {
    const [names, setNames] = useState(data3);
    const [showText, setShowText] = useState(false);

    const chosenName = (searchName) => {
        const newName = data3.filter(element => element.searchName === searchName);
        setNames(newName);
    }

    const showTextClick = (element) => {
        element.showMore = !element.showMore
        setShowText(!showText);
        }
    

    return (<div>
        <div className="cont">
            <h1>Значение имени</h1>
        </div>
        <ButtonsName filteredName={chosenName} />
        <div className="signs">
            {names.map((element => {
            const {id, name, description, showMore} = element;
                return (
                    <div className="signs-card" key={id}>
                    <div className="contName">
                        <h2>{name}</h2>
                        <p className="textName">{showMore ? description : description.substring(0, 170) + "..."}
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

export default Names;