import './App.css';
import Container from './components/props/Container';

function App() {
	return (
		<div className='App'>
			<Container styles={{ border: '1px solid black', padding: '1rem', borderRadius: '.7em' }} />
		</div>
	);
}

export default App;
