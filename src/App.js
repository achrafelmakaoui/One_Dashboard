import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar';
import BasicTable from './components/Table/Table';
import Login from './components/Login/Login';
import Upload from './components/Upload/Upload';
import Setting from './components/SettingDT/Setting';

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div className="App">
      <div className="AppGlass">
        <BrowserRouter>
          {user && <Sidebar />}
          <Routes>
            {user ? (
              <>
                <Route path='/' element={<MainDash />} />
                <Route path='/Tables' element={<BasicTable />}/>
                <Route path='/Data' element={<Upload />} />
              </>
            ) : (
              <Route path='/' element={<Login />} />
            )}
            <Route path='/Setting' element={user ? <Setting/> : <Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
