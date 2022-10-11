import React from 'react';
import './App.css';
import { TsReactTest } from './review/try-use-array';
import { LoginScreen } from './screens/login';
import { ProjectListScreen } from './screens/project-list';


function App() {
  return (
    <div className="App">
      <LoginScreen/>
     {/* <ProjectListScreen/> */}
     {/* <TsReactTest/> */}
    </div>
  );
}

export default App;
