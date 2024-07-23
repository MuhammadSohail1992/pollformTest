import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Summary = () => {

  const value = useSelector((state) => state.example.questions);

  return (
    <div>
      {value.map((item, index) => (
        <div key={index}>
          <h3>{item.question}</h3>
          <p className='bold'>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Summary;
