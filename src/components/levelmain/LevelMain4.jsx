import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Level4Page1 from '../Level4/Level4Page1';
import Level4Page2 from '../Level4/Level4Page2';
import Level4Page3 from '../Level4/Level4Page3';
import Level4Page4 from '../Level4/Level4Page4';
import Level4Page5 from '../Level4/Level4Page5';
import Level4Page6 from '../Level4/Level4Page6';
import Level4Page7 from '../Level4/Level4Page7';
import Level4Page8 from '../Level4/Level4Page8';
import Level4Page9 from '../Level4/Level4Page9';
import Level4Page10 from '../Level4/Level4Page10';


const LevelMain1 = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="page1" />} />
      <Route path="Level4Page1" element={<Level4Page1 />} />
      <Route path="Level4Page2" element={<Level4Page2 />} />
      <Route path="Level4Page3" element={<Level4Page3 />} />
      <Route path="Level4Page4" element={<Level4Page4 />} />
      <Route path="Level4Page5" element={<Level4Page5 />} />
      <Route path="Level4Page6" element={<Level4Page6 />} />
      <Route path="Level4Page7" element={<Level4Page7 />} />
      <Route path="Level4Page8" element={<Level4Page8 />} />
      <Route path="Level4Page9" element={<Level4Page9 />} />
      <Route path="Level4Page10" element={<Level4Page10 />} />
    </Routes>
  );
};

export default LevelMain1;
