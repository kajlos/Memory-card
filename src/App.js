import { useState } from 'react';
import uniqid from 'uniqid';
import Card from './components/Card';
import Footer from './components/Footer';
import './styles/App.css';
function App() {
  const [cards, setCards] = useState([
    {
      id: 34,
      appearance: { cardBackground: 'red', shape: 'square', shapeBackground: 'blue' },
      isClicked: false,
    },
  ]);
  return (
    <div className="app">
      <header>
        <h1>Memory Game</h1>
      </header>
      <main>
        {cards.map(x => {
          return <Card key={x.id} card={x} />;
        })}
      </main>
      <Footer />
    </div>
  );
}

export default App;
