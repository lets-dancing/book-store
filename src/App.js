import './App.css';
import NavBar from './Components/NavBar/NavBar';
import BtnToTop from './addons/BtnToTop';
import SimpleForm from './addons/moduleChatBot/SimpleForm';

function App() {

  return (
    <div className='App'>
      <SimpleForm />
      <NavBar />
      <BtnToTop />
    </div>
  );
}
export default App;