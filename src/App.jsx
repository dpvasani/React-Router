import React from 'react';
import { Route, Routes, Navigate } from 'react-router';
import LevelMain1 from './components/levelmain/LevelMain1';
import LevelMain2 from './components/levelmain/LevelMain2';
import LevelMain3 from './components/levelmain/LevelMain3';
import LevelMain4 from './components/levelmain/Levelmain4';
import LevelMain5 from './components/levelmain/LevelMain5';
import LevelMain6 from './components/levelmain/LevelMain6';
import LevelMain7 from './components/levelmain/LevelMain7';
import LevelMain8 from './components/levelmain/LevelMain8';
import LevelMain9 from './components/levelmain/LevelMain9';
import LevelMain10 from './components/levelmain/LevelMain10';


const App = () => {
  return (
    <routes>
      <Route path='/' element={<Navigate to="/LevelMain1" />}/>
      <Route path='/levelMain1/*' element={<LevelMain1 />}/>
      <Route path='/levelMain2/*' element={<LevelMain2 />}/>
      <Route path='/levelMain3/*' element={<LevelMain3 />}/>
      <Route path='/levelMain4/*' element={<LevelMain4 />}/>
      <Route path='/levelMain5/*' element={<LevelMain5 />}/>
      <Route path='/levelMain6/*' element={<LevelMain6 />}/>
      <Route path='/levelMain7/*' element={<LevelMain7 />}/>
      <Route path='/levelMain8/*' element={<LevelMain8 />}/>
      <Route path='/levelMain9/*' element={<LevelMain9 />}/>
      <Route path='/levelMain10/*' element={<LevelMain10 />}/>
    </routes>
  )

}

export default App
