import React from 'react';

const Greeting = (props) => {
    return (
        <div>
            <h1>Cześć, {props.imie} - {props.wiek} lat</h1>
        </div>
    );
};

export default Greeting;