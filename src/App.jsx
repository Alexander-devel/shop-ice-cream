import { Cards } from './components/cards/Cards'

const App = () => {
  const cards = [{
    id: 2523353,
    text: 'Snow Tender Ice Cream',
    price: '$410.00'
  },
  {
    id: 2523245,
    text: 'Snow Tender Ice Cream',
    price: '$391.00'
  },
  {
    id: 2587656,
    text: 'Snow Tender Ice Cream',
    price: '$501.00'
  },
  {
    id: 5466587,
    text: 'Snow Tender Ice Cream',
    price: '$726.00'
  },
  {
    id: 3546765,
    text: 'Snow Tender Ice Cream',
    price: '$111.00'
  },
  {
    id: 8796753,
    text: 'Snow Tender Ice Cream',
    price: '$243.00'
  }]

  return (
    <div className="App">
        <Cards cards={cards} />
    </div>
  );
}

export default App;
