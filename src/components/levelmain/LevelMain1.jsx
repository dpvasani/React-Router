import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Level1Page1 from '../level1/Level1Page1';
import Level1Page2 from '../level1/Level1Page2';
import Level1Page3 from '../level1/Level1Page3';
import Level1Page4 from '../level1/Level1Page4';
import Level1Page5 from '../level1/Level1Page5';
import Level1Page6 from '../level1/Level1Page6';
import Level1Page7 from '../level1/Level1Page7';
import Level1Page8 from '../level1/Level1Page8';
import Level1Page9 from '../level1/Level1Page9';
import Level1Page10 from '../level1/Level1Page10';


const LevelMain1 = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="page1" />} />
      <Route path="Level1Page1" element={<Level1Page1 />} />
      <Route path="Level1Page2" element={<Level1Page2 />} />
      <Route path="Level1Page3" element={<Level1Page3 />} />
      <Route path="Level1Page4" element={<Level1Page4 />} />
      <Route path="Level1Page5" element={<Level1Page5 />} />
      <Route path="Level1Page6" element={<Level1Page6 />} />
      <Route path="Level1Page7" element={<Level1Page7 />} />
      <Route path="Level1Page8" element={<Level1Page8 />} />
      <Route path="Level1Page9" element={<Level1Page9 />} />
      <Route path="Level1Page10" element={<Level1Page10 />} />
    </Routes>
  );
};

export default LevelMain1;
