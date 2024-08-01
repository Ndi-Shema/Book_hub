import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Book Hub</h1>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={BookList} />
            <Route path="/book/:id" component={BookDetail} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
