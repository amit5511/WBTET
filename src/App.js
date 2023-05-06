
import './App.css';
import Home from './component/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageNotFound from './component/PageNotFound/PageNotFound';
import TET2017 from './component/Result/view/TET2017';
import TetCertificate from './component/TetCertificate/TetCertificate';

function App() {
  


  return <>
    <BrowserRouter>
      
      <Routes>
        <Route  path='/' exact element={<Home/>}/>
        <Route  path='/result/TET2017' exact element={<TET2017/>}/>
        <Route  path='/prim' exact element={<TetCertificate/>}/>
        <Route  path='*'  element={<PageNotFound/>}/>

        </Routes>
       </BrowserRouter> 
  </>
}
export default App;
