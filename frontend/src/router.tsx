import {createBrowserRouter} from 'react-router-dom'
import Layout from './pages/Layout'
import Videos from './pages/Videos'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: 'videos',
        element: <Videos/>
      }
    ]
  }
])