import { useState } from 'react';
import { data2 } from './data2';

function CalendarSlide() {
    const [slide, setSlide] = useState(0);
    const {image} = data2[slide];

    const previousSlide = () => {
        setSlide((slide => {
            slide--;
            if(slide < 0) {
                slide = data2.length - 1;
            }
            return slide;
        }))
    }

    const nextSlide = () => {
        setSlide((slide =>  {
            slide++;
            if (slide > data2.length - 1) {
            slide = 0;
            }
            return slide;
        }))

    }
    
    return (<div>
        <div className='cont'>
            <img src={image} width="300px" alt="гороскоп" />
        </div>
        <div className='cont btn'>
            <button onClick={previousSlide}>⬅️</button>
            <button onClick={nextSlide}>➡️</button>
        </div>
    </div>
    )
}

export default CalendarSlide;