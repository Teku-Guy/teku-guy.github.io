import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-between">
      <div>
        <Header />
      </div>
      <Footer />
    </div>
  );
}

export default App;
