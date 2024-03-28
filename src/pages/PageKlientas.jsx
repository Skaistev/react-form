import { useEffect, useState } from "react";
import { KlientasList } from '../components/klientas/KlientasList'


export function PageKlientas() {



    const [klientasData, setData] = useState([]);
    const dataURL = 'https://raw.githubusercontent.com/Skaistev/react-form/main/public/klientas.json';

    useEffect(() => {
        fetch(dataURL)
            .then(res => res.json())
            .then(data => setData(data.klientas))
            .catch(e => console.error(e));
    }, []);

   
    console.log(klientasData);

    return (
        <>
            <h1 className="page-title">Klientas &#x1F60E;</h1>
            <p className="page-description">Kliento informacija</p>
            {klientasData.length === 0 ? <div>nera</div> : <KlientasList data = {klientasData} />}
        </>
    )
}

