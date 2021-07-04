import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import InputImage from './Components/InputImage'
import { Header } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <Header as='h1' style={{marginTop: '30px'}}>Image Search</Header>
      <InputImage/>
    </div>
  );
}

export default App;
