import { Outlet } from 'react-router-dom'

import { Header } from "../src/components/Header/Header";
import { Footer } from "../src/components/footer/Footer";

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