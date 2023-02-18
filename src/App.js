import NavBar from "./Components/NavBar/NavBar";
import './app.css'
import Content from "./Components/Content/Content";
import Banner from "./Components/Banner/Banner"
import {action, comedy, documentary, horror, originals, romantic, trending} from './urls'

function App() {
  return (
    <div>
    <Banner/>
    <NavBar/>
    <Content url={originals} title = 'Netflix Orginals'/>
    <Content url={trending} title = 'Trending'/>
    <Content url={action} title = 'Action'/>
    <Content url={comedy} title = 'Comedy'/>
    <Content url={horror} title = 'Horror'/>
    <Content url={romantic} title = 'Romantic'/>
    <Content url={documentary} title = 'Documentary'/>   
    </div>
  );
}

export default App;
