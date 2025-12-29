import React from 'react';

function Resume() {
  return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <img 
          src="/resumePic.png" 
          alt="Resume"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
  );
}

export default Resume;