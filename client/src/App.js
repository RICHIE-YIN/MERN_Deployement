import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
import Edit from './views/Edit';
import CreateNote from './views/CreateNote';
import NoNote from './views/NoNote';
import Random from './views/Random';

function App() {
    return (
      <div className="App">
        <Routes>
            <Route element={<Main/>} path="/" />
            <Route element={<CreateNote/>} path="/note/new" />
            <Route element={<Random/>} path="/note/rand" />
            <Route element={<NoNote/>} path="/error" />
            <Route element={<Detail/>} path="/detail/:id" />
            <Route element={<Edit/>} path="/note/:id"/>
        </Routes>                         
      </div>
    );
}
export default App;