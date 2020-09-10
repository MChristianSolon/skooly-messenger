import React, { useState } from 'react';
import './App.css';
import { auth, uiConfig } from './components/Firebase';
import ChatApp from './components/ChatApp';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user.displayName);
    } else {
    }
  });
  return (
    <div className="App">
      <div>
        {currentUser ? (
          <>
            <ChatApp user={currentUser} />
          </>
        ) : (
          <>
            <h1 style={{ textAlign: 'center', margin: '35vh' }}>
              MessyMessenger
            </h1>
            <StyledFirebaseAuth
              class="login-authentication"
              uiConfig={uiConfig}
              firebaseAuth={auth}
            ></StyledFirebaseAuth>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
