import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
const Input = ({ label, type = "text", placeholder }) => {
  return (
    <FloatingLabel controlId="floatingInput" label={label} className="mb-3">
      <Form.Control type={type} placeholder={placeholder} />
    </FloatingLabel>
  );
};

export default Input;
