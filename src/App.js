import './App.css';
import PageSkills from './PageSkills/PageSkills';
import PageHome from './Home/PageHome';
import PageNavbar from './Navbar/PageNavbar';

function App() {
  return (
   <div>
    {PageNavbar()}
    {PageHome()}
    {PageSkills()}
   </div>
  );
}

export default App;