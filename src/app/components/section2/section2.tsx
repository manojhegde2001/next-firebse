import React, { forwardRef } from 'react';

const Section2 = forwardRef<HTMLDivElement, {}>((props, ref) => (
  <section id="section2" ref={ref} style={{ height: '100vh', padding: '20px', backgroundColor: '#e0e0e0' }}>
    <h1>Section 2</h1>
    <p>This is the second section.</p>
  </section>
));

export default Section2;