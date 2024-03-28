import { BrowserRouter , Route, Routes} from "react-router-dom";

import { BasicLayout } from './layout/BasicLayout';
import { LayoutWithAdds } from "./layout/LayoutWithAdds";
import { PageHome } from './pages/PageHome';
import { PageBasketball } from './pages/PageBasketball';
import { PageNotFound } from './pages/PageNotFound';
import { PageVegetables } from './pages/PageVegetables';
import { PageVegetablesInner } from './pages/PageVegetablesInner';
import { PageStudents } from "./pages/PageStudents";
import { PageKlientas } from "./pages/PageKlientas";
import { PageRegister } from "./pages/PageRegister";



function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route Component={BasicLayout}>
          <Route index path='/' element={<PageHome />} />
          <Route path='/basketball' element={<PageBasketball />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path='/vegetables/:id' element={<PageVegetablesInner />} />
          <Route path='/students' element={<PageStudents />} />
          <Route path='/register' element={<PageRegister />} />
        </Route>
        <Route Component={LayoutWithAdds}>
          <Route path='/vegetables' element={<PageVegetables />} />
          <Route path='/klientas' element={<PageKlientas />} />
          {/* <Route path='/vegetables/:id' element={<PageVegetablesInner />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



  // return (
  //   <>
  //     <h1>Hooks FTW</h1>
  //     <List />
  //     <Basketball />
  //     <FirstTry />
     
  //   </>
  // )


export default App
