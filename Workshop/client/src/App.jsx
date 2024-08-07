import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './styles.css';
import UserSection from './components/user-section/UserSection';

function App() {

  return (
    <>
      <Header />
      <main className='main'>
            <UserSection />
      </main>
      <Footer />
    </>
  )
}

export default App
