import React from 'react';

export default class StorePicker extends React.Component{
  render()
  {
    return(
      <div>
        <form className="store-selector">
          <h2>Please Enter the store name</h2>
          <input type="text" required placeholder="Store Name"/>
          <button type="submit">Visit Store -></button>
        </form>
      </div>
    );
  }
}
