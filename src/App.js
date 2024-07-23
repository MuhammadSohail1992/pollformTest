
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './components/SliderComponent/Slider';
import { Provider } from 'react-redux';
import store from './redux/store';

const slides = [
  { title: 'How was your week overall?'},
  { title: 'How do you feel about your current workload?'},
  { title: 'How satisfied are you with your work-life balance?'},
  { title: 'How do you rate the support from your team?'},
  { title: 'Summary', type: "summary"},
];

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Slider slides={slides} />
      </div>
    </Provider>
  );
}

export default App;
