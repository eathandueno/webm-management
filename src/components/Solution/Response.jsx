import React from 'react';

const formatApiResponse = (response) => {
  const lines = response.split('\n');
  const formattedResponse = {};

  lines.forEach(line => {
    if (line.startsWith('Plan:')) {
      formattedResponse.plan = line.replace('Plan:', '').trim();
    } else if (line.startsWith('Price:')) {
      formattedResponse.price = line.replace('Price:', '').trim();
    } else if (line.startsWith('Frequency:')) {
      formattedResponse.frequency = line.replace('Frequency:', '').trim();
    } else if (line.startsWith('Services Included:')) {
      formattedResponse.services = line.replace('Services Included:', '').trim().split('-').map(s => s.trim());
    } else if (line.startsWith('Please note')) {
      formattedResponse.note = line.trim();
    } else {
      formattedResponse.additionalInfo = (formattedResponse.additionalInfo || '') + ' ' + line.trim();
    }
  });

  return formattedResponse;
};

const DisplayMessage = ({ message }) => {
  if (!message) {
    return null; // Don't display anything if there is no message
  }

  const formatted = formatApiResponse(message);

  return (
    <div className="message-container">
      <h2>Recommended Plan</h2>
      <div>
        <strong>Plan:</strong> {formatted.plan}
      </div>
      <div>
        <strong>Price:</strong> {formatted.price}
      </div>
      <div>
        <strong>Frequency:</strong> {formatted.frequency}
      </div>
      <div>
        <strong>Services Included:</strong> {formatted.services && formatted.services.join(', ')}
      </div>
      <div>
        <strong>Note:</strong> {formatted.note}
      </div>
      <div>
        <strong>Additional Information:</strong> {formatted.additionalInfo}
      </div>
    </div>
  );
};

export default DisplayMessage;
