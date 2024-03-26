import { useParams } from 'react-router-dom';
import { vegData } from '../assets/vegetablesData';

export function PageVegetablesInner() {
    const data = useParams();

    function par (){
        let parag = '';
        for (let i=0;i<vegData.length;i++){
             if (data.id === vegData[i].title){
           parag = vegData[i].par
    }
}
return parag
}

    return (
        <>
            <h1>Apie produkta: {data.id}</h1>
            <p>Dominancio produkto pavadinimas yra:{par()}</p>
        </>
    );
}