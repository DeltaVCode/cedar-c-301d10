import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import SelectedBeast from './components/selectedBeast';
import beastData from './data/data.json';

function App() {
  let theme = 'dark';

  return (
    <div className="App">
      <Header theme={theme} />
      <Main beasts={beastData} />
      <Footer theme={theme} />
      <SelectedBeast />
    </div>
  );
}

export default App;
