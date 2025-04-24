import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { ContactInfo } from '@/constants/contact';
import { CustomerComments } from '@/constants/comments';

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
      title: '提交成功',
      description: '感谢您的留言，我们会尽快与您联系！',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
              {Object.values(ContactInfo).map((item, index) => (
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

        <div className='mt-16 text-center'>
          <h2 className='text-3xl font-bold text-[#0A2647] mb-6'>我们的承诺</h2>
          <p className='text-gray-600 max-w-3xl mx-auto'>
            我们承诺在24小时内回复您的咨询, 确保您能及时获得所需的信息和支持。
          </p>
          <p className='text-gray-600 max-w-3xl mx-auto'>
            我们期待与您建立长期的合作关系，共同推动数字化转型的成功。
          </p>
        </div>

        <div className='mt-16'>
          <h2 className='text-3xl font-bold text-[#0A2647] mb-6 text-center'>
            客户评价
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {CustomerComments.map((testimonial, index) => (
              <div
                key={index}
                className='p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow'
              >
                <p className='text-gray-600 italic mb-4'>
                  “{testimonial.quote}”
                </p>
                <p className='text-gray-800 font-semibold text-right'>
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
