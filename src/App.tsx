import React from 'react';
import './App.css';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Greet from './components/Greet';

function App() {
	return (
		<div className='App'>
			<Status status='success' />
			<Oscar>
				<Heading>Oscar goes to Leonardo Dicaprio!</Heading>
			</Oscar>
			<Greet
				name='Emilia'
				isLoggedIn={false}
			/>
		</div>
	);
}

export default App;
