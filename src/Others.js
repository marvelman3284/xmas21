import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css";
import "./Other.css";


export class Footer extends React.Component {
  render () {
    return (
      <>
        <footer className="AppFooter">
          *Prices are subject to change and may not be 100% accurate.
          <br />
          - At the time of writing thing each link has been vetted to make sure that it works and that the product can be delievered before Christmas (Dec 25, 2021)
          <br />
          You can contact me through email or phone:
          <ul>
            <li>
              Phone: +1 (973) 936 4695
            </li>
            <li>
              Email: jedimaster3284@gmail.com
            </li>
          </ul>
          <h5>
            This website was crafted with love and lots and lots of google searches.
            Hosted with care from Cloudflare as well.
            View the source code for this website at its <a className="App-link" href="https://github.com/marvelman3284/xmas21" target="_blank" rel="noreferrer"> repository </a>
          </h5>
        </footer>
      </>
    );
  }
}

export class Header extends React.Component {
  render () {
    return (
      <header className="AppHeader">
        <h1>
          Hi there!
        </h1>
        <h3>
          Welcome to my christmas list this year! It's pretty self explanatory but in case you don't get it:
          Each item has a name. Underneath said name in a sublist is some information about each item including a link and a price*. 
          For any questions you can find my contact information at the <a className="App-link" href="#footer"> bottom of the page</a>.
        </h3>
      </header>
    );
  }
}

export class Undef extends React.Component {
  render () {
    return (
      <>
        <h1 className="App-header">
          Sorry, seems like there wasn't a link for that one :(
        </h1>
        
        <br />
        <h2 className="App-header"> Let me know about this issue: </h2>
          <h3 className="App-header">
            <ul>
              <li>
                Email: jedimaster3284@gmail.com
              </li>
              <li>
                Phone: +1 (973)-936-4695
              </li>
            </ul>
          </h3>
          <h5 className="App-link">
            <Link to="/">Return home</Link>
          </h5>
      </>
    );
  }
}