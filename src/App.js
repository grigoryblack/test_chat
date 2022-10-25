import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';

const projectID = 'e7682e50-e2a7-4aa7-adef-76b047b669b7';

const App = () => {
  return (
      <ChatEngine
          height = '100vh'
          projectID={projectID}
          userName='Person1'
          userSecret='123'
          renderChatFeed={(chatAppProps)=><ChatFeed{...chatAppProps}/>}
      />
  );
}

export default App;