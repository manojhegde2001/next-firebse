import React, { forwardRef } from 'react';

const Section3 = forwardRef<HTMLDivElement, {}>((props, ref) => (
  <section id="section3" ref={ref} style={{ height: '100vh', padding: '20px', backgroundColor: '#d0d0d0' }}>
    <h1>Section 3</h1>
    <p>This is the third section.</p>
  </section>
));

export default Section3;