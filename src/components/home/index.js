import React from 'react';
import NavBar from '../navBar';
import Drawer from '../SwipeableDrawer';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDrawerOpen: false,
    }
  }

  render() {
    const toggleDrawer = isDrawerOpen => {
      this.setState({
        isDrawerOpen,
      });
    };

    return <div>
      <NavBar isDrawerOpen={this.state.isDrawerOpen} toggleDrawer={toggleDrawer} />
      <Drawer isDrawerOpen={this.state.isDrawerOpen} toggleDrawer={toggleDrawer} />
      Home
    </div>;
  }
}

export default Home;