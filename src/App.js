import './App.css';
// import HomeTest01 from './components/HomeTest01'
// import HomeTest02 from './components/HomeTest02'
// import HomeTest03 from './components/HomeTest03'
import HomeTest05 from './components/HomeTest05'

function App() {

  return (
    <div>
      <header className='d-flex flex-wrap justify-content-center py-2 mb-4 border-bottom'>
        <div className='container'>
        <a 
        href='/'
        className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'
        >
          <span className='fs-4'>Green Academy</span>
        </a>
        </div>
      </header>
      <main>
      <HomeTest05 />
      </main>
      <footer></footer>
    </div>
  ); 
}
export default App;
