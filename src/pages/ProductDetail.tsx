import { useParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PROJECTS } from '@/constants/projects';

const ProductDetail = () => {
  const { id } = useParams();
  const product = PROJECTS.find(
    (p) => p.id === id
  ) as (typeof PROJECTS)[number] & {
    details?: {
      media?: { images: string[]; video?: string };
      overview: string;
      benefits: string[];
      specifications: string[];
    };
  };

  if (!product) {
    return (
      <div className='min-h-screen pt-24 pb-16 text-center'>
        <h1 className='text-2xl font-bold text-gray-800'>Product not found</h1>
        <Button asChild className='mt-4'>
          <Link to='/products'>Back to Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className='min-h-screen pt-24 pb-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-8'>
          <Button asChild variant='outline' className='mb-8'>
            <Link to='/products'>← Back to Products</Link>
          </Button>
        </div>

        <div className='grid md:grid-cols-2 gap-12'>
          <div>
            <div className='flex justify-center md:justify-start mb-6'>
              {product.icon}
            </div>
            <h1 className='text-4xl font-bold text-[#0A2647] mb-4'>
              {product.title}
            </h1>
            <p className='text-xl text-gray-600 mb-8'>{product.description}</p>

            <Card className='mb-8'>
              <CardContent className='p-6'>
                <h2 className='text-2xl font-semibold text-[#0A2647] mb-4'>
                  Key Features
                </h2>
                <ul className='space-y-3'>
                  {product.features.map((feature, index) => (
                    <li key={index} className='flex items-center gap-2'>
                      <div className='h-2 w-2 bg-[#2C74B3] rounded-full' />
                      <span className='text-gray-700'>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className='space-y-8'>
              {product.details?.media && (
                <>
                  <Card>
                    <CardContent className='p-6'>
                      <h2 className='text-2xl font-semibold text-[#0A2647] mb-4'>
                        Product Gallery
                      </h2>
                      <Carousel className='w-full'>
                        <CarouselContent>
                          {product.details.media.images.map((image, index) => (
                            <CarouselItem key={index}>
                              <AspectRatio ratio={16 / 9}>
                                <img
                                  src={image}
                                  alt={`${product.title} showcase ${index + 1}`}
                                  className='rounded-lg object-cover w-full h-full'
                                />
                              </AspectRatio>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    </CardContent>
                  </Card>

                  {product.details.media.video && (
                    <Card>
                      <CardContent className='p-6'>
                        <h2 className='text-2xl font-semibold text-[#0A2647] mb-4'>
                          Product Demo
                        </h2>
                        <AspectRatio ratio={16 / 9}>
                          <video
                            controls
                            className='rounded-lg w-full h-full'
                            poster={product.details.media.images[0]}
                          >
                            <source
                              src={product.details.media.video}
                              type='video/mp4'
                            />
                            Your browser does not support the video tag.
                          </video>
                        </AspectRatio>
                      </CardContent>
                    </Card>
                  )}
                </>
              )}
            </div>
          </div>

          <div className='space-y-8'>
            <Card>
              <CardContent className='p-6'>
                <h2 className='text-2xl font-semibold text-[#0A2647] mb-4'>
                  Overview
                </h2>
                <p className='text-gray-600'>{product.details.overview}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6'>
                <h2 className='text-2xl font-semibold text-[#0A2647] mb-4'>
                  Benefits
                </h2>
                <ul className='space-y-3'>
                  {product.details.benefits.map((benefit, index) => (
                    <li key={index} className='flex items-center gap-2'>
                      <div className='h-2 w-2 bg-[#2C74B3] rounded-full' />
                      <span className='text-gray-700'>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6'>
                <h2 className='text-2xl font-semibold text-[#0A2647] mb-4'>
                  Technical Specifications
                </h2>
                <ul className='space-y-3'>
                  {product.details.specifications.map((spec, index) => (
                    <li key={index} className='flex items-center gap-2'>
                      <div className='h-2 w-2 bg-[#2C74B3] rounded-full' />
                      <span className='text-gray-700'>{spec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
