import React from 'react';

export default function StackCard({ stack }) {
  return (
    <li style={{ listStyleType: 'none' }}>
      <div className='stack-card'>{stack.tech}</div>
    </li>
  );
}
