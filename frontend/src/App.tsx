import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import CreateJob from './pages/create-job/CreateJob';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import JobDetails from './components/Job/JobDetails';
import ComapnyDetails from './components/Company/CompanyDetails';
import AllCompanies from './components/Company/AllCompany';

function App() {
  return (
    <div className='w-full h-full bg-gray-200'>
      <Router>
        {' '}
        <div className='space-x-5'>
          {' '}
          <Link to='/'>Home</Link>
          <Link to='/create-job'>Create Job</Link>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
          <Link to='/companies'>Companies</Link>
        </div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/create-job' exact component={CreateJob} />
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={Login} />
          <Route path='/jobs/:id' component={JobDetails} />
          <Route path='/companies' exact component={AllCompanies} />

          <Route path='/companies/:id' component={ComapnyDetails} />
        </Switch>
      </Router>{' '}
    </div>
  );
}

export default App;
// "react-router-dom": "^5.3.4",
