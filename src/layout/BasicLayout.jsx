import { Outlet } from 'react-router-dom'

import { Header } from "../components/Header/Header";
import { Footer } from "../components/footer/Footer";

export function BasicLayout (){
    return(
<>
<Header />
<main>
    <Outlet />
</main>
<Footer />
</>

    )
}