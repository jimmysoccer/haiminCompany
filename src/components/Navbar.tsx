import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { NAV_MENU } from '@/constants/navBar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isSelected = (path: string) => location.pathname.startsWith(path);

  return (
    <nav className='fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            <Link
              to={NAV_MENU.home.path}
              className='text-2xl font-bold text-[#0A2647]'
            >
              上海海民科技有限公司
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <Link
              to={NAV_MENU.home.path}
              className={`text-gray-700 transition-colors ${
                isSelected(NAV_MENU.home.path)
                  ? 'text-[#144272] font-bold'
                  : 'hover:text-[#2C74B3]'
              }`}
            >
              {NAV_MENU.home.name}
            </Link>
            <Link
              to={NAV_MENU.about.path}
              className={`text-gray-700 transition-colors ${
                isSelected(NAV_MENU.about.path)
                  ? 'text-[#144272] font-bold'
                  : 'hover:text-[#2C74B3]'
              }`}
            >
              {NAV_MENU.about.name}
            </Link>
            <Link
              to={NAV_MENU.projects.path}
              className={`text-gray-700 transition-colors ${
                isSelected(NAV_MENU.projects.path)
                  ? 'text-[#144272] font-bold'
                  : 'hover:text-[#2C74B3]'
              }`}
            >
              {NAV_MENU.projects.name}
            </Link>
            <Link
              to={NAV_MENU.contact.path}
              className={`text-gray-700 transition-colors ${
                isSelected(NAV_MENU.contact.path)
                  ? 'text-[#144272] font-bold'
                  : 'hover:text-[#2C74B3]'
              }`}
            >
              {NAV_MENU.contact.name}
            </Link>
            {/* <Button className='bg-[#0A2647] hover:bg-[#144272] transition-colors'>
              登录
            </Button> */}
          </div>

          {/* Mobile Navigation Button */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-700 hover:text-[#2C74B3]'
            >
              <Menu className='h-6 w-6' />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              <Link
                to={NAV_MENU.home.path}
                className={`block px-3 py-2 text-gray-700 transition-colors ${
                  isSelected(NAV_MENU.home.path)
                    ? 'text-[#144272]'
                    : 'hover:text-[#2C74B3]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {NAV_MENU.home.name}
              </Link>
              <Link
                to={NAV_MENU.about.path}
                className={`block px-3 py-2 text-gray-700 transition-colors ${
                  isSelected(NAV_MENU.about.path)
                    ? 'text-[#144272]'
                    : 'hover:text-[#2C74B3]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {NAV_MENU.about.name}
              </Link>
              <Link
                to={NAV_MENU.projects.path}
                className={`block px-3 py-2 text-gray-700 transition-colors ${
                  isSelected(NAV_MENU.projects.path)
                    ? 'text-[#144272]'
                    : 'hover:text-[#2C74B3]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {NAV_MENU.projects.name}
              </Link>
              <Link
                to={NAV_MENU.contact.path}
                className={`block px-3 py-2 text-gray-700 transition-colors ${
                  isSelected(NAV_MENU.contact.path)
                    ? 'text-[#144272]'
                    : 'hover:text-[#2C74B3]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {NAV_MENU.contact.name}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
