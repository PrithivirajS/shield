import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './down.css';

class Dropdown extends Component {
  constructor() {
    super();
    this.state = {
      display: false,
    }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  showMenu(event) {
    event.preventDefault();
    this.setState({ display: true}, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ display: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }
render(){
    return(
      <>
        <div class ="side" >
          <div class ="button-header">
            <h3>SHILED</h3>
          </div>
          <div class="head">
              <button class="dropdown-btn dropdown-toggle" id="menu" data-toggle="dropdown" onClick={this.showMenu}> Menu </button> </div>
                  {
                    this.state.display ? (
                        <div className ="menu" ref={(element) => {
                                this.dropdownMenu = element;
                              }}  aria-labelledby="menu">
                                <ul class="menulist" aria-labelledby="menu">
                                  <li class="homeheader">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="homelist"> Home </a>
                                      <ul class="homelist">
                                        <li><a href="#">Fetch Data</a></li>
                                        <li><a href="#">CSV</a></li>
                                        <li><a href="#">Navigation</a></li>
                                      </ul>
                                    </li>
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
