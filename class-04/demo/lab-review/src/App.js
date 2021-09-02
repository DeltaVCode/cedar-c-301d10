import React from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import SelectedBeast from './components/selectedBeast';
import beastData from './data/data.json';

// Converted from function component to a class component
// by calling the function 'render' and putting it in a class that extends Component
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: true,
    };
  }

  render() {
    let theme = 'dark';

    return (
      <div className="App">
        <Header theme={theme} />
        <Main beasts={beastData} />
        <Footer theme={theme} />
        <SelectedBeast
          show={this.state.showModal}
        />
      </div>
    );
  }
}

export default App;
