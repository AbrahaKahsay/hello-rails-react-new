import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getGreetings } from '../redux/greetings/greetingsSlice';

const Greeting = () => {
    const dispatch = useDispatch();
    const greetings = useSelector(state => state.greetings.greetings);
    const status = useSelector(state => state.greetings.status);

    return (
        <div>
            <h1>Here Are Your Greetings</h1>
            {status === 'succeeded' && greetings.map(greeting => <div key={greeting.id}>{<h2> {greeting.greeting}</h2>}</div>)}
            <button onClick={() => dispatch(getGreetings())}>Click to get Messages</button>
        </div>
    )
}
export default Greeting