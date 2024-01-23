// Компонент BtnToTop возвращает кнопку для прокрутки страницы наверх, которая появляется, когда пользователь прокручивает страницу более чем на 200 пикселей.
import { useEffect, useState } from "react";

function BtnToTop() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollPosition(window.scrollY);
        });
    }, []);
    
    function scrollToTop() {
        window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        });
    }
    return (
        <div>
            {scrollPosition > 200 && 
                <button className="btnToTop" onClick={scrollToTop}>Наверх</button>
            };
        </div>
    )
}

export default BtnToTop;