import React from 'react';
import Alert from 'react-bootstrap/Alert';
function MessageBox(props) {
  return (
    <Alert
      variant={props.variant || 'info'}
      className="border d-flex align-items-center justify-content-center"
    >
      {props.children}
    </Alert>
  );
}

export default MessageBox;
