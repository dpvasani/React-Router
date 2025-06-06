import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Level10Page1 from '../Level10/Level10Page1';
import Level10Page2 from '../Level10/Level10Page2';
import Level10Page3 from '../Level10/Level10Page3';
import Level10Page4 from '../Level10/Level10Page4';
import Level10Page5 from '../Level10/Level10Page5';
import Level10Page6 from '../Level10/Level10Page6';
import Level10Page7 from '../Level10/Level10Page7';
import Level10Page8 from '../Level10/Level10Page8';
import Level10Page9 from '../Level10/Level10Page9';
import Level10Page10 from '../Level10/Level10Page10';


const LevelMain1 = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="page1" />} />
      <Route path="Level10Page1" element={<Level10Page1 />} />
      <Route path="Level10Page2" element={<Level10Page2 />} />
      <Route path="Level10Page3" element={<Level10Page3 />} />
      <Route path="Level10Page4" element={<Level10Page4 />} />
      <Route path="Level10Page5" element={<Level10Page5 />} />
      <Route path="Level10Page6" element={<Level10Page6 />} />
      <Route path="Level10Page7" element={<Level10Page7 />} />
      <Route path="Level10Page8" element={<Level10Page8 />} />
      <Route path="Level10Page9" element={<Level10Page9 />} />
      <Route path="Level10Page10" element={<Level10Page10 />} />
    </Routes>
  );
};

export default LevelMain1;
