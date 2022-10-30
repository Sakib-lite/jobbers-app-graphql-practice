import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import CreateJob from './pages/create-job/CreateJob';
import Register from './pages/register/Register';

function App() {
  return (
    <div className='w-full h-full bg-gray-200'>
      <Router>
        {' '}
        <div className='space-x-5'>
          {' '}
          <Link to='/create-job'>Create Job</Link>{' '}
          <Link to='/register'>Register</Link>
          <Link to='/'>Home</Link>
        </div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/create-job' exact component={CreateJob} />
          <Route path='/register' exact component={Register} />
        </Switch>
      </Router>{' '}
    </div>
  );
}

export default App;
// "react-router-dom": "^5.3.4",
