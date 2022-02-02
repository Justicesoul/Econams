import './App.scss';
import './assets/styles/global.scss';
import Footer from './components/parts/Footer/Footer';
import Header from './components/parts/Header/Header';
import Main from './components/parts/Main/Main';

const App = () => (
  <div className="App">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
