/* eslint-disable react/prop-types */
import style from './Klientas.module.css';


export function Klientas({data}) {
 

    return (
        <li className={style.client}>
            <h2 className={style.name}>{data.name}</h2>
            <h2 className={style.name}>{data.pavardė}</h2>
            <p className={data.amzius>17?style.pilnametis:style.age}>{data.amzius}</p>
            <p className={style.info}>{data.grupė}</p>
        </li>
    );
}