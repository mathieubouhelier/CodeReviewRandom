import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import RandomList from './components/RandomList';
import GoldBadgeList from './components/GoldBadgeList';
import SilverBadgeList from './components/SilverBadgeList';
import BronzeBadgeList from './components/BronzeBadgeList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={RandomList} exact />
        <Route path="/goldbadgelist" component={GoldBadgeList} />
        <Route path="/silverbadgelist" component={SilverBadgeList} />
        <Route path="/bronzebadgelist" component={BronzeBadgeList} />
      </Switch>
    </div>
  );
}

export default App;
