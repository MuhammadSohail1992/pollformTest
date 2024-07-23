import React from 'react';
import Option from '../Options';
import Summary from '../Summary';
import { useSelector, useDispatch } from 'react-redux';
import { addAnswer } from '../../redux/poleSlice';

const Slide = ({ content, type }) => {

  const dispatch = useDispatch();

  const optionSelectHandler = (answer) => {
    let qna = {
      question: content,
      answer: answer
    }
    dispatch(addAnswer(qna));
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-1/2 h-screen p-4 pl-[50px] bg-[#6b54fe] flex items-center p-20">
        <h1 className="text-4xl font-bold mb-4 text-white">
          {content}
        </h1>
      </div>
      <div className='w-1/2'>
        {type? <Summary />: <Option clickHandler={optionSelectHandler} />}
      </div>
    </div>
  );
};

export default Slide;
