import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Drawer from './Nav/drawer';
import CreateChannel from './Forms/addchannel';
function App() {
  return (
    <div className="App">
      <Drawer/>
      <Route path="/form" component={CreateChannel} />
      <Route path="/created-channel" component={Drawer} />
    </div>
  );
}

export default App;
