import './App.css'
import './components/Header.jsx';
import Header from './components/Header';
import Registration from './components/Registration.jsx';
import Footer from './components/Footer.jsx';
function App() {

  const y=[1234,2026];
  const c={name:"Google",location:"Banglore",year:"1968"};
  return (
    <div>
      <Header title="My first react app"/>
      <Header title="studying props"/>
      <Footer year={y} company={c}/>
      
    </div>
  )
}

export default App
