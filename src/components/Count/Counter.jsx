import React from 'react';
import './Counter.css';


const Counter extends React.Component {
    render () {
        return (
            <div className='Counter'><span className='Counter__value'>0
            </span><div className='Counter__controls'>
                    <button type="button" onClick={() => {
                        console.log('Кликнули увеличить');
                    }}>
                        увеличить на 1</button>
                    <button type="button" onClick={() => {
                        console.log('Кликнули уменьшить');
                    }}>
                        уменьшить на 1</button></div></div>
    )
 }
export default Counter;
