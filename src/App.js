import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name' : 'kdj1',
  'birthday': '23431234',
  'gender' : 'man',
  'job': 'gradument'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name' : 'kdj2',
  'birthday': '23431234',
  'gender' : 'man',
  'job': 'gradument'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name' : 'kdj3',
  'birthday': '23431234',
  'gender' : 'man',
  'job': 'gradument'
}
]



function App() {
  return (
    <div>
     {
      customers.map(c => {
        return (
        <Customer  
          id={c.id}
          image={c.image}
          name= {c.name}
          birthday= {c.birthday}
          gender={c.gender}
          job={c.job}

        />
        )}
        ) 
     }
    </div> 
  );
}

export default App;
