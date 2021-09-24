import './App.css';
import MainPage from './pages/MainPage/MainPage';
import ImportPage from './pages/ImportPage/ImportPage';
import ExportPage from './pages/ExportPage/ExportPage';
import LoginPage from './pages/LoginPage/LoginPage';
import AdminPage from './pages/AdminPage/AdminPage';
import VersionPage from './pages/VersionPage/VersionPage';
import './components/style.css';
import { BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename = '/'>
        <Route exact path = '/' component = {LoginPage}></Route>
        <Route path = '/main' component = {MainPage}></Route>
        <Route path = '/import' component = {ImportPage}></Route>
        <Route path = '/export' component = {ExportPage}></Route>
        <Route path = '/admin' component = {AdminPage}></Route>
        <Route path = '/version' component = {VersionPage}></Route>
    </BrowserRouter>
  );
}

export default App;
