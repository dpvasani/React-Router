import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Level7Page1 from '../Level7/Level7Page1';
import Level7Page2 from '../Level7/Level7Page2';
import Level7Page3 from '../Level7/Level7Page3';
import Level7Page4 from '../Level7/Level7Page4';
import Level7Page5 from '../Level7/Level7Page5';
import Level7Page6 from '../Level7/Level7Page6';
import Level7Page7 from '../Level7/Level7Page7';
import Level7Page8 from '../Level7/Level7Page8';
import Level7Page9 from '../Level7/Level7Page9';
import Level7Page10 from '../Level7/Level7Page10';


const LevelMain1 = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="page1" />} />
      <Route path="Level7Page1" element={<Level7Page1 />} />
      <Route path="Level7Page2" element={<Level7Page2 />} />
      <Route path="Level7Page3" element={<Level7Page3 />} />
      <Route path="Level7Page4" element={<Level7Page4 />} />
      <Route path="Level7Page5" element={<Level7Page5 />} />
      <Route path="Level7Page6" element={<Level7Page6 />} />
      <Route path="Level7Page7" element={<Level7Page7 />} />
      <Route path="Level7Page8" element={<Level7Page8 />} />
      <Route path="Level7Page9" element={<Level7Page9 />} />
      <Route path="Level7Page10" element={<Level7Page10 />} />
    </Routes>
  );
};

export default LevelMain1;
