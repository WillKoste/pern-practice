import React from 'react';
import './App.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/screens/home/Home';
import Cart from './components/screens/cart/Cart';
import Login from './components/screens/login/Login';
import Register from './components/screens/register/Register';
import Product from './components/screens/product/Product';
import NotFound from './components/layout/NotFound';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<div>
					<Navbar />
					<main className='py-3'>
						<div className='container'>
							<Switch>
								<Route exact path='/' component={Home} />
								<Route exact path='/cart' component={Cart} />
								<Route exact path='/login' component={Login} />
								<Route exact path='/register' component={Register} />
								<Route exact path='/products/:productId' component={Product} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</main>
					<Footer />
				</div>
			</Router>
		</Provider>
	);
};

export default App;
