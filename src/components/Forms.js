import React, { useState } from "react";
import {
  Container,
  Row,
  Form,
  Button,
  Col,
  FloatingLabel,
} from "react-bootstrap";
import List from "./List";

const Forms = () => {
  const [refresh, setRefresh] = useState(false);
  const [value, setValue] = useState({
    list: [],
    inputData: "",
  });

  const clickhandler = () => {
    
    let listArr= []
    if (localStorage.getItem("list") === null) {
      listArr.push(value.inputData);
      localStorage.setItem("list", JSON.stringify(listArr));
    } else {
      const listArrStr = localStorage.getItem("list");
      listArr = JSON.parse(listArrStr);
      listArr.push(value.inputData);
      localStorage.setItem("list", JSON.stringify(listArr));
      setRefresh(true)
    }
  
  };

  const changehandler = (e) => {
    const { value, name } = e.target;
    setValue((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center mt-4">
        <Col md={8}>
          <FloatingLabel
            controlId="floatingInput"
            label="Enter Tasks"
            className="mb-3"
          >
            <Form.Control
              type="text"
              onChange={changehandler}
              value={value.inputData}
              placeholder="Enter Tasks"
              name="inputData"
            />
          </FloatingLabel>
        </Col>
        <Col md={1}>
          <Button onClick={clickhandler}>Add</Button>
        </Col>
      </Row>
      <List refresh={refresh} setRefresh={setRefresh} />
    </Container>
  );
};

export default Forms;
