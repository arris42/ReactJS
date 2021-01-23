// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
	return (
		<div className="App">
			{/* <Message /> */}
			{/* <Counter /> */}
			{/* <FunctionClick /> */}
			{/* <ClassClick /> */}
			{/* <EventBind /> */}
			<ParentComponent />

			{/* <Greet name='Bruce' heroName='Batman'>
				<p>This is children props</p>
			</Greet>
			<Greet name='Alice' heroName='Superman'>
				<button>Action</button>
			</Greet> */}
			{/* <Greet name='Barad' heroName='Wonder woman' /> */}

			{/* <Welcome name='Bruce' heroName='Batman'></Welcome> */}
			{/* <Welcome name='Alice' heroName='Superman'></Welcome> */}
			{/* <Welcome name='Barad' heroName='Wonder woman' /> */}

			{/* <Hello /> */}
		</div>
	);
}

export default App;
