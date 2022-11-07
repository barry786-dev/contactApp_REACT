import React from 'react';
import user from '../images/photo.png';
const CardContact = (props) => {
  const style = {
    float: 'right',
    color: 'red',
    marginTop: '7px',
  };
  const deleteContactHandler = (id) => {
    props.deleteContactFunc(id);
  };
  const { id, name, email } = props.contact;
  return (
    <React.Fragment>
      <img className='ui avatar image' src={user} alt='user' />
      <div className='content'>
        <div className='header'>{name}</div>
        <div>{email}</div>
      </div>
      <i
        className='trash alternate outline icon'
        style={style}
        onClick={() => deleteContactHandler(id)}
      ></i>
    </React.Fragment>
  );
};

export default CardContact;
