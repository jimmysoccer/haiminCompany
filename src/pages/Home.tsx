import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Database,
  Code,
  Globe,
  Rocket,
  Server,
  ChartBar,
} from 'lucide-react';
import { PROJECTS } from '@/constants/projects';
import { NAV_MENU } from '@/constants/navBar';

const Home = () => {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-[#0A2647] to-[#205295] text-white pt-24 pb-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6 animate-fade-in'>
              赋能数据基础设施转型
            </h1>
            <p className='text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto'>
              专家级数据库解决方案 | 定制化软件开发 | 无忧数据迁移服务
            </p>
            <Button
              asChild
              className='bg-white text-[#0A2647] hover:bg-gray-100 px-8 py-6 text-lg'
            >
              <Link to='/contact'>
                立即启程 <ChevronRight className='ml-2 h-5 w-5' />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-center mb-12 text-[#0A2647]'>
            我们的核心服务
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Database Solutions */}
            <div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
              <Database className='h-12 w-12 text-[#2C74B3] mb-4' />
              <h3 className='text-xl font-semibold mb-3 text-[#0A2647]'>
                数据库解决方案
              </h3>
              <p className='text-gray-600'>
                通过专家级数据库架构优化方案与专业管理服务，提升您的数据系统效能。
              </p>
            </div>

            {/* Software Development */}
            <div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
              <Code className='h-12 w-12 text-[#2C74B3] mb-4' />
              <h3 className='text-xl font-semibold mb-3 text-[#0A2647]'>
                软件开发
              </h3>
              <p className='text-gray-600'>
                量身定制企业级软件解决方案，精准匹配您的业务需求。
              </p>
            </div>

            {/* Data Migration */}
            <div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
              <Globe className='h-12 w-12 text-[#2C74B3] mb-4' />
              <h3 className='text-xl font-semibold mb-3 text-[#0A2647]'>
                数据迁移
              </h3>
              <p className='text-gray-600'>
                提供零数据丢失、业务零中断的无缝数据迁移服务。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-center mb-12 text-[#0A2647]'>
            精选项目
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Enterprise Database Suite */}
            {PROJECTS.slice(0, 3).map((project) => (
              <Card className='hover:shadow-lg transition-shadow'>
                <CardHeader>
                  <div className='flex justify-center mb-4'>
                    <img
                      src={project.details?.media?.images[0] || ''}
                      alt={project.title}
                      className='rounded-lg object-cover w-full max-h-80'
                    />
                  </div>
                  <CardTitle className='text-xl text-center text-[#0A2647]'>
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className='text-center'>
                  <p className='text-gray-600 mb-6'>{project.description}</p>
                  <Button asChild>
                    <Link to={`${NAV_MENU.projects.path}/${project.id}`}>
                      查看详情
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className='text-center mt-12'>
            <Button variant='outline' asChild size='lg'>
              <Link to={NAV_MENU.projects.path}>
                查看全部项目 <ChevronRight className='ml-2 h-5 w-5' />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
