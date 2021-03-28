import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export const Chart = () => {
  const ref = useRef(null);
  useEffect(() => {
    let accessToRef = d3.select(ref.current);
    accessToRef.style('background-color', 'green');
  }, []);
  return <div ref={ref}>Testing ref</div>;
};
