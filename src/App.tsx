import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
	const personName = {
		firstName: 'Emilia',
		lastName: 'Kożuch',
	};

	const personsArr = [
		{
			first: 'Bruce',
			last: 'Wayne',
		},
		{
			first: 'Clark',
			last: 'Kent',
		},
		{
			first: 'Princess',
			last: 'Diana',
		},
	];

	return (
		<div className='App'>
			<Greet
				name='Emilia'
				messageCount={20}
				isLoggedIn={false}
			/>
			<Person name={personName} />
			<PersonList persons={personsArr} />
		</div>
	);
}

export default App;
