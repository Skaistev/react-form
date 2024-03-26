import { Outlet } from 'react-router-dom'

import { Header } from "../src/components/Header/Header";
import { Footer } from "../src/components/footer/Footer";

export function LayoutWithAdds (){
    return(
<div className='ads-layout'>
  <Header />
   <main>
    <Outlet />
   </main>
   <aside className='adds-layout'>
    ads
   </aside>
  <Footer />
  </div>

    )
}