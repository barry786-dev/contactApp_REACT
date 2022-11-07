import React from 'react';
import uuid from 'react-native-uuid';

class AddContact extends React.Component {
  state = {
    name: '',
    email: '',
  };
  inputHandel = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.name === '' || this.state.email === '') {
      alert('fields are requested');
      return;
    }
    const id = uuid.v4();
    const contact = { ...this.state, id: id };
    this.props.setContactDataFunc(contact);
    this.setState({
      name: '',
      email: '',
    });
  };
  render() {
    return (
      <div className='ui main'>
        <h2 className=''> Add Contact</h2>
        <form action='' className='ui form' onSubmit={this.submitHandler}>
          <div className='field'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={this.state.name}
              onChange={this.inputHandel}
            />
          </div>
          <div className='field'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={this.state.email}
              onChange={this.inputHandel}
            />
          </div>
          <button className='ui button blue'>Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
