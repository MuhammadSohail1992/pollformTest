// src/redux/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const poleSlice = createSlice({
  name: 'example',
  initialState: {
    questions: []
  },
  reducers: {
    addAnswer: (state, action) => {
        console.log('**')
        console.log(action.payload);
        const { question, answer } = action.payload;
        // state.questions = state.questions.map((item) =>
        //     item.question === question ? { ...item, answer: answer } : item
        // );
        // state.questions = [...state.questions, action.payload];
        const index = state.questions.findIndex(item => item.question === question);

        if (index !== -1) {
            // If the question exists, update the answer
            state.questions[index] = { ...state.questions[index], answer: answer };
        } else {
            // If the question does not exist, add it
            state.questions.push({ question, answer: answer });
        }
    }
  },
});

export const { addAnswer } = poleSlice.actions;
export default poleSlice.reducer;
