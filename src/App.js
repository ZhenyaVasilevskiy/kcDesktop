import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Empty from './components/emptyScreen/Empty';
function App() {
  return (
    <div className="App">
     <Header></Header>
     <Empty></Empty>
    </div>
  );
}

export default App;
