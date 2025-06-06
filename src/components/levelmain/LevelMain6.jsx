import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Level6Page1 from '../Level6/Level6Page1';
import Level6Page2 from '../Level6/Level6Page2';
import Level6Page3 from '../Level6/Level6Page3';
import Level6Page4 from '../Level6/Level6Page4';
import Level6Page5 from '../Level6/Level6Page5';
import Level6Page6 from '../Level6/Level6Page6';
import Level6Page7 from '../Level6/Level6Page7';
import Level6Page8 from '../Level6/Level6Page8';
import Level6Page9 from '../Level6/Level6Page9';
import Level6Page10 from '../Level6/Level6Page10';


const LevelMain1 = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="page1" />} />
      <Route path="Level6Page1" element={<Level6Page1 />} />
      <Route path="Level6Page2" element={<Level6Page2 />} />
      <Route path="Level6Page3" element={<Level6Page3 />} />
      <Route path="Level6Page4" element={<Level6Page4 />} />
      <Route path="Level6Page5" element={<Level6Page5 />} />
      <Route path="Level6Page6" element={<Level6Page6 />} />
      <Route path="Level6Page7" element={<Level6Page7 />} />
      <Route path="Level6Page8" element={<Level6Page8 />} />
      <Route path="Level6Page9" element={<Level6Page9 />} />
      <Route path="Level6Page10" element={<Level6Page10 />} />
    </Routes>
  );
};

export default LevelMain1;
