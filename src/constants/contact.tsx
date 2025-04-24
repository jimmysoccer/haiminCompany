import { MapPin, Phone, Mail } from 'lucide-react';
export const ContactInfo = {
  address: {
    icon: <MapPin className='w-6 h-6' />,
    title: '地址',
    info: '上海市嘉定区天祝路377弄2号',
  },
  cellphone: {
    icon: <Phone className='w-6 h-6' />,
    title: '联系电话',
    info: '13918073922',
  },
  telephone: {
    icon: <Phone className='w-6 h-6' />,
    title: '座机电话',
    info: '021-59168565',
  },
  email: {
    icon: <Mail className='w-6 h-6' />,
    title: '邮箱',
    info: '2302050660@qq.com',
  },
};
