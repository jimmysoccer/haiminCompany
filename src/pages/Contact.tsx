import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: <MapPin className='w-6 h-6' />,
      title: '地址',
      info: '上海市嘉定区天祝路377弄2号',
    },
    {
      icon: <Phone className='w-6 h-6' />,
      title: '联系电话',
      info: '13918073922',
    },
    {
      icon: <Mail className='w-6 h-6' />,
      title: '邮箱',
      info: '2302050660@qq.com',
    },
    // {
    //   icon: <Clock className='w-6 h-6' />,
    //   title: 'Business Hours',
    //   info: 'Mon - Fri: 9:00 AM - 6:00 PM',
    // },
  ];

  return (
    <div className='min-h-screen pt-24 pb-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-[#0A2647] mb-6'>联系我们</h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            即刻咨询技术专家团队，量身定制解决方案，助力您的企业实现数字化升级。
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-12'>
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8'>
              {contactInfo.map((item, index) => (
                <Card key={index} className='hover:shadow-lg transition-shadow'>
                  <CardContent className='p-6'>
                    <div className='flex items-center gap-4'>
                      <div className='text-[#2C74B3]'>{item.icon}</div>
                      <div>
                        <h3 className='font-semibold text-gray-800'>
                          {item.title}
                        </h3>
                        <p className='text-gray-600'>{item.info}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <Card className='p-6'>
              <CardContent>
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='space-y-2'>
                    <Label htmlFor='name'>姓名</Label>
                    <Input
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='email'>邮箱</Label>
                    <Input
                      id='email'
                      name='email'
                      type='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='subject'>留言标题</Label>
                    <Input
                      id='subject'
                      name='subject'
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='message'>留言内容</Label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className='min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                    />
                  </div>
                  <Button type='submit' className='w-full'>
                    提交留言
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
