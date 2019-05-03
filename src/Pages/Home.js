import React, { Component } from 'react';
import Clients from '../Data/Clients.json';

import ClientCard from '../Components/ClientCard';

class Home extends Component {
  render() {
    return (
      <div id='home'>
        {Clients.client.map((client) => (
          <ClientCard client={client} key={client.id}/>
        ))} />
      </div>
    );
  }
}
export default Home;
