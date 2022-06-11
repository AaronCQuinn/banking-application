import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiWebmoney } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { RiContactsLine } from 'react-icons/ri'
import { TbReportMoney } from 'react-icons/tb'
import { BsCreditCard2Front, BsBank, BsCalendarWeek } from 'react-icons/bs'
import { GrBitcoin } from 'react-icons/gr'

import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md dark:text-gray-200 dark:hover:text-block hover:bg-light-gray m-2';

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  }
  
  const links = [
    {
      title: "dashboard",
      links: [
        { 
          name: "overview",
          icon: <RiContactsLine />
        },
      ],
    },
    {
      title: "banking",
      links: [
        {
          name: "accounts",
          icon: <BsBank />
        }
      ]
    },
    {
      title: "credit",
      links: [
        {
        name: "Credit Cards",
        icon: <BsCreditCard2Front />
        }
      ]
    },
    {
      title: "crypto",
      links: [
        {
        name: "listings",
        icon: <GrBitcoin />
        },
        {
        name: "holdings",
        
        icon: <TbReportMoney />,
        },
      ]
    },
    {
      title: "finance Tools",
      links: [
        {
        name: "calendar",
        icon: <BsCalendarWeek />
        },
      ]
    }
  ]


  return (
    /* overflow-auto adds a scrollbar to an element only in the event the content overflows the bounds of the element */
    <div className='ml-3 h-screen md:overflow-hidden md:hover:overflow-auto overflow-auto pb-10'>
      {activeMenu && 
      (<>
      <div className="flex justify-between items-center">
        <Link to='/' onClick={() => {setActiveMenu(false)}} className='items-center gap-3 ml-3 mt-4 flex text-2xl font-extrabold tracking-tight dark:text-white text-slate-900'>
          <SiWebmoney /> <span>Bank Name</span>
        </Link>
        <TooltipComponent content='Menu' position='BottomCenter'>
          <button type='button' className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}>
            <MdOutlineCancel />
          </button>
        </TooltipComponent>
      </div>

      <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                    onClick={() => handleCloseSideBar}
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar