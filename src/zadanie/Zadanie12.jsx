import React, { useState } from 'react';

const Zadanie12 = () => {
    const [steps, setSteps] = useState(0);
    const [showText, setShowText] = useState(true);
    const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightpink', 'lightyellow', 'lightgray'];
    const [bgColor, setBgColor] = useState('white');
    const changeBackgroundColor = () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setBgColor(randomColor);
    };
    const [clickCounter, setClickCounter] = useState(0);
    const handleClick = () => {
        setClickCounter(prev => prev + 1);
    };
    const handleDoubleClick = () => {
        setClickCounter(0);
    };
    const [product, setProduct] = useState('');
    const [shoppingList, setShoppingList] = useState([]);
    const addProduct = () => {
        if (product.trim()) {
            setShoppingList([...shoppingList, product]);
            setProduct('');
        }
    };
    const [time, setTime] = useState(0);
    const increaseTime = () => {
        setTime(prev => prev + 5);
    };
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [user, setUser] = useState({ name: '', age: '' });
    const [savedUser, setSavedUser] = useState(null);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    const saveUser = () => {
        if (user.name.trim() && user.age.trim()) {
            setSavedUser(user);
            setUser({ name: '', age: '' });
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h2>Licznik kroków</h2>
            <button onClick={() => setSteps(prev => prev + 1)}>Dodaj krok</button>
            <p>Zrobiłeś {steps} kroków.</p>

            <h2>Ukryj/Pokaż tekst</h2>
            <button onClick={() => setShowText(prev => !prev)}>Pokaż/Ukryj</button>
            {showText && <p>Hello React</p>}

            <h2>Kolor tła</h2>
            <button onClick={changeBackgroundColor}>Zmień kolor</button>
            <div style={{ backgroundColor: bgColor, padding: '20px', marginTop: '10px' }}>
                To jest kolorowe tło
            </div>

            <h2>Licznik kliknięć</h2>
            <button onClick={handleClick} onDoubleClick={handleDoubleClick}>
                Kliknij / Kliknij dwa razy
            </button>
            <p>Licznik: {clickCounter}</p>

            <h2>Lista zakupów</h2>
            <input
                type="text"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                placeholder="Dodaj produkt"
            />
            <button onClick={addProduct}>Dodaj</button>
            <ul>
                {shoppingList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h2>Licznik czasu</h2>
            <button onClick={increaseTime}>Start</button>
            <p>Czas: {time} sekund</p>

            <h2>Głosowanie</h2>
            <button onClick={() => setLikes(prev => prev + 1)}>Like</button>
            <button onClick={() => setDislikes(prev => prev + 1)}>Dislike</button>
            <p>Likes: {likes} | Dislikes: {dislikes}</p>

            <h2>Formularz użytkownika</h2>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
                placeholder="Imię"
            />
            <input
                type="number"
                name="age"
                value={user.age}
                onChange={handleInputChange}
                placeholder="Wiek"
            />
            <button onClick={saveUser}>Zapisz</button>
            {savedUser && (
                <p>
                    Zapisany użytkownik: {savedUser.name}, {savedUser.age} lat
                </p>
            )}
        </div>
    );
};

export default Zadanie12;
