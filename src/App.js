import React, { Component } from 'react';

import Cats from './container/list';
import CatDetail from './container/catDetail';

class App extends Component {
  render() {
    return (
      <>
     <Cats/>
     <CatDetail/>
     </>
    );
  }
}

export default App;
