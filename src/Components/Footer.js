import React, {Component} from 'react'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='container'>
          <div className='row'>
            <div className="col-sm-12 col-md-4">
              contact: <a href="mailto:grp224@nyu.edu" className="email">grp224@nyu.edu</a>
            </div>
            <div className="col-sm-12 col-md-4">
              <p>All content ©{(new Date().getFullYear())} Gregory Parrish</p>
            </div>
            <div className="col-sm-12 col-md-4">
              <a href="https://github.com/greggparrish" className="github" target="_blank" rel="noopener noreferrer">
                <img src="/images/github.svg" alt="Github" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
