import './App.css';
import './loader.css'
import NavBar from './Components/NavBar/NavBar';
// import BtnToTop from './addons/BtnToTop';
// import SimpleForm from './addons/moduleChatBot/SimpleForm';
// import { useState } from 'react';

function App() {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='App'>
      {/* <button className='btnChatBot' onClick={() => setIsOpen(!isOpen)}><img src={'./gif-tg.gif'} alt='chatbot'/></button>
      <SimpleForm isOpen={isOpen} setIsOpen={setIsOpen}/> */}
      <NavBar />
      {/* <BtnToTop /> */}
    </div>
  );
}
export default App;