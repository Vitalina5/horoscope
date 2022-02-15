export default function Buttons({filteredHoroscope}) {
    return (
        <div className="cont">
            <button className="change" onClick={() => filteredHoroscope("огонь")}>Огонь</button>
            <button className="change" onClick={() => filteredHoroscope("земля")}>Земля</button>
            <button className="change" onClick={() => filteredHoroscope("воздух")}>Воздух</button>
            <button className="change" onClick={() => filteredHoroscope("вода")}>Вода</button>
        </div>
    )
}
