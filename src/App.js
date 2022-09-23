import { useEffect, useState } from 'react';
import Card, { CreateCard } from './components/Card';
import Footer from './components/Footer';
import './styles/App.css';
function App() {
  const [cards, setCards] = useState([]);
  const createCards = () => {
    const colors = ['red', 'blue', 'green', 'grey'];
    const shapez = ['square', 'circle', 'triangle'];
    let newCards = [];
    while (newCards.length !== 12) {
      let copyColors = [...colors];
      let copyShapez = [...shapez];
      let cardColor = copyColors.splice(Math.floor(Math.random() * copyColors.length), 1)[0];
      let shapeColor = copyColors.splice(Math.floor(Math.random() * copyColors.length), 1)[0];
      let shape = copyShapez.splice(Math.floor(Math.random() * copyShapez.length), 1)[0];
      let obj = { cardBackground: cardColor, shapeBackground: shapeColor, shape: shape };
      if (isInArray(newCards, obj)) continue;
      else {
        newCards.push(new CreateCard(obj));
      }
    }
    return newCards;
  };
  const isInArray = (array, obj) => {
    for (let i = 0; i < array.length; i++) {
      console.log(JSON.stringify(array[i].appearance) === JSON.stringify(obj));
      if (JSON.stringify(array[i].appearance) === JSON.stringify(obj)) return true;
    }
    return false;
  };
  useEffect(() => {
    let newCards = createCards();
    console.log(newCards);
    setCards(newCards);
  }, []);
  return (
    <div className="app">
      <header>
        <h1>Memory Game</h1>
      </header>
      <main>
        <div className="cardsContainer">
          {console.log(cards)}
          {cards.map(x => {
            return <Card key={x.id} card={x} />;
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
