import React from "react";

import { Form } from "react-bootstrap";

export const Filter = props => {
  // const [searchText, onChange] = useState('');

  // const onChange = () => {
  //     console.log('Not yet implemented');
  // };

  return (
    <Form.Control
      type="search"
      placeholder="Search"
      onChange={props.handleFilter}
    />
  );
};
