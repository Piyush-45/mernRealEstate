import { BrowserRouter, Routes,Route } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/about" Component={About}/>
      <Route path="/sign-in" Component={SignIn}/>
      <Route path="/sign-up" Component={SignUp}/>
      <Route path="/profile" Component={Profile}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
