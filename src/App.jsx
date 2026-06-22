import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import PrivateHeader from './components/headers/PrivateHeader'
import PrivateFooter from './components/footers/PrivateFooter'
import Feed from './components/feed/Feed'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PrivateHeader/>
      <Feed/>
      <PrivateFooter/>
    </>
  )
}

export default App
