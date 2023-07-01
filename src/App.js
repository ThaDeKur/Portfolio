import './App.css';

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
   </div>
  );
}

export default App;