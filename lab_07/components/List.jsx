import React from 'react';

function List(props) {
  const { items } = props;

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <ul className="list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default List;