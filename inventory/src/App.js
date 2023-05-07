import './App.css';
import Info from './info';

function App() {
  return (
    <div className="App">
      <p>Bare bones app</p>
      <Info />
      <AddItem />
    </div>  
  );
}



function AddItem() {
  const value = 'default';

  return (
    <form>
      <label for='text-form'>Type something: </label>
      <input type='text' placeholder={value} id='text-form'/>
    </form>
  )
}

export default App;
