import './styles.css';

import { Component } from 'react/cjs/react.production.min';

export class Button extends Component {

  render() {
    const {text, onclick, disabled } = this.props;
    
    
    return (
      <button 
        className='button' 
        onClick={onclick}
        disabled={disabled}
      >
        {text}
      </button>
    );
  }
}
