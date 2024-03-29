import {Routes, Route} from 'react-router-dom';
import './assets/css/layout.css';
import Header from './components/Header';
import Home from './components/Home';
import Dates from './components/Dates';
import Newdates from './components/New_dates';
import Footer from './components/Footer';
import SignIn from './components/LogIn';
import SignUp from './components/SignUp';

export default function App() {
	return (
		<div className="App">
			<Header />
			<div className='main'>
				<div className='container'>
				<Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Dates' element={<Dates/>} />
          <Route path='/New-Item' element={<Newdates/>} />
					<Route path='/login' element={<SignIn/>} />
					<Route path='/sign-up' element={<SignUp/>} />
        </Routes>
				</div>
			</div>
			<Footer />
		</div>
	);
}
