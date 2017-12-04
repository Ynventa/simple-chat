import React, { Component } from 'react';
import { Navbar, Grid, Row, Col, FormGroup, ControlLabel, Button, FormControl, Form } from 'react-bootstrap';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Simple Chat</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

        <Grid>
          <Row>
            <Col sm={8}>
              <div class="show-messages">
              </div>
            </Col>
            <Col sm={8}>

              <Form inline>
    
                <FormGroup controlId="formInlineEmail">
                  <FormControl type="text" placeholder="Enter text" />
                </FormGroup>
                {' '}
                <Button bsStyle="primary">
                  Send
                </Button>
              </Form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
