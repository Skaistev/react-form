import { BrowserRouter , Route, Routes} from "react-router-dom";


import { Basketball } from './components/basketball/Basketball'
import { List } from './components/list/List'
import { FirstTry } from "./FirstTry";
import { NotFound } from "./components/list/NotFound";
import { BasicLayout } from "../layout/BasicLayout";
import { LayoutWithAdds } from "../layout/LayoutWithAdds";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route Component={BasicLayout}>
      <Route index path = '/' element={<FirstTry />}/>
      <Route path='/basketball' element={< Basketball />} />
      <Route path="*" element = {<NotFound />} />
      </Route>
      <Route Component={LayoutWithAdds}>
      <Route path="/list" element = {<List />} />
      </Route>
    </Routes>
  </BrowserRouter>

  )

  // return (
  //   <>
  //     <h1>Hooks FTW</h1>
  //     <List />
  //     <Basketball />
  //     <FirstTry />
     
  //   </>
  // )
}

export default App
