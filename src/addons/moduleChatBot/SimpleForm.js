// Этот React компонент реализует простую форму чата с использованием библиотеки react-simple-chatbot. 
// Пользователь может открыть чат, ответить на вопросы бота о своем имени, возрасте и любимой книге. 
// Данные проверяются на корректность, и пользователь может обновить свои ответы. 
// Для закрытия чата используется кнопка с иконкой крестика. 
import ChatBot from 'react-simple-chatbot';
import Review from './Review';
import { useEffect, useState } from 'react';


function SimpleForm() {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
            };
            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }, [setIsOpen]);
    return (
        <div>
        <ChatBot
            headerTitle="Чат-бот"
            speechSynthesis={{ enable: true, lang: 'ru' }}
            floating={true}
            floatingStyle={{position: "fixed", bottom: '70px'}}
            botDelay={500}
            placeholder="Напишите сообщение..."
            toggleFloating={() => setIsOpen(!isOpen)}
            opened={isOpen}
            steps={[
                {
                    id: '1',
                    message: 'Как вас зовут?',
                    trigger: 'name',
                },
                {
                    id: 'name',
                    user: true,
                    trigger: '3',
                },
                {
                    id: '3',
                    message: 'Привет {previousValue}! Сколько вам лет?',
                    trigger: 'age',
                },
                {
                    id: 'age',
                    user: true,
                    trigger: '5',
                    validator: (value) => {
                        if (isNaN(value)) {
                            return 'укажите число';
                        } else if (value < 0) {
                            return 'минус не надо';
                        } else if (value > 120) {
                            return `${value}? Да ладно!`;
                        }
                        return true;
                    },
                },
                {
                    id: '5',
                    message: 'Какая ваша любимая книга?',
                    trigger: 'book',
                },
                {
                    id: 'book',
                    user: true,
                    trigger: '7',
                },
                {
                    id: '7',
                    message: 'Отлично! Еще раз проверьте информацию.',
                    trigger: 'review',
                },
                {
                    id: 'review',
                    component: <Review />,
                    asMessage: true,
                    trigger: 'update',
                },
                {
                    id: 'update',
                    message: 'Хотите уточнить информацию?',
                    trigger: 'update-question',
                },
                {
                    id: 'update-question',
                    options: [
                        { value: 'yes', label: 'Да', trigger: 'update-yes' },
                        { value: 'no', label: 'Нет', trigger: 'end-message' },
                    ],
                },
                {
                    id: 'update-yes',
                    message: 'Что именно хотите уточнить?',
                    trigger: 'update-fields',
                },
                {
                    id: 'update-fields',
                    options: [
                        { value: 'name', label: 'Имя', trigger: 'update-name' },
                        { value: 'book', label: 'Книга', trigger: 'update-book' },
                        { value: 'age', label: 'Возраст', trigger: 'update-age' },
                    ],
                },
                {
                    id: 'update-name',
                    update: 'name',
                    trigger: '7',
                },
                {
                    id: 'update-book',
                    update: 'book',
                    trigger: '7',
                },
                {
                    id: 'update-age',
                    update: 'age',
                    trigger: '7',
                },
                {
                    id: 'end-message',
                    message: 'Спасибо за информацию!',
                    end: true,
                },
            ]}
        />
    </div>
    );
}
export default SimpleForm;