import React, { useEffect, useState } from 'react';
import { ReactWebChat } from 'botframework-webchat';

const ChatBot = () => {
  const [directLine, setDirectLine] = useState(null);

  useEffect(() => {
    const fetchDirectLineToken = async () => {
      const response = await fetch('https://directline.botframework.com/v3/directline/tokens/generate', {
        method: 'POST',
        headers: {
          'Authorization': `Cso2z9585jHy0tevxiqkduP254lnSBNOos5t8BRS0hVq8Eb2h08tJQQJ99BCAC4f1cMXJ3w3AAAAACOGrEef` // Sustituye con tu API Key
        }
      });

      if (response.ok) {
        const data = await response.json();
        setDirectLine(data);
      } else {
        console.error('Error obteniendo token de Direct Line');
      }
    };

    fetchDirectLineToken();
  }, []);

  if (!directLine) {
    return <div>Loading...</div>;
  }

  return (
    <div id="webchat" style={{ height: '500px', width: '100%' }}>
      <ReactWebChat directLine={directLine} userID="user123" />
    </div>
  );
};

export default ChatBot;
