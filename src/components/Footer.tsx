import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Copyright } from 'lucide-react';
import { ContactInfo } from '@/constants/contact';

const Footer = () => {
  return (
    <footer className='bg-[#0A2647] text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-xl font-semibold mb-4'>关于我们</h3>
            <p className='text-gray-300'>
              作为行业领先的技术服务商，我们专注于数据库解决方案、定制化软件开发及安全数据迁移服务。
            </p>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-4'>快速导航</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  首页
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  关于我们
                </Link>
              </li>
              <li>
                <Link
                  to='/products'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  产品中心
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-4'>联系方式</h3>
            <ul className='space-y-2'>
              <li className='flex items-center space-x-2'>
                <MapPin className='h-5 w-5' />
                <span className='text-gray-300'>{ContactInfo.address}</span>
              </li>
              <li className='flex items-center space-x-2'>
                <Phone className='h-5 w-5' />
                <span className='text-gray-300'>{ContactInfo.cellphone}</span>
              </li>
              <li className='flex items-center space-x-2'>
                <Mail className='h-5 w-5' />
                <span className='text-gray-300'>{ContactInfo.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-4'>关注我们</h3>
            <p className='text-gray-300 mb-4'>
              关注我们的社交媒体，获取最新技术动态与行业洞察。
            </p>
          </div>
        </div>

        <div className='mt-8 pt-8 border-t border-gray-700'>
          <div className='flex items-center justify-center space-x-2 text-gray-300'>
            <Copyright className='h-4 w-4' />
            <span>{new Date().getFullYear()} 上海海民科技有限公司</span>
          </div>
          <div className='flex items-center justify-center space-x-2 text-gray-300'>
            <span>沪ICP备2024076227号</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
