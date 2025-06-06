import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Level3Page1 from '../Level3/Level3Page1';
import Level3Page2 from '../Level3/Level3Page2';
import Level3Page3 from '../Level3/Level3Page3';
import Level3Page4 from '../Level3/Level3Page4';
import Level3Page5 from '../Level3/Level3Page5';
import Level3Page6 from '../Level3/Level3Page6';
import Level3Page7 from '../Level3/Level3Page7';
import Level3Page8 from '../Level3/Level3Page8';
import Level3Page9 from '../Level3/Level3Page9';
import Level3Page10 from '../Level3/Level3Page10';


const LevelMain1 = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="page1" />} />
      <Route path="Level3Page1" element={<Level3Page1 />} />
      <Route path="Level3Page2" element={<Level3Page2 />} />
      <Route path="Level3Page3" element={<Level3Page3 />} />
      <Route path="Level3Page4" element={<Level3Page4 />} />
      <Route path="Level3Page5" element={<Level3Page5 />} />
      <Route path="Level3Page6" element={<Level3Page6 />} />
      <Route path="Level3Page7" element={<Level3Page7 />} />
      <Route path="Level3Page8" element={<Level3Page8 />} />
      <Route path="Level3Page9" element={<Level3Page9 />} />
      <Route path="Level3Page10" element={<Level3Page10 />} />
    </Routes>
  );
};

export default LevelMain1;
