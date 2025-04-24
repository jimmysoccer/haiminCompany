import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            <Link to='/' className='text-2xl font-bold text-[#0A2647]'>
              上海海民科技有限公司
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <Link
              to='/'
              className='text-gray-700 hover:text-[#2C74B3] transition-colors'
            >
              首页
            </Link>
            <Link
              to='/about'
              className='text-gray-700 hover:text-[#2C74B3] transition-colors'
            >
              关于我们
            </Link>
            <Link
              to='/products'
              className='text-gray-700 hover:text-[#2C74B3] transition-colors'
            >
              产品中心
            </Link>
            <Link
              to='/contact'
              className='text-gray-700 hover:text-[#2C74B3] transition-colors'
            >
              联系我们
            </Link>
            <Button className='bg-[#0A2647] hover:bg-[#144272] transition-colors'>
              登录
            </Button>
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
                to='/'
                className='block px-3 py-2 text-gray-700 hover:text-[#2C74B3] transition-colors'
                onClick={() => setIsOpen(false)}
              >
                首页
              </Link>
              <Link
                to='/about'
                className='block px-3 py-2 text-gray-700 hover:text-[#2C74B3] transition-colors'
                onClick={() => setIsOpen(false)}
              >
                关于我们
              </Link>
              <Link
                to='/products'
                className='block px-3 py-2 text-gray-700 hover:text-[#2C74B3] transition-colors'
                onClick={() => setIsOpen(false)}
              >
                产品中心
              </Link>
              <Link
                to='/contact'
                className='block px-3 py-2 text-gray-700 hover:text-[#2C74B3] transition-colors'
                onClick={() => setIsOpen(false)}
              >
                联系我们
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
