/* eslint-disable react/prop-types */

import { useState } from 'react';
import style from './List.module.css';
import { Link } from 'react-router-dom';

export function VegyItem(props) {
    const {title , price, weigth, href } = props;

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
        } 
        return total 
        
    }

    return (
        <li className={style.vegy}>
            <span className={style.vegyTitle}>{title} {price}&euro;/{weigth}</span>
            <div className={style.controls}>
                <button onClick={handleCountMinus} className={style.btn}>-</button>
                <span className={style.count}>{count} </span>
                <button onClick={handleCountPlus} className={style.btn}>+</button>
            </div>
            <Link to={'/vegetables/' + href}>Read more</Link>
            <h3>Viso</h3>
            <div>{countTotal(count)}</div>
        </li>
    );
}