import './App.css';

import PageFooter from './PageFooter/PageFooter';
import PageContact from './PageContact/PageContact';
import PageProjects from './PageProjects/PageProjects';
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
    {PageProjects()}
    {PageContact()}
    {PageFooter()}
   </div>
  );
}

export default App;