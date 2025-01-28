import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Konverter from './pages/konverter';
import Calculator from './pages/calc';
import Terminal from './pages/banktermin';
import Gpacalculator from './pages/gpacalculator';
import Average from './pages/gradeAverage';
import CalcGPA from './pages/calcGPA';
import FuelCalc from './pages/fuel';
import LoginLocal from './pages/loginLocal';
import TodoList from './pages/todoList';
import User from './pages/user.managment';
import NewUser from './pages/addNewUser';
import Auto from './pages/auto';
import Dolist from './pages/todolist2';
import Registr from './pages/authentication';
import LocalUser from './pages/localuser';
import Localstoragecart from './pages/localstoragCart';
import ManagerZametki from './pages/zametki';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Calculator/>} />
            <Route path='/konverter' element={<Konverter/>} />
            <Route path='/banktermin' element={<Terminal/>} />
            <Route path='/gpacalculator' element={<Gpacalculator/>} />
            <Route path='/gradeAverage' element={<Average/>} />
            <Route path='/calcGPA' element={<CalcGPA/>} />
            <Route path='/fuel' element={<FuelCalc/>} />
            <Route path='/loginLocal' element={<LoginLocal/>} />
            <Route path='/todoList' element={<TodoList/>} />
            <Route path='/user.managment' element={<User/>} />
            <Route path='/addNewUser' element={<NewUser/>} />
            <Route path='/auto' element={<Auto/>} />
            <Route path='/todolist2' element={<Dolist/>} />
            <Route path='/authentication' element={<Registr/>} />
            <Route path='/localuser' element={<LocalUser/>} />
            <Route path='/localstoragCart' element={<Localstoragecart/>} />
            <Route path='/zametki' element={<ManagerZametki/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;