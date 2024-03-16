import './App.css';
import LeftDiv from'./components/LeftDiv';
import RighttDiv from'./components/RightDiv';
import RightContent from './components/RightContent';

function App() {
  
  return (
    <>
      <div className='Main_Page'>
          <LeftDiv className='left' />
          <RighttDiv className='right'/>
      </div>
    </>
  )
}

export default App
