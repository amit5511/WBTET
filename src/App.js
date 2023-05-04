
import './App.css';
import Home from './component/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageNotFound from './component/PageNotFound/PageNotFound';
function App() {
  return <>
    <BrowserRouter>
      
      <Routes>
        <Route  path='/' exact element={<Home/>}/>
        <Route  path='*'  element={<PageNotFound/>}/>

        </Routes>
       </BrowserRouter> 
  </>
}
export default App;
