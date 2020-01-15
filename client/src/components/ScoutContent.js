import React, {Component} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ScoutContent extends Component {

    render () {
      return (
        <Form className="Scouter-form">
          <div className="SC-main-div">
          <div className="SC-form">
            <Form.Group as={Row} controlId="SC form group">
            <Form.Label className="mb-3">
              Event: 
            </Form.Label>
            <Form.Control className="mb-3" required as="select">
              <option>HVR</option>
              <option>SBPLI</option>
              <option>NYC</option>
            </Form.Control>
            </Form.Group>
          
          
          </div>
          </div>


        </Form>


      );
   }
}
    
    export default ScoutContent;