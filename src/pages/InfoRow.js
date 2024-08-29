import React from 'react';

const InfoRow = ({ title, content }) => {
  return (
    <div className="row bg-body-tertiary mx-0">
      <h4 className="col fst-italic text-uppercase p-5">{title}</h4>
      <p className="col fst-italic text-uppercase text-end p-5">{content}</p>
    </div>
  );
};

export default InfoRow;
