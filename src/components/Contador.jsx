import React, { useState } from 'react';



const Contador = () => {

    const [contador, setContador] = useState(0);

const clickCount = () => {
    setContador(contador+1)
}

  return <div> <hr />
    <h3>Section of count: {contador}</h3>
    <h3>
        {
            contador > 2 ? 'You exceeded 2' : 'You do not exceeded 2'
        }
    </h3>
    <button onClick={() => clickCount()} >
        Click me, for add 1 in the count
    </button>
   </div>;
};

export default Contador;
