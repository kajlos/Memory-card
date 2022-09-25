import { useEffect, useState } from 'react';
import Card, { CreateCard } from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
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
      if (JSON.stringify(array[i].appearance) === JSON.stringify(obj)) return true;
    }
    return false;
  };
  useEffect(() => {
    let newCards = createCards();
    console.log(newCards);
    setCards(newCards);
  }, []);
  const shuffleArray = array => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  const handleClick = id => {
    let object = cards.find(val => val.id === id);
    console.log(object);
    if (object.isClicked === true) {
      console.log('false');
    } else {
      console.log('true');
      let newCards = cards.map(x => {
        if (x.id !== id) return x;
        else {
          let obj = { ...x, isClicked: true };
          return obj;
        }
      });
      let shuffledCards = shuffleArray(newCards);
      setCards(shuffledCards);
    }
  };
  return (
    <div className="app">
      <Header />
      <main>
        <div className="cardsContainer">
          {cards.map(x => {
            return <Card key={x.id} card={x} handleClick={handleClick} />;
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
