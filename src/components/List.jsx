import React, { useState } from 'react';

const List = () => {

    const arrayList = [
        {id: 1, text: "text1"},
        {id: 2, text: "text2"},
        {id: 3, text: "text3"},

    ]

    const [list, setList] = useState(arrayList);

    const addElement = () => {
                setList([ 
                    ...list,
                    {id:4, text: "text4"}
                ])

    }
           

  return <div>
      <hr />
      <h3>List</h3>
      <ul>
          {
            list.map((item,index) => (
                <li key={index}>{item.text}</li>
            ))
          }
          
      </ul>
      <button className='btn btn-dark' onClick={() => addElement()}>
          Add item
      </button>

  </div>;
};

export default List;
