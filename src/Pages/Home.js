import React, { Component } from 'react';
import Clients from '../Data/Clients.json';

import ClientCard from '../Components/ClientCard';

class Home extends Component {
  render() {
    return (
      <div id='home'>
        {Clients.client.map((client, i) => (
          <ClientCard
            client={client}
            index={i}
            key={i}
          />
        ))}
      </div>
    );
  }
}
export default Home;
