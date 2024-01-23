import { useState, useEffect } from 'react';

function Review({ steps }) {
    const [name, setName] = useState('');
    const [book, setBook] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        const { name, book, age } = steps;
        setName(name.value);
        setBook(book.value);
        setAge(age.value);
    }, [steps]);

    return (
        <div style={{ width: '100%' }}>
        <h3>Проверьте информацию ниже:</h3>
        <table>
            <tbody>
            <tr>
                <td>Имя:</td>
                <td>{name}</td>
            </tr>
            <tr>
                <td>Возраст:</td>
                <td>{age}</td>
            </tr>
            <tr>
                <td>Книга:</td>
                <td>{book}</td>
            </tr>
            </tbody>
        </table>
        </div>
    );
}

export default Review;