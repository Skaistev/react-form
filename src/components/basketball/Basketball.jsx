
import { useState } from "react";
import style from './Basketball.module.css'
import { formatBasketballNumber } from '../../utils/formatBasketballNumber'
 
export function Basketball () {

        const [score1, setScore1] = useState(0);
        const [score2, setScore2] = useState(0);


  return (
    <div className={style.basketball}>
      <h2> Result</h2>
    <div className={style.team}>{formatBasketballNumber(score1)}:{formatBasketballNumber(score2)}</div>
    <div>
        <div className={style.team}>
          <h2> Team1</h2>
            <button onClick={()=>setScore1(score1 + 1)} className={style.btn}>+1</button>
            <button onClick={()=>setScore1(score1 + 1)} className={style.btn}>+2</button>
            <button onClick={()=>setScore1(score1 + 1)} className={style.btn}>+3</button>
        </div>
        <div className={style.team}>
        <h2> Team2</h2>
            <button onClick={()=>setScore2(score2 + 1)} className={style.btn}>+1</button>
            <button onClick={()=>setScore2(score2 + 1)} className={style.btn}>+2</button>
            <button onClick={()=>setScore2(score2 + 1)} className={style.btn}>+3</button>
        </div>
    </div>
    </div>
  )
}


