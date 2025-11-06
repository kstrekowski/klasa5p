import React from 'react';

const Owoce = () =>{
    const fruits = ["jabko", "babka", "czekoladka", "czips"];
    return (
        <ul>
            {
                fruits.map(owoc  => <li>{owoc}</li>)
            }
        </ul>
    );
};

export default Owoce;