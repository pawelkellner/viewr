import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SectionPhotographers from '../SectionPhotographers/SectionPhotographers';
import './App.css';

function App() {
  return (
    <div className="content__wrapper">
      <Navigation />
      <Header />
      <SectionPhotographers />
    </div>
  );
}

export default App;
