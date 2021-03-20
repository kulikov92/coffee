import React from 'react';
import { Switch, Route} from 'react-router-dom'
import { CoffeeList } from './containers/CoffeeList'
import { CoffeeOrder } from './containers/CoffeeOrder'

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="page-content">
        <Switch>
          <Route exact path={'/'} component={CoffeeList}/>
          <Route exact path={'/order'} component={CoffeeOrder}/>
        </Switch>
      </div>
    </div>
  )
}

export default App
