
import './App.css';
import Home from './component/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageNotFound from './component/PageNotFound/PageNotFound';
import TET2017 from './component/Result/view/TET2017';
function App() {
  console.log(document.readyState )
  return <>
    <BrowserRouter>
      
      <Routes>
        <Route  path='/' exact element={<Home/>}/>
        <Route  path='/result/TET2017' exact element={<TET2017/>}/>
        <Route  path='*'  element={<PageNotFound/>}/>

        </Routes>
       </BrowserRouter> 
  </>
}
export default App;
