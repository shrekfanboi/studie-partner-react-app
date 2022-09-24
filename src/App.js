import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import "./index.css"

function App() {
  return (
    <div>
      <Header/>
      <div className='container'>
        <SearchForm/>
      </div>
    </div>
  );
}

export default App;
