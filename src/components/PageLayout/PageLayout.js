import { Route } from 'react-router-dom'
import HomePage from '../HomePage'
import ServicePage from '../ServicePage'
import ProductPage from '../ProductPage'


export default function PageLayout () {
  return (
    <div>
      <Route
        exact
        path='/'
        render={() => (<HomePage />)}
      />
      <Route
        exact
        path='/service'
        render={() => (<ServicePage />)}
      />

      <Route
        exact
        path='/product'
        render={() => (<ProductPage />)}
      />

    </div>
  )
}