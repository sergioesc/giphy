import React from'react'
import {Container, Section} from './components/Secciones';
import ListOfGifs from './components/ListOfGifs/ListOfGifs'
import AppTitle from './components/AppTitle/AppTitle'
import { Link, Route } from 'wouter'
import Home from './pages/Home/Home'
function App() {
  return (
    <Container className='App'>
      <Link to='/gifs/home'>
         <div>
            <AppTitle />
         </div>
      </Link>
      <Route
        component = {Home}
        path = "/gifs/home"  
      />
      <Section className='App-Content'> 
          <Route 
            component={ListOfGifs} 
            path="/gifs/:keyword" 
          />
      </Section>
      
    </Container>
  )
}

export default App;

/*<button onClick={() => setKeyword('paraguay')}>Cambiar keyword</button>
<ContentGif>
<ListOfGifs keyword={keyword}/>
</ContentGif>*/