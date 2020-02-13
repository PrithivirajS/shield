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
        <div id ="side" >
          <div class ="button-header">
            <h3>SHILED</h3>
          </div>
          <div class="head">
                <a href="#" onClick={this.showMenu}>Menu</a></div>
                          {
                            this.state.showMenu
                            ? (
                              <div className ="menu" ref={(element) => {
                                this.dropdownMenu = element;
                              }}>
                                <ul class="list-unstyled dummyheaders">
                                  <li class="homeheader">
                                    <a href="#" > Home </a>
                                            <ul class="homelist" >
                                              <li><a href="#">Fetch Data</a></li>
                                              <li><a href="#">CSV</a></li>
                                              <li><a href="#">Navigation</a></li>
                                            </ul>
                                      <li><a href="#">About</a></li>
                                            <li class="itemheader">
                                              <ul class="itemlist">
                                                <li><a href="#">List 1</a></li>
                                                <li><a href="#">List 2</a></li>
                                                <li><a href="#">List 3</a></li>
                                              </ul>
                                            </li>
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
