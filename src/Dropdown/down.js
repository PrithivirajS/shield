import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './down.css';

class Dropdown extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true}, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }
  render(){
    return(
      <>
        <div>
          <button onClick={this.showMenu}> show menu </button>
        {
          this.state.showMenu
          ? (
            <div className ="menu" ref={(element) => {
              this.dropdownMenu = element;
            }}>
              <ul class ="nav">
                <li><a href ="#">Home 1</a></li>
                <li><a href ="#">Home 2</a></li>
                <li><a href ="#">Home 3</a></li>
              </ul>
            </div>
          )
          : (
            null
          )
        }
      </div>
    </>
    );
  }
}

export default Dropdown;
