import React, { forwardRef } from 'react';

const Section1 = forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div id="section1" ref={ref} className='bg-slate-200 h-[100vh]'>
    <h1>Section 1</h1>
    <p>This is the first section.</p>
  </div>
));

export default Section1;
