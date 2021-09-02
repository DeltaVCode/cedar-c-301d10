import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import beastData from './data/data.json';

function App() {
  let theme = 'dark';

  return (
    <div className="App">
      <Header theme={theme} />
      <Main beasts={beastData} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
