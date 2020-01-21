import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [{
  id: 1,
  image: 'https://placeimg.com/64/64/1',
  name: 'John',
  birthday: '19801111',
  gender: 'Male',
  job: 'developer'
},
{
  id: 2,
  image: 'https://placeimg.com/64/64/2',
  name: 'Anna',
  birthday: '19801111',
  gender: 'Female',
  job: 'developer'
},
{
  id: 3,
  image: 'https://placeimg.com/64/64/3',
  name: 'John',
  birthday: '19801111',
  gender: 'Male',
  job: 'developer'
}];

class App extends Component {
  render() {
    return (
      customers.map(customer => {
        return (
          <Customer 
            key = {customer.id} 
            id = {customer.id}
            image = {customer.image}
            name = {customer.name}
            birthday = {customer.birthday}
            gender = {customer.gender}
            job = {customer.job}
          />
        )
      })
    )
  }
}

export default App;
