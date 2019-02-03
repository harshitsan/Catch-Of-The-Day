import React from 'react';
import {render} from 'react-dom';
import './css/style.css'
import StorePicker from './components/StorePicker'
// class StorePicker extends React.Component{
//   render()
//   {
//     return(
//       <div>
//         hello react!
//       </div>
//     );
//   }
// }
render(<StorePicker/>,document.getElementById("main"));
