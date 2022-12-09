import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/reducers/greeting/greeting';


export default function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings.greetings.greeting);
  // console.log(greeting)
  return (
    <div>
      <h1>{greeting}</h1>
      <button onClick={() => dispatch(fetchGreeting())} type="button">
        Click to get greeting
      </button>
    </div>
  );
}