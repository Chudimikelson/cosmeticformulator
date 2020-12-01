import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import Accordion from './Accordion';

export default class Sidebar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modal:false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    return (
      <div>
        <button id="menuBar" onClick={this.toggle} >
        <span id='menubaricon' ><i className="fas fa-bars my-2"></i></span>
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Cosmetic Formulator Depot</ModalHeader>
          <ModalBody>
            <Accordion toggle={this.toggle}/>
          </ModalBody>
        </Modal>
        
      </div>
    )
  }
}
 
