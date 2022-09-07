import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

// Todo en React empieza con un Functional Component
// El standard es trabajar con Functional Component
function App() {
  // document.createElement....
  //return <FirstApp title="New York City" subTitle="USA" />;
  return <CounterApp value={5} />;
}

export default App;
