"use client";

import React, { useRef } from 'react';
import Section1 from './components/section1/section1';
import Section2 from './components/section2/section2';
import Section3 from './components/section3/section3';
import Link from 'next/link';

const Home: React.FC = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToSection = (index: number) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 bg-white p-2 shadow">
        <ul className="flex justify-around list-none m-0 p-0">
          <li><Link href="#section1" className="hover:text-blue-500">Section 1</Link></li>
          <li><Link href="#section2" className="hover:text-blue-500">Section 2</Link></li>
          <li><Link href="#section3" className="hover:text-blue-500">Section 3</Link></li>
        </ul>
      </nav>
      <Section1 ref={(el: any) => (sectionRefs.current[0] = el)} />
      <Section2 ref={(el: any) => (sectionRefs.current[1] = el)} />
      <Section3 ref={(el: any) => (sectionRefs.current[2] = el)} />
    </div>
  );
};

export default Home;
