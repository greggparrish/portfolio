import React, {Component} from 'react'

class ClientCard extends Component {
  render() {
    return (
      <section classNameName='light module' id={this.props.client.slug} style={{backgroundImage: `url('images/clients/${this.props.client.slug}_bg.jpg')`}}>
        <div className='container client-group'>
            <h2>{this.props.client.name}</h2>
            <p className="elevator">{this.props.client.elevator}</p>
          <div className='row'>
            <div className='col-sm-12 col-md-6'>
              <img src={'/images/clients/'+this.props.client.slug+'_home_1.jpg'} alt='Coadria home 1' />
            </div>
            <div className='col-sm'>
              <div className='col-sm'>
               <img src={'/images/clients/logos/'+this.props.client.slug+'.png'} alt='Coadria home 1' />
              </div>
              <div className='col-sm'>
                <img src={'/images/clients/'+this.props.client.slug+'_home_2.jpg'} alt='Coadria home 2' />
              </div>
            </div>
            <div className='col-sm'>
              <div className='col-sm'>
                <img src={'/images/clients/'+this.props.client.slug+'_home_3.jpg'} alt='Coadria home 3' />
              </div>
              <div className='col-sm'>
                <img src={'/images/clients/'+this.props.client.slug+'_home_4.jpg'} alt='Coadria home 1' />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ClientCard;
