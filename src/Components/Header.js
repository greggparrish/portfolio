import React, {Component} from 'react'

class Header extends Component {
  render() {
    return (
      <header>
        <a href="/" className="logo">
          <img src="/images/gregory_parrish_logo.png" alt="Gregory Parrish logo" />
        </a>
        <div className="subheader">
          <div className="name"><a href="/">GREGORY</a><br /><a href="/" className="last">PARRISH</a></div>
          <span className="webdev">
            web dev since 1998
            &nbsp; • &nbsp;
            <a href="/docs/gregory_parrish_cv.pdf" target="_blank">CV</a>
          </span>
          <span className="webdev"><a href="mailto:grp224@nyu.edu" className="email">grp224@nyu.edu</a></span>
        </div>
      </header>
    );
  }
}
export default Header;
