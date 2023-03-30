import './App.css'
import MainDash from './components/MainDash/MainDash';
// import Updates from './components/Updates/Updates';
import Sidebar from './components/Sidebar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import BasicTable from './components/Table/Table';
// import RightSide from './components/RigtSide/RightSide';
import Login from './components/Login/Login';
// import Annee from './components/Annee/Annee';
import Upload from './components/Upload/Upload';
import AnnPost from './components/AnneePost/AnnPost';

function App(){
  return(
    <div className="App">
      <div className="AppGlass">
        <BrowserRouter>
        <Sidebar/>
            <Routes>
              <Route path='/' element={<><MainDash/></>}/>
              <Route path='/Tables' element={<><BasicTable/></>}/>
              <Route path='/Data' element={<><Upload/><AnnPost/></>}/>
              <Route path='/Analytics' element={<><Login/></>}/>
            </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
