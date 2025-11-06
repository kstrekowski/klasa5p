import React, {useState} from 'react';

const Counter = () => {
    const [licznik, setLicznik] = useState(0);
    return (
        <div>
            <button onClick={() => {setLicznik(licznik+1)}}>
                Licznik klików: {licznik}
            </button>

        </div>
    );
};

export default Counter;