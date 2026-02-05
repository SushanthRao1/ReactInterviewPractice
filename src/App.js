import './App.css';
// import { Routes, Route } from 'react-router-dom';
import { HomePageComp } from './components/home.jsx';
import TodoList from '../src/components/ToDoList/TodoList';
import Classcomp from '../src/components/reactBasics/Classcomp';
import EcommerceHome from '../src/components/eCommerce/EHome.jsx';
// import Ecart from '../src/components/eCommerce/CartItems.jsx';
import Ecart from '../src/components/reduxEcommerce/ecomponent/EcommerceHome.jsx';
import PromisesAsyncAwait from'../src/components/reactBasics/PromisesAsyncAwait';
import Movie from './components/reactBasics/Funcomp.jsx';
import Debounce from './components/reactBasics/useDebounce.jsx';
import APIDemo from './components/reactBasics/ApiDemo.jsx';
import Calculator from './components/reactBasics/Statecomp.jsx';
import EveneChange from './components/reactBasics/InputEvent.jsx';
import UseReducer from './components/reactBasics/useReducer.jsx';
import Forms from './components/reactBasics/Forms.jsx';
import CustomeHook from './components/reactBasics/CustomeHook.jsx';
import TypeScript from './TypeScript/Basics.ts';
import 'bootstrap/dist/css/bootstrap.min.css' //it will support all the other components
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useReducer } from 'react';


// function Linksfun() {
//   return (<div>
//     <Link to="/">HOME</Link> <br />
//     <Link to="/TodoList">TodoList</Link> <br />
//     <Link to="/Calculator">Calculator</Link> <br />
//     <Link to="/Classcomp">Classcomp</Link> <br />
//     <Link to="/Eventchange">EventHandler</Link><br />
//     <Link to="/APIDemo">APIDEMO</Link><br />
//     <Link to="/Movie">FunctionalComp</Link><br />
//     <Link to="/UseStateHK">UseStateHooK</Link><br />
//     <Link to="/UseReducer">UseReducer</Link><br /></div>)
// }

function Routerfun() {
  return (<div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageComp/>}></Route>
        <Route path="/EHome" element={<EcommerceHome/>}></Route>
        <Route path="/Ecart" element={<Ecart/>}></Route>
        <Route path="/TodoList" element={<TodoList />}></Route>
        <Route path="/PromisesAsyncAwait" element={<PromisesAsyncAwait />}></Route>
        <Route path="/Calculator" element={<Calculator />}></Route>
        <Route path="/Classcomp" element={<Classcomp />}></Route>
        <Route path="/Eventchange" element={<EveneChange />}></Route>
        <Route path="/APIDemo" element={<APIDemo/>}></Route>
        <Route path="/Movie" element={<Movie/>}></Route>
        <Route path="/Debounce" element={<Debounce />}></Route>
        <Route path="/UseReducer" element={<UseReducer />}></Route>
        <Route path="/Forms" element={<Forms />}></Route>
        <Route path="/CustomeHook" element={<CustomeHook />}></Route>
        <Route path="/TypeScript" element={<TypeScript />}></Route>
      </Routes>
    </BrowserRouter>
  </div>)
}

function App() {
  return (
    <div className="App">
      <Routerfun />

    </div >
  );
}

// function App() {
//   return (
//     <div className="App">
//       <TodoList />
//     </div>
//   );
// }

export default App;
