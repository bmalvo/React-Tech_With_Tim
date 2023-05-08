import './App.css';
import {PropTypes} from 'prop-types';
import Info from './info';

function App() {
  return (
    <div className="App">
      <p>Bare bones app</p>
      <Info/>
      <AddItem text="Pat" number={1}/>
      <AddItem text="Angela" number={2}/>
      <AddItem text="Camila" number={3}/>

    </div>  
  );
}



function AddItem({text, number = 4}) {
  const value = text;

  return (
    <form>
      <label for='text-form'>Type something: </label>
      <input type='text' placeholder={value} id='text-form'/>
      <p>{number}</p>
    </form>
  )
}
AddItem.defaultProps = {
  text : "noname",
  number : 0
};

AddItem.propTypes = {
  number : PropTypes.number,
  text : PropTypes.string,
}

export default App;
