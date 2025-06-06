import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Level5Page1 from '../Level5/Level5Page1';
import Level5Page2 from '../Level5/Level5Page2';
import Level5Page3 from '../Level5/Level5Page3';
import Level5Page4 from '../Level5/Level5Page4';
import Level5Page5 from '../Level5/Level5Page5';
import Level5Page6 from '../Level5/Level5Page6';
import Level5Page7 from '../Level5/Level5Page7';
import Level5Page8 from '../Level5/Level5Page8';
import Level5Page9 from '../Level5/Level5Page9';
import Level5Page10 from '../Level5/Level5Page10';


const LevelMain1 = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="page1" />} />
      <Route path="Level5Page1" element={<Level5Page1 />} />
      <Route path="Level5Page2" element={<Level5Page2 />} />
      <Route path="Level5Page3" element={<Level5Page3 />} />
      <Route path="Level5Page4" element={<Level5Page4 />} />
      <Route path="Level5Page5" element={<Level5Page5 />} />
      <Route path="Level5Page6" element={<Level5Page6 />} />
      <Route path="Level5Page7" element={<Level5Page7 />} />
      <Route path="Level5Page8" element={<Level5Page8 />} />
      <Route path="Level5Page9" element={<Level5Page9 />} />
      <Route path="Level5Page10" element={<Level5Page10 />} />
    </Routes>
  );
};

export default LevelMain1;
