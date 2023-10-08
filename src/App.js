import './App.css';
import ColorPicker from './components/ColorPicker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'purple',
    'orange',
    'pink',
    'brown',
    'teal',
    'violet',
    'cyan',
    'lime',
    'maroon',
    'navy',
    'indigo',
  ];
  

  return (
    <div className="App">
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
