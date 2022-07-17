import './App.css';
import { Chat } from './Chat';
import { Sidebar } from './Sidebar';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar/>
        <Chat src="asf90"/>
      </div>
    </div>
  );
}

export default App;
