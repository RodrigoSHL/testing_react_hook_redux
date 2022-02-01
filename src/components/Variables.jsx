import React from 'react';

const Variables = () => {
    const saludo = "Hola desde componente";
    const imagen = "https://1.bp.blogspot.com/-46uayQxlZcs/YNK2AEMj2JI/AAAAAAAAIpI/idijd4YUeP4LkM3lj1RzLVLbjxHNdFpjwCLcBGAsYHQ/s992/1624260066_Screen%2BShot%2B2021-06-21%2Bat%2B3_19_58%2BPM.png"


  return <div>
      <h2>Nuevo componente {saludo}</h2>
      <img src={imagen} style={{maxWidth:'700px'}} alt="" />
  </div>;
};

export default Variables;
