import style from './List.module.css';
import { VegyItem } from './VegyItem';
// import { Header } from '../Header/Header'
// import { Footer } from '../footer/Footer'

export function List() {
    const data = [
      {title: 'Bulves',
       svoris: "kg",
       kaina: 2.5,
     href: "bulves"
       },
       {
      title: 'Morkos',
       svoris: "kg",
       kaina: 10,
       href: "morkos"
       },
       {
        title: 'Svogunai',
        svoris: "kg",
        kaina: 2.5 ,
        href: "svogunai"
       },
       {
        title: 'Kopustai',
        svoris: "vnt",
        kaina: 6,
        href: "kopustai"
       },
       {
        title: 'Pomidorai',
        svoris: "kg",
        kaina: 2 ,
        href: 'pomidoras'
       },
       {
        title: 'Agurkas',
        svoris: "kg",
        kaina: 0.3 ,
        href: 'agurkas'
       }
        ];

    return (
    
        <ul className={style.vegetables}>
            {/* {data.map((vegy, index) => <li key={index} className={style.vegy}>{vegy}</li>)} */}
            {data.map((vegy, index) => <VegyItem key={index} title={vegy.title} price={vegy.kaina} weigth = {vegy.svoris} href = {vegy.href}/>)}
        </ul>
   
    );
}