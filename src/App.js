import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './modal';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false}
  }
  render() {
    return (
      <div>
        <h1>Click button to see example modal</h1>
        <button className="modalButton" onClick ={() => this.openModal()}>Click Me!</button>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
        <h1> Example Modal </h1>
        <p> Content for your modal here </p>
        <p><button onClick={() => this.closeModal()}>Close Modal</button></p>
        </Modal> 
      </div>
    );
  }
  openModal() {
    this.setState({ isModalOpen: true })
  }
  closeModal() {
    this.setState({isModalOpen: false })
  }
}

export default App
