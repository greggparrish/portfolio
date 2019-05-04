import React, {Component} from 'react'

class ClientCard extends Component {
  render() {
    return (
      <section className={(this.props.index & 1 ) ? 'dark' : 'light'} id={this.props.client.slug} style={{backgroundImage: `url('images/clients/${this.props.client.slug}_bg.jpg')`}}>
        <div className='container client-group'>
            <h2>{this.props.client.name}</h2>
            <p className="elevator">{this.props.client.elevator}</p>
          <div className='row client-imgs'>
            <div className='col-sm-12 col-md-6 client-feature'>
              <img src={'/images/clients/'+this.props.client.slug+'_home_1.jpg'} alt=''/>
            </div>
            <div className='col-sm client-grid'>
              <div className='col-sm'>
               <img src={'/images/clients/logos/'+this.props.client.slug+'.png'} alt=''/>
              </div>
              <div className='col-sm'>
                <img src={'/images/clients/'+this.props.client.slug+'_home_2.jpg'} alt=''/>
              </div>
            </div>
            <div className='col-sm client-grid'>
              <div className='col-sm'>
                <img src={'/images/clients/'+this.props.client.slug+'_home_3.jpg'} alt=''/>
              </div>
              <div className='col-sm'>
                <img src={'/images/clients/'+this.props.client.slug+'_home_4.jpg'} alt=''/>
              </div>
            </div>
          </div>
          <div className="col xs-12 client-text">
            <div className="col-xs-12 stack">
              STACK: {this.props.client.stack.join(' • ') }
            </div>
          <div className='row'>
            <div className="col col-sm-12 col-md-8">
              <p className="description">{this.props.client.description}</p>
            </div>
            <div className="col-sm-12 col-md-4">
              <h3>features</h3>
              <ul className="list-unstyled features">
                {this.props.client.features.map((f, i) => (<li key={i}>{f}</li>))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col xs-12 sitelink">
          <a href="http://teachrock.org" className="site-button" target="_blank" rel="noopener noreferrer">PRODUCTION SITE</a>
        </div>
      </div>
    </section>
    );
  }
}
export default ClientCard;
