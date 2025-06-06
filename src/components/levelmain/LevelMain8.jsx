import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Level8Page1 from '../Level8/Level8Page1';
import Level8Page2 from '../Level8/Level8Page2';
import Level8Page3 from '../Level8/Level8Page3';
import Level8Page4 from '../Level8/Level8Page4';
import Level8Page5 from '../Level8/Level8Page5';
import Level8Page6 from '../Level8/Level8Page6';
import Level8Page7 from '../Level8/Level8Page7';
import Level8Page8 from '../Level8/Level8Page8';
import Level8Page9 from '../Level8/Level8Page9';
import Level8Page10 from '../Level8/Level8Page10';


const LevelMain1 = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="page1" />} />
      <Route path="Level8Page1" element={<Level8Page1 />} />
      <Route path="Level8Page2" element={<Level8Page2 />} />
      <Route path="Level8Page3" element={<Level8Page3 />} />
      <Route path="Level8Page4" element={<Level8Page4 />} />
      <Route path="Level8Page5" element={<Level8Page5 />} />
      <Route path="Level8Page6" element={<Level8Page6 />} />
      <Route path="Level8Page7" element={<Level8Page7 />} />
      <Route path="Level8Page8" element={<Level8Page8 />} />
      <Route path="Level8Page9" element={<Level8Page9 />} />
      <Route path="Level8Page10" element={<Level8Page10 />} />
    </Routes>
  );
};

export default LevelMain1;
