import React from 'react';

function Content(props) {
  return (
    <p className="content-paragraph">
      {props.children}
    </p>
  );
}

export default Content;