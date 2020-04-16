import React from 'react';

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/home', exact: true, name: 'Home' },
  { path: '/home/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/home/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/home/theme/colors', name: 'Colors', component: Colors },
  { path: '/home/theme/typography', name: 'Typography', component: Typography },
  { path: '/home/base', exact: true, name: 'Base', component: Cards },
  { path: '/home/base/cards', name: 'Cards', component: Cards },
  { path: '/home/base/forms', name: 'Forms', component: Forms },
  { path: '/home/base/switches', name: 'Switches', component: Switches },
  { path: '/home/base/tables', name: 'Tables', component: Tables },
  { path: '/home/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/home/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/home/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/home/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/home/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/home/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/home/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/home/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/home/base/navs', name: 'Navs', component: Navs },
  { path: '/home/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/home/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/home/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/home/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/home/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/home/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/home/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/home/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/home/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/home/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/home/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/home/icons/flags', name: 'Flags', component: Flags },
  { path: '/home/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/home/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/home/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/home/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/home/notifications/badges', name: 'Badges', component: Badges },
  { path: '/home/notifications/modals', name: 'Modals', component: Modals },
  { path: '/home/widgets', name: 'Widgets', component: Widgets },
  { path: '/home/charts', name: 'Charts', component: Charts },
  { path: '/home/users', exact: true,  name: 'Users', component: Users },
  { path: '/home/users/:id', exact: true, name: 'User Details', component: User },


  { path: '/global-theme', exact: true, name: 'Thème' },
  { path: '/global-theme/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/global-theme/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/global-theme/theme/colors', name: 'Colors', component: Colors },
  { path: '/global-theme/theme/typography', name: 'Typography', component: Typography },
  { path: '/global-theme/base', exact: true, name: 'Base', component: Cards },
  { path: '/global-theme/base/cards', name: 'Cards', component: Cards },
  { path: '/global-theme/base/forms', name: 'Forms', component: Forms },
  { path: '/global-theme/base/switches', name: 'Switches', component: Switches },
  { path: '/global-theme/base/tables', name: 'Tables', component: Tables },
  { path: '/global-theme/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/global-theme/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/global-theme/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/global-theme/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/global-theme/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/global-theme/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/global-theme/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/global-theme/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/global-theme/base/navs', name: 'Navs', component: Navs },
  { path: '/global-theme/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/global-theme/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/global-theme/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/global-theme/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/global-theme/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/global-theme/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/global-theme/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/global-theme/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/global-theme/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/global-theme/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/global-theme/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/global-theme/icons/flags', name: 'Flags', component: Flags },
  { path: '/global-theme/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/global-theme/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/global-theme/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/global-theme/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/global-theme/notifications/badges', name: 'Badges', component: Badges },
  { path: '/global-theme/notifications/modals', name: 'Modals', component: Modals },
  { path: '/global-theme/widgets', name: 'Widgets', component: Widgets },
  { path: '/global-theme/charts', name: 'Charts', component: Charts },
  { path: '/global-theme/users', exact: true,  name: 'Users', component: Users },
  { path: '/global-theme/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
