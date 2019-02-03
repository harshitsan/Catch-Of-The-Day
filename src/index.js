import {BrowserRouter,Match,Miss} from 'react-router';
import React from 'react';
import {render} from 'react-dom';
import './css/style.css'; //this
import StorePicker from './components/StorePicker';
import App from './components/App';
import NotFound from './components/NotFound';

const Root = ()=>{
  return(
    <BrowserRouter>
      <div>
        <Match pattern="/" component={StorePicker} exactly/>
        <Match pattern="/store/:storeId" component={App} exactly/>
        <Miss component={NotFound}/>
      </div>
    </BrowserRouter>
  );
}

render(<Root/>,document.getElementById("main"));
