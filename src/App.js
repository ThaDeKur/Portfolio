import './App.css';
import PageContact from './PageContact/PageContact';
import PageSkills from './PageSkills/PageSkills';
import AboutMe from './AboutMe/AboutMe';
import PageHome from './Home/PageHome';
import PageNavbar from './Navbar/PageNavbar';

function App() {
  return (
   <div>
    {PageNavbar()}
    {PageHome()}
    {AboutMe()}
    {PageSkills()}
    {PageContact()}
   </div>
  );
}

export default App;