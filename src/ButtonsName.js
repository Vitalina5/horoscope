export default function ButtonsName({filteredName}) {
    return (
        <div className="cont">
            <button className="change" onClick={() => filteredName("женские")}>Женские имена</button>
            <button className="change" onClick={() => filteredName("мужские")}>Мужские имена</button>
        </div>
    )
}