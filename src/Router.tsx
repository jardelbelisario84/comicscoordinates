import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import AddressHistory from './pages/AddressHistory'
import Characters from './pages/Characters'
import Comics from './pages/Comics'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Comics />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/maps" element={<Characters />} />
        <Route path="/address" element={<AddressHistory />} />
      </Route>
    </Routes>
  )
}
