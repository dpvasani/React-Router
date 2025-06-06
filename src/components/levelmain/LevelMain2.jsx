import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Level2Page1 from '../Level2/Level2Page1';
import Level2Page2 from '../Level2/Level2Page2';
import Level2Page3 from '../Level2/Level2Page3';
import Level2Page4 from '../Level2/Level2Page4';
import Level2Page5 from '../Level2/Level2Page5';
import Level2Page6 from '../Level2/Level2Page6';
import Level2Page7 from '../Level2/Level2Page7';
import Level2Page8 from '../Level2/Level2Page8';
import Level2Page9 from '../Level2/Level2Page9';
import Level2Page10 from '../Level2/Level2Page10';


const LevelMain1 = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="page1" />} />
      <Route path="Level2Page1" element={<Level2Page1 />} />
      <Route path="Level2Page2" element={<Level2Page2 />} />
      <Route path="Level2Page3" element={<Level2Page3 />} />
      <Route path="Level2Page4" element={<Level2Page4 />} />
      <Route path="Level2Page5" element={<Level2Page5 />} />
      <Route path="Level2Page6" element={<Level2Page6 />} />
      <Route path="Level2Page7" element={<Level2Page7 />} />
      <Route path="Level2Page8" element={<Level2Page8 />} />
      <Route path="Level2Page9" element={<Level2Page9 />} />
      <Route path="Level2Page10" element={<Level2Page10 />} />
    </Routes>
  );
};

export default LevelMain1;
