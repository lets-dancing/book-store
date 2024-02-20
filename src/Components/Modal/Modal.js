// Компонент Modal для React. Отображает модальное окно, которое можно закрыть кликом накрестик, кликом вне контента,
// нажатием клавиши Escape или свайпом влево или вправо.
import { useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

function Modal({ isOpen, setIsOpen, children }) {
    // Закрывает модальное окно, если клик был совершен вне контента
    const closeModal = e => {
        if (e.target.classList.contains('overlay')) {
            setIsOpen(false);
        }
    }
    // Используется хук useEffect для управления состоянием overflowX тела документа
    // в зависимости от того, открыто ли модальное окно. Также добавляется обработчик
    // события keydown для закрытия модального окна при нажатии клавиши Escape.
    useEffect(() => {
        document.body.style.overflowX = isOpen ? 'hidden' : 'auto';
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [setIsOpen, isOpen]);

    // Используется для обработки свайпов вправо и влево, чтобы закрыть модальное окно
    const handlers = useSwipeable({
        onSwipedRight: () => setIsOpen(false),
        onSwipedLeft: () => setIsOpen(false)
    });

    if (!isOpen) return null;

    return (
        <div {...handlers} className='modal'>
            <img src={`./cross.png`} alt="close modal" className="close" onClick={() => setIsOpen(false)}/>
            <div className='overlay' onClick={closeModal}>{children}</div>
        </div>
    )
}

export default Modal;