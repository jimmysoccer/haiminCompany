import { Building, Users, Rocket, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    {
      icon: <Building className='w-8 h-8 text-[#2C74B3]' />,
      title: '行业深耕年限',
      value: '5+',
      description: '自2020年起持续提供卓越服务',
    },
    {
      icon: <Users className='w-8 h-8 text-[#2C74B3]' />,
      title: '合作客户',
      value: '20+',
      description: '获得行业领军企业信赖',
    },
    {
      icon: <Rocket className='w-8 h-8 text-[#2C74B3]' />,
      title: '成功交付项目',
      value: '20+',
      description: '专业实施保障',
    },
    {
      icon: <Award className='w-8 h-8 text-[#2C74B3]' />,
      title: '技术专家团队',
      value: '25+',
      description: '资深工程师及认证专家',
    },
  ];

  return (
    <div className='min-h-screen pt-24 pb-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-[#0A2647] mb-6'>
            上海海民数据科技有限公司
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            专注IDC数据中心建设与智能化升级的专业服务商
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
          {stats.map((stat, index) => (
            <Card
              key={index}
              className='text-center p-6 hover:shadow-lg transition-shadow'
            >
              <CardContent className='pt-6'>
                <div className='flex justify-center mb-4'>{stat.icon}</div>
                <h3 className='text-3xl font-bold text-[#2C74B3] mb-2'>
                  {stat.value}
                </h3>
                <p className='font-semibold text-gray-800 mb-2'>{stat.title}</p>
                <p className='text-gray-600'>{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-3xl font-bold text-[#0A2647] mb-6'>技术使命</h2>
            <p className='text-gray-600'>
              我们以构建面向未来的数字化基础设施为己任,通过创新的IDC建设标准、智能化的管理系统
              和定制化的软件开发服务,帮助客户实现数据资产的价值最大化。从数据中心的规划设计、
              建设实施到后期运维,我们提供全生命周期的专业技术支持,确保每一个项目都成为行业标杆。
            </p>
          </div>
          <div>
            <h2 className='text-3xl font-bold text-[#0A2647] mb-6'>核心优势</h2>
            <ul className='space-y-4 text-gray-600'>
              <li className='flex items-center gap-3'>
                <div className='h-2 w-2 bg-[#2C74B3] rounded-full' />
                <span>
                  专业团队——拥有资深数据中心运维专家及海外技术团队,提供高可靠服务
                </span>
              </li>
              <li className='flex items-center gap-3'>
                <div className='h-2 w-2 bg-[#2C74B3] rounded-full' />
                <span>
                  丰富经验——成功交付工商银行、平安银行、深圳大学附属医院等重大项目
                </span>
              </li>
              <li className='flex items-center gap-3'>
                <div className='h-2 w-2 bg-[#2C74B3] rounded-full' />
                <span>全周期服务：从规划设计到建设运维,提供一站式解决方案</span>
              </li>
              <li className='flex items-center gap-3'>
                <div className='h-2 w-2 bg-[#2C74B3] rounded-full' />
                <span>
                  诚信服务——以技术立身,以客户需求为核心,打造务实高效的解决方案
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
