
import './styles/App.css';
import Header from './components/partials/Header.jsx';
import data from '../data.json';
import Blog from './components/partials/Blog';
import MainScreen from './components/partials/MainScreen';
import Aside from './components/partials/Aside';
import Footer from './components/partials/Footer';




function App() {
  return (
    <div className="blog-body">
      <Header />
      <MainScreen data={data[0]} />
      <div className="content-part">
        <Blog data={data} />
        <Aside data={data} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
