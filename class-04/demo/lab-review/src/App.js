import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';

function App() {
  let theme = 'dark';

  return (
    <div className="App">
      <Header theme={theme} />
      <Main />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
