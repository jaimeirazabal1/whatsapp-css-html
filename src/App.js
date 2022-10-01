import './App.css';
import { Chat } from './components/chat/Chat';
import { Sidebar } from './components/sidebar/Sidebar';

import { useSelector, useDispatch } from 'react-redux'
import { Login } from './components/login/Login';

function App() {
  const isLogged = useSelector(state => state.logged.isLogged)
  console.log('isLogged',isLogged)
  return (
    <>
        {
          isLogged ? 
          <div className="app">
            <div className="app__body">
                  <Sidebar/>
                  <Chat src="asf90"/>
                  </div>
          </div>
           : <Login/>
        }
    </>
  );
}

export default App;
