import React from 'react'
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'
import './App.css'
import Header from './components/Header'
import Container from './components/Container'
import Footer from './components/Footer'

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <Container/>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
