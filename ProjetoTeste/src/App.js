import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NewProject from './components/pages/NewProject';
import Project from './components/pages/Project';
import Login from './components/pages/Login';
import Container from './components/layouts/Container';
import NavBar from './components/layouts/NavBar';

import Projeto from './components/pages/Projeto';

function App() {

  return (
    <>

       <Router>
       <NavBar/>
         <Container customClass='min-heigth'>
          
           <Routes>
              <Route exact path='/' element={<Login/>}/>
               <Route exact path='/newProject'  element={<NewProject/>}/>

               <Route exact path='/projects'  element={<Project/>}>
              
               </Route>

               <Route exact path='/project/:id' element={<Projeto/>}></Route>

           </Routes>
       </Container>
       </Router>
    
  </>
  )
}
export default App;

