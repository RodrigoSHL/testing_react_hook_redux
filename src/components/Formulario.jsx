import React, { useState } from 'react';

const Formulario = () => {

  const [fruit, setFruit] = useState('');
  const [description, setDescription] = useState('');
  const [listFruit, setListFruit] = useState([]);

  const saveData = (e) => {
    e.preventDefault();
    if(!fruit.trim()){
      console.log('fruit is empty')
      return;
    }
    if(!description.trim()){
      console.log('description is empty')
      return
    }

    setListFruit([
      ...listFruit,
      {fruit,description}
    ])

    e.target.reset();
    setFruit('');
    setDescription('');
      
  }

  return (<div>
      <h2>Form</h2>
      <form onSubmit={saveData} action="">
          <input 
            type="text"
            placeholder='Write fruit'
            className='form-control mb-2'
            onChange={(e) => setFruit(e.target.value)}
         />
         <input 
            type="text"
            placeholder='Write description'
            className='form-control mb-2'
            onChange={(e) => setDescription(e.target.value)}

         />
         <button 
            className="btn btn-dark col-12">
             Ingrese fruta
         </button>
      </form>
      <hr />
      <ul>
        {
          listFruit.map((item,index) => (
            <li key={index}>
              {item.fruit} {item.description}
            </li>
          ))
        }
      </ul>
  </div>)
};

export default Formulario;
