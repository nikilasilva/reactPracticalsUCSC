// import logo from './logo.svg';
import './App.css';
// import ReactDOM from 'react-dom';
import Greeting from './pages/helloworld';
import Counter from './pages/counter';
import Toggle from './pages/toggle';
import Timer from './pages/timer';
import TodoList from './pages/todolist';
import CardList from './pages/cardList';
import Form from './pages/form';
import UserProfile from './pages/userProfile';
import ConditionalMessage from './pages/conditionalMessage';
import ClickTracker from './pages/clickTracker';

const todoItems = ['Lear React', 'Build a project', 'Go for walk', 'Do some exercises', 'Join a music class', 'Read a novel']

const cards = [
  {title: 'Card 1', content: 'This is the content of Card 1'},
  {title: 'Card 2', content: 'This is the content of Card 2'},
  {title: 'Card 3', content: 'This is the content of Card 3'},
];

const user = {
  name: 'Ashley Hunter',
  age: 23,
  email: 'ashleyhunter@gmail.com'
};


function App() {
  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
      <p>This is my first React application.</p>
      <Greeting/>
      <Counter/>
      <Toggle/>
      <Timer/>
      <TodoList items={todoItems}/>
      <CardList cards={cards}/>
      <Form/>
      <UserProfile name={user.name} age={user.age} email={user.email}/>
      <ConditionalMessage isLoggedIn={true} />
      <ConditionalMessage isLoggedIn={false} />
      <ClickTracker />
    </div>
  
  );
}

export default App;
