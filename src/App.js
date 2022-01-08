import { GlobalHotKeys } from 'react-hotkeys';
import { pop } from '.';

function App() {
  const keyMap = {
    SPELL: 'c h a n g w o r k s',
  };

  const handlers = {
    SPELL: (e) => {
      pop(5000);
    },
  };

  return (
    <div className="App">
      <GlobalHotKeys keyMap={keyMap} handlers={handlers} />
      <h1>Type "changworks"</h1>
    </div>
  );
}

export default App;
