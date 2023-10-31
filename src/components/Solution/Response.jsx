import React from 'react';


const DisplayMessage = ({ message }) => {
  if (!message) {
    return null; // Don't display anything if there is no message
  }

  return (
    <div className="message-container">
      <h2>Recommended Plan</h2>
      <p className="message-content">{message}</p>
    </div>
  );
};

export default DisplayMessage;
