
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Head from './components/Head';
import Discover from './components/Discover';
import Grants from './components/Grants';
import Program from './components/Program';
import Blog from './components/Blog';
import Faq from './components/Faq';
import Trading from './components/Trading';
import Assets from './components/Assets';
import LinkProgram from './components/LinkProgram';
import Apply from './components/Apply';


import Foundation from './components/Foundation';
import About from './components/About';
import Profiles from './components/Profiles';




function App() {
  return (
    <BrowserRouter>
<div className="App">
      
      <Routes>
        <Route path='/' element={<Head/>}/>
        <Route path='/discover' element={<Discover/>}/>
        <Route path='/grants' element={<Grants/>}/>
        <Route path='/program' element={<Program/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/apply' element={<Apply/>}/>

      </Routes>

      
      <Routes>
      <Route path='/trading' element={<Trading/>}/>
        <Route path='/assets' element={<Assets/>}/>
        <Route path='/foundation' element={<Foundation/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/foundedgrants' element={<LinkProgram/>}/>
        <Route path='/theresawebb' element={<Profiles/>}/>
        <Route path='/janecooper' element={<Profiles/>}/>



      </Routes>
    </div>
</BrowserRouter>
  );
}

export default App;
