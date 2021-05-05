import React from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './components/NavBar';
import { Route, useLocation } from 'react-router-dom';
import HomePage from './routes/HomePage';
import EventDetailedPage from './routes/EventDetailedPage';
import EventDashboard from './components/EventDashboard';
import EventForm from './components/EventForm';
import ModalManager from './components/modal/ModalManager';
import Test from './TestVideo';

function App() {
  const {key} = useLocation()
  return (
    <>
      <ModalManager />
      <Route exact path='/' component={HomePage} /> 
      <Route path={'/(.+)'} render={() => (
        <>
          <NavBar />
          <Container className='main'>
            <Route exact path='/events' component={EventDashboard} />    
            <Route exact path='/test' component={Test} />    
            <Route path='/events/:id' component={EventDetailedPage} />    
            <Route path={['/createEvent', '/manage/:id']} component={EventForm} key={key} />    
          </Container>
        </>
      )}
      />
    </>  
  );
}

export default App;

// function handleCreateFormOpen() {
//   setSelectedEvent(null);
//   setFormOpen(true)
// }