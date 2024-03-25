/* eslint-disable react/prop-types */

import { useState } from 'react';
import style from './List.module.css';

export function VegyItem(props) {
    const {title , price, weigth } = props;

    const minVegetablesAmount = 0;
    const maxVegetablesAmount = 10;

    const [count, setCount] = useState(0);

    function handleCountMinus() {
     
        if (count > minVegetablesAmount) {
          setCount(count - 1);
            
        }
    }

    function handleCountPlus() {
    
        if (count < maxVegetablesAmount) {
        setCount(count + 1);
            
        }
    }
  
    function countTotal (count){
      let total = 0;
        if(count>0){
            total= (price*count).toFixed(2) 
        } else { total = 0 }
        return total 
        
    }

    return (
        <li className={style.vegy}>
            <span className={style.vegyTitle}>{title}</span>
            <h3>Matas</h3>
            <div>{weigth}</div>
            <h3>Kaina</h3>
            <div>{price}</div>
            <div className={style.controls}>
                <button onClick={handleCountMinus} className={style.btn}>-</button>
                <span className={style.count}>{count}</span>
                <button onClick={handleCountPlus} className={style.btn}>+</button>
            </div>
            <h3>Viso</h3>
            <div>{countTotal(count)}</div>
        </li>
    );
}