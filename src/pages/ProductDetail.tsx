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
import { NAV_MENU } from '@/constants/navBar';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const closeModal = () => setSelectedImageIndex(null);

  const showNextImage = () => {
    if (selectedImageIndex !== null && product.details?.media?.images) {
      setSelectedImageIndex(
        (selectedImageIndex + 1) % product.details.media.images.length
      );
    }
  };

  const showPreviousImage = () => {
    if (selectedImageIndex !== null && product.details?.media?.images) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + product.details.media.images.length) %
          product.details.media.images.length
      );
    }
  };

  if (!product) {
    return (
      <div className='min-h-screen pt-24 pb-16 text-center'>
        <h1 className='text-2xl font-bold text-gray-800'>没有找到此项目</h1>
        <Button asChild className='mt-4'>
          <Link to={NAV_MENU.projects.path}>返回全部项目</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className='min-h-screen pt-24 pb-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-8'>
          <Button asChild variant='outline' className='mb-8'>
            <Link to={NAV_MENU.projects.path}>← 返回全部项目</Link>
          </Button>
        </div>

        <div className='w-100 mb-8'>
          <div className='flex justify-center md:justify-center mb-6 items-center gap-5'>
            <div>{product.icon}</div>
            <div className=''>
              <h1 className='text-4xl font-bold text-[#0A2647] mb-4'>
                {product.title}
              </h1>
              <p className='text-xl text-gray-600 mb-8'>
                {product.description}
              </p>
            </div>
          </div>
          <Card>
            <CardContent className='p-6'>
              <h2 className='text-2xl font-semibold text-[#0A2647] mb-4'>
                项目图集
              </h2>
              <Carousel className='w-full'>
                <CarouselContent>
                  {product.details.media.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <AspectRatio ratio={16 / 9}>
                        <img
                          src={image}
                          alt={`${product.title} showcase ${index + 1}`}
                          className='rounded-lg object-cover w-full h-full cursor-pointer'
                          onClick={() => setSelectedImageIndex(index)}
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
        </div>

        <div className='grid md:grid-cols-2 gap-12'>
          <div>
            <Card className='mb-8'>
              <CardContent className='p-6'>
                <h2 className='text-2xl font-semibold text-[#0A2647] mb-4'>
                  核心功能
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
                  {product.details.media.video && (
                    <Card>
                      <CardContent className='p-6'>
                        <h2 className='text-2xl font-semibold text-[#0A2647] mb-4'>
                          项目演示
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
                            你的浏览器不支持 HTML5 视频标签。
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
                  项目概览
                </h2>
                <p className='text-gray-600'>{product.details.overview}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6'>
                <h2 className='text-2xl font-semibold text-[#0A2647] mb-4'>
                  应用价值
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
                  技术规格
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
      {selectedImageIndex !== null && product.details?.media?.images && (
        <Modal
          open={selectedImageIndex !== null}
          onClose={closeModal}
          className='flex items-center justify-center'
        >
          <div className='relative p-5 rounded-lg bg-white w-[1200px] flex items-center justify-between'>
            <IconButton
              onClick={closeModal}
              color='primary'
              style={{ position: 'absolute', top: 4, right: 4, zIndex: 5 }}
            >
              <CloseIcon />
            </IconButton>
            <IconButton onClick={showPreviousImage} color='primary'>
              <ArrowBackIosIcon />
            </IconButton>
            <div className='relative'>
              <img
                src={product.details.media.images[selectedImageIndex]}
                alt={`Image ${selectedImageIndex + 1}`}
                className='max-w-full max-h-[800px] rounded-lg mx-2'
              />
            </div>
            <IconButton onClick={showNextImage} color='primary'>
              <ArrowForwardIosIcon />
            </IconButton>
            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-5'>
              {product.details.media.images.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index === selectedImageIndex ? 'bg-white' : 'bg-gray-500'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProductDetail;
