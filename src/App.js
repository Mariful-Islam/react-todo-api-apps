import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { default as addItem } from './components/AddItem';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemView from './components/ItemView';

function App() {
  return (
    <div className="App wrapper">
      
      <BrowserRouter>       
      
        hello world 
        <Header/>
        <h2>Items <span>12</span></h2>
        <Routes>
            <Route Component={Body} path='/'/>
            <Route Component={addItem} path='/add-item/'/>
            <Route Component={ItemView} path='/item/:id'/>
        </Routes>
        
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
