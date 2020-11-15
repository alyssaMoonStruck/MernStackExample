import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar'
import { Provider } from 'react-redux'
import store from './store'
import ItemModal from './components/ItemModal'
import { Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ShoppingList from './components/ShoppingList'

class App extends Component {
  render () {
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavbar />
      <Container>
      <ItemModal />
      <ShoppingList />
      </Container>
    </div>
    </Provider>
  );
}
}
export default App;
