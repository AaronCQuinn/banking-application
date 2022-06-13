import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { useStateContext } from './contexts/ContextProvider';
import Dashboard from './pages/Dashboard';
import './App.css';
import Landing from './pages/Landing';

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
        <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
              {/* Routing */}
              <div>
                <Routes>
                  <Route path='/' element={<Landing />} />
                </Routes>
              </div>
        </div>
        </BrowserRouter>
    </div>
  )
}

export default App;


// {/* <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}> 
// {/* Parent element positioned relative, so that this fixed element is positioned relative to that.*/}
//   <TooltipComponent content="Settings" position="TopCenter">
//     <button type='button' className='text-xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white rounded-full' style={{background: 'blue'}}> 
//       <FiSettings />
//     </button>
//   </TooltipComponent>
// </div>

// {/* Sidebar */}
// {activeMenu ? 
// (
//   <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
//     <Sidebar />
//   </div>
// ) :
// (
//   <div className='w-0 dark:bg-secondary-dark-bg'>
//     <Sidebar />
//   </div>
// )}

// {/* Navbar */}
// <div className={`dark:bg-main-bg bg-main-bg w-full min-h-screen ${activeMenu ? 'md:ml-72' : 'flex-2' } `}>
//   <div className="fixed md-static bg-main-bg w-full dark:bg-main-dark-bg navbar">
//     <Navbar />
//   </div> */}