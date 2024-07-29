import logo from './logo.svg';
import './App.css';
import SigninPage from './component/SigninPage';
import { Provider } from 'react-redux';

import NvigationPage from './component/NvigationPage';
import appstore from './store/appStore';

function App() {
  return (
    <div className="App">
    <Provider store={appstore}>

      <NvigationPage/>
      </Provider>
     
    </div>
  );
}

export default App;
