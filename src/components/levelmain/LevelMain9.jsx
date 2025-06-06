import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Level9Page1 from '../Level9/Level9Page1';
import Level9Page2 from '../Level9/Level9Page2';
import Level9Page3 from '../Level9/Level9Page3';
import Level9Page4 from '../Level9/Level9Page4';
import Level9Page5 from '../Level9/Level9Page5';
import Level9Page6 from '../Level9/Level9Page6';
import Level9Page7 from '../Level9/Level9Page7';
import Level9Page8 from '../Level9/Level9Page8';
import Level9Page9 from '../Level9/Level9Page9';
import Level9Page10 from '../Level9/Level9Page10';


const LevelMain1 = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="page1" />} />
      <Route path="Level9Page1" element={<Level9Page1 />} />
      <Route path="Level9Page2" element={<Level9Page2 />} />
      <Route path="Level9Page3" element={<Level9Page3 />} />
      <Route path="Level9Page4" element={<Level9Page4 />} />
      <Route path="Level9Page5" element={<Level9Page5 />} />
      <Route path="Level9Page6" element={<Level9Page6 />} />
      <Route path="Level9Page7" element={<Level9Page7 />} />
      <Route path="Level9Page8" element={<Level9Page8 />} />
      <Route path="Level9Page9" element={<Level9Page9 />} />
      <Route path="Level9Page10" element={<Level9Page10 />} />
    </Routes>
  );
};

export default LevelMain1;
