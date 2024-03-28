/* eslint-disable react/prop-types */
import style from './Klientas.module.css';
import { Klientas } from "./Klientas";

export function KlientasList({data}) {
 
    return (
        <ul className={style.clientList}>
           {data.map((klientas, index) => <Klientas key={index} data= {klientas}/>)}
           
        </ul>
    );
}