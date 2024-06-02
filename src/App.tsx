import React from 'react';
import BadgeForm from './components/BadgeForm';
import BadgeList from './components/BadgeList';

const App: React.FC = () => (
  <div>
    <h1>Open Badge v3</h1>
    <BadgeForm />
    <BadgeList />
  </div>
);

export default App;
