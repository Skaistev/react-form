import style from './List.module.css';
import { VegyItem } from './VegyItem';

export function List() {
    const data = [
      {title: 'Bulves',
       svoris: "kg",
       kaina: 2.5,},
       {
      title: 'Morkos',
       svoris: "kg",
       kaina: 10
       },
       {
        title: 'Svogunai',
        svoris: "kg",
        kaina: 2.5 
       },
       {
        title: 'Kopustai',
        svoris: "vnt",
        kaina: 6
       },
       {
        title: 'Pomidorai',
        svoris: "kg",
        kaina: 2 
       },
       {
        title: 'Agurkas',
        svoris: "kg",
        kaina: 0.3 
       }
        ];

    return (
        <ul className={style.vegetables}>
            {/* {data.map((vegy, index) => <li key={index} className={style.vegy}>{vegy}</li>)} */}
            {data.map((vegy, index) => <VegyItem key={index} title={vegy.title} price={vegy.kaina} weigth = {vegy.svoris}/>)}
        </ul>
    );
}