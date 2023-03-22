import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import AddressHistory from './pages/AddressHistory'
import Characters from './pages/Characters'
import Comics from './pages/Comics'
import MapsPage from './pages/Maps'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Comics />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/maps" element={<MapsPage />} />
        <Route path="/address" element={<AddressHistory />} />
      </Route>
    </Routes>
  )
}
