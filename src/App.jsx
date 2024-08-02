import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Play, { getData } from './pages/Play'
import Write from './pages/Write'
import PlayLayout from './layouts/PlayLayout'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      // Home Path
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='play'>
          <Route index element={<Play />} loader={getData} />
        </Route>
        <Route path='write'>
          <Route index element={<Write />} />


        </Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
