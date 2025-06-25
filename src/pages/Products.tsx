import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { PROJECTS } from '@/constants/projects';
import { NAV_MENU } from '@/constants/navBar';

const Products = () => {
  return (
    <div className='min-h-screen pt-24 pb-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className='text-4xl font-bold mb-12 text-center text-[#0A2647]'>
          项目中心
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {PROJECTS.map((product, index) => (
            <Card key={index} className='hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='flex justify-center'>{product.icon}</div>
                <div className='flex justify-center mb-4'>
                  <img
                    src={product.details?.media?.images[0] || ''}
                    alt={product.title}
                    className='rounded-lg object-cover w-full max-h-80'
                    style={{ objectPosition: 'top' }}
                  />
                </div>
                <CardTitle className='text-xl text-center text-[#0A2647]'>
                  {product.title}
                </CardTitle>
                <CardDescription className='text-center'>
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='list-disc list-inside space-y-2 text-gray-600'>
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className='mt-6 text-center'>
                  <Button asChild>
                    <Link to={`${NAV_MENU.projects.path}/${product.id}`}>
                      查看详情
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <p className='text-gray-500'>想了解更多信息？请随时联系我们！</p>
          <p className='text-gray-500'>我们的团队将竭诚为您提供帮助。</p>
          <Button asChild className='mt-4'>
            <Link to='/contact'>联系我们</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
