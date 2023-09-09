import React from "react";

const Section = ({ title }) => {
  return (
    <div className='mb-3'>
      <span className='border-bottom border-warning border-2 pb-2 fs-4'>
        {title}
      </span>
    </div>
  );
};

export default Section;
