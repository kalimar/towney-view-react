import React from 'react';
import {render} from 'react-dom';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return <div>
      <div className="container">
        <form>
          <div className="six columns">
            <label htmlFor="nameInput">Your Name</label>
            <input type="text" className="u-full-width" placeholder="George McFly" id="nameInput"/>
          </div>
          <div className="six columns">
            <label htmlFor="emailInput">Your email</label>
            <input type="email" className="u-full-width" placeholder="gmcfly@mailbox.com" id="emailInput"/>
          </div>
        </form>
      </div>
    </div>;
  }
};

render(<Form />, document.getElementById('app'));