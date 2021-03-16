import { Route, BrowserRouter as Router } from "react-router-dom";
import MainPage from "./components/page/MainPage";
import Secondary from "./components/page/Secondary";
import './style.scss'

function App() {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
      <Route path='/secondary/:category' component = {Secondary}/>
    </Router>
  );
}

export default App;
