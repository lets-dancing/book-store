import { useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

function Modal ( {isOpen, setIsOpen, children} ) {
    const closeModal = e => {
        if (e.target.classList.contains('overlay')) {
            setIsOpen(false)
        }
    }
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
            setIsOpen(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [setIsOpen]);

    const handlers = useSwipeable({
        onSwipedRight: () => setIsOpen(false),
        onSwipedLeft: () => setIsOpen(false)
      });

    if (!isOpen) return null;

    return (
        <div {...handlers} className='modal'>
            <img src={`./cross.png`} alt="close modal" className="closeModalIcon" onClick={() => setIsOpen(false)}/>
            <div className='overlay' onClick={closeModal}>{children}</div>
        </div>
    )
}

export default Modal;