import {
  guanlongSchoolImages,
  intelligentPumpImages,
  szuhHospitalImages,
  zhentongDatacenterImages,
  zhentongDatacenterVideo,
} from '@/assets/image';
import { Database } from 'lucide-react';
export const PROJECTS = [
  {
    id: 'zhentong-datacenter',
    title: '深圳证通数据中心(平安银行光明数据机房)',
    description:
      '平安银行金融A类数据中心,配备机器人巡视与高效冷通道系统,支持全天候运行监控。',
    icon: <Database className='h-12 w-12 text-[#2C74B3] mb-4' />,
    features: [
      '1200个标准机柜',
      '42个冷通道系统',
      '机器人巡视及配电巡查',
      '24小时设备监控',
    ],
    details: {
      overview:
        '本项目为平安银行光明数据中心机房,位于深圳光明证通电子产业园,属于高等级金融A类数据中心。三个楼层共部署近1200个机柜及42个冷通道系统,其中部分区域配备机器人巡视系统,保障设备高效稳定运行。',
      benefits: [
        '全天候运行设备保障',
        '机器人巡视提升运维效率',
        '高密度冷通道散热设计',
        '一次性验收合格,可靠交付',
        '降低人工运维成本',
      ],
      specifications: [
        '三层楼近1200个标准机柜',
        '42个冷通道(含11个机器人巡视冷通道)',
        '配电房机器人自动巡查',
        '冷通道动环与电力母线安装调试',
        '项目周期:2020-08-04 至 2020-12-07',
      ],
      media: {
        images: zhentongDatacenterImages,
        video: zhentongDatacenterVideo,
      },
    },
  },

  {
    id: 'guanlong-school-datacenter',
    title: '深圳市南山区官龙学校教学数据中心',
    description: '为日常教学提供恒温恒湿环境的数据中心,配备UPS保障供电稳定性。',
    icon: <Database className='h-12 w-12 text-[#2C74B3] mb-4' />,
    features: ['16个机柜位', '3台精密空调', '冷通道恒温恒湿', '3台UPS持续供电'],
    details: {
      overview:
        '项目位于南山区官龙学校,建设一个保障教学运行的专用数据中心机房。通过精密空调和UPS系统,保证机房运行环境稳定可靠。',
      benefits: [
        '保障教学系统7x24不间断运行',
        '恒温恒湿的运行环境',
        'UPS系统应对突发停电',
        '提升校园信息化基础设施',
      ],
      specifications: [
        '16个标准机柜',
        '1个网络机柜 + 1个列头柜',
        '3台精密空调',
        '2台60KVA + 1台80KVA UPS',
        '项目周期:2024-05-13 至 2024-07-13',
      ],
      media: {
        images: guanlongSchoolImages,
      },
    },
  },
  {
    id: 'szuh-hospital-iot',
    title: '深圳大学附属华南医院智慧管理',
    description: '基于物联网与智能监控系统,提升医院设备管理与安全性能。',
    icon: <Database className='h-12 w-12 text-[#2C74B3] mb-4' />,
    features: [
      '智能在线监测系统',
      '物联网设备接入',
      '覆盖多部门科室',
      '24小时远程监控',
    ],
    details: {
      overview:
        '项目通过物联网技术和智能化设备改造,实现医院多科室的智慧管理,提升管理效率与设备安全。',
      benefits: [
        '减少人工巡检频率',
        '工程部远程值守实时监控',
        '提升医疗设备运行稳定性',
        '涵盖全院关键区域',
      ],
      specifications: [
        '覆盖区域:住院部、门急诊、血液中心等',
        '核心设备:热水机房、电梯、UPS等',
        '使用光纤、超六类网线、无线网桥实现联网',
        '项目周期:2023-05-12 至 2023-07-14',
      ],
      media: {
        images: szuhHospitalImages,
      },
    },
  },
  {
    id: 'intelligent-pump-room',
    title: '智能化水泵房建设',
    description:
      '为生活区、办公区、公寓区水泵房提供电力、安防与智能化系统施工。',
    icon: <Database className='h-12 w-12 text-[#2C74B3] mb-4' />,
    features: [
      '3个区域水泵房',
      '电力桥架与电缆铺设',
      '安防视频监控安装',
      '智能控制系统调试',
    ],
    details: {
      overview:
        '本项目位于深圳龙华盛璟润府,涵盖生活、办公、公寓三大区域水泵房的智能化施工,包括供电系统、安防与智能控制系统建设。',
      benefits: [
        '提升小区用水管理效率',
        '安防智能化提升安全性',
        '施工涵盖电力与控制系统',
        '提升住宅配套智能化水平',
      ],
      specifications: [
        '区域:生活区、办公区、公寓区水泵房',
        '施工内容:电力桥架、电缆、监控安装与调试',
        '控制系统编程与调试',
        '项目周期:2023-06-17 至 2023-02-07',
      ],
      media: {
        images: intelligentPumpImages,
      },
    },
  },
];
