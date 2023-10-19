// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DashboardOutlined, FileTextOutlined, BarChartOutlined, DollarOutlined, QuestionCircleOutlined } from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = {
  DashboardOutlined,
  FileTextOutlined,
  BarChartOutlined,
  DollarOutlined,
  QuestionCircleOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const widget: NavItemType = {
  id: 'group-widget',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: <FormattedMessage id="dashboard" />,
      type: 'item',
      url: '/dashboard/dashboard',
      icon: icons.DashboardOutlined
    },
    {
      id: 'tasks',
      title: <FormattedMessage id="Tasks / Projects" />,
      type: 'item',
      url: '/widget/tasks',
      icon: icons.FileTextOutlined
    },
    {
      id: 'minute-utilisation',
      title: <FormattedMessage id="Minutes Utilisation" />,
      type: 'item',
      url: '/widget/minutes-utilisation',
      icon: icons.BarChartOutlined
    },
    {
      id: 'data',
      title: <FormattedMessage id="Billing & Subscription" />,
      type: 'item',
      url: '/widget/data',
      icon: icons.DollarOutlined
    },
    {
      id: 'chart',
      title: <FormattedMessage id="Support / Help" />,
      type: 'item',
      url: '/widget/support-help',
      icon: icons.QuestionCircleOutlined
    }
  ]
};

export default widget;
