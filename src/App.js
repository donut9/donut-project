import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Functions } from './components/Functions';
import { Projects } from './components/Projects';
import { GetStarted } from './components/GetStarted';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Functions />
      <Projects />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
