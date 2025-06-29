import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <ProfileCard name="John Doe" age={30} job="Web Developer" />
    </div>
  );
}

export default App;