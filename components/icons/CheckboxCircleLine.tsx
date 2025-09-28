import React from 'react';

const CheckboxCircleLine = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path fill="none" d="M0 0h24v24H0z"/>
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4l-3.535-3.536 1.414-1.414 2.121 2.122 4.242-4.243 1.414 1.414L11.003 16z" fill="currentColor"/>
  </svg>
);

export default CheckboxCircleLine;