import './App.css';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  let theme = 'dark';

  return (
    <div className="App">
      <Header theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
