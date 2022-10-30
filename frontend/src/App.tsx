import React from 'react';
import CreateJobPost from './components/Post/CreateJobPost';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import SignUp from './components/Form/SignUp';
import HomePage from './components/Home/HomePage';

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
          <Route path='/' exact component={HomePage} />
          <Route path='/create-job' exact component={CreateJobPost} />
          <Route path='/register' exact component={SignUp} />
        </Switch>
      </Router>{' '}
    </div>
  );
}

export default App;
// "react-router-dom": "^5.3.4",
