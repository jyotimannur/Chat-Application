import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';

import './App.css';
import ChatFeed from './components/ChatFeed';


const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

	return (
		<ChatEngine
			height='100vh'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			projectID='6b644aa0-ddcf-4c97-8822-845ce8f2de45'
            renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps } />} 
		/>
	);
}

export default App;