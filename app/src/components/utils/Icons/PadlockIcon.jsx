import React from 'react';

export default function PadlockIcon({ customClass}) {
  return (
    <svg
      className={customClass}
      width='60'
      height='60'
      viewBox='0 0 60 60'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M19.2857 27.8571V19.2857C19.2857 16.4441 20.4145 13.7189 22.4239 11.7096C24.4332 9.70023 27.1584 8.57141 30 8.57141C32.8416 8.57141 35.5668 9.70023 37.5761 11.7096C39.5855 13.7189 40.7143 16.4441 40.7143 19.2857V27.8571M15 27.8571H45C47.3669 27.8571 49.2857 29.7759 49.2857 32.1428V47.1428C49.2857 49.5098 47.3669 51.4286 45 51.4286H15C12.6331 51.4286 10.7143 49.5098 10.7143 47.1428V32.1428C10.7143 29.7759 12.6331 27.8571 15 27.8571Z'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
