import React, { useState } from 'react';

const Eventos = () => {

    const [title, setTitle] = useState('Initial Title');

    const eventCLick = () => {
        console.log('you give me a click');
        setTitle('New Title: Events from click')
    }
  return <div>
            <hr />
            <h2>{title}</h2>
                <button onClick={() => eventCLick()}> Click to event</button>
        </div>;
};

export default Eventos;
