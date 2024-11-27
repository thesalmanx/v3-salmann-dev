import React, { useEffect, useState } from 'react';
import '../index.css';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor"
      style={{ left: cursorPosition.x, top: cursorPosition.y }}
    />
  );
};

export default CustomCursor;
