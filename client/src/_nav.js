export default {
  items: [
    {
      name: 'Dashboard',
      url: '/global-theme/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'Theme',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Colors',
      url: '/global-theme/theme/colors',
      icon: 'icon-drop',
    },
    {
      name: 'Typography',
      url: '/global-theme/theme/typography',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Base',
      url: '/global-theme/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Breadcrumbs',
          url: '/global-theme/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Cards',
          url: '/global-theme/base/cards',
          icon: 'icon-puzzle',
        },
        {
          name: 'Carousels',
          url: '/global-theme/base/carousels',
          icon: 'icon-puzzle',
        },
        {
          name: 'Collapses',
          url: '/global-theme/base/collapses',
          icon: 'icon-puzzle',
        },
        {
          name: 'Dropdowns',
          url: '/global-theme/base/dropdowns',
          icon: 'icon-puzzle',
        },
        {
          name: 'Forms',
          url: '/global-theme/base/forms',
          icon: 'icon-puzzle',
        },
        {
          name: 'Jumbotrons',
          url: '/global-theme/base/jumbotrons',
          icon: 'icon-puzzle',
        },
        {
          name: 'List groups',
          url: '/global-theme/base/list-groups',
          icon: 'icon-puzzle',
        },
        {
          name: 'Navs',
          url: '/global-theme/base/navs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Paginations',
          url: '/global-theme/base/paginations',
          icon: 'icon-puzzle',
        },
        {
          name: 'Popovers',
          url: '/global-theme/base/popovers',
          icon: 'icon-puzzle',
        },
        {
          name: 'Progress Bar',
          url: '/global-theme/base/progress-bar',
          icon: 'icon-puzzle',
        },
        {
          name: 'Switches',
          url: '/global-theme/base/switches',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tables',
          url: '/global-theme/base/tables',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tabs',
          url: '/global-theme/base/tabs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tooltips',
          url: '/global-theme/base/tooltips',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'Buttons',
      url: '/global-theme/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Buttons',
          url: '/global-theme/buttons/buttons',
          icon: 'icon-cursor',
        },
        {
          name: 'Button dropdowns',
          url: '/global-theme/buttons/button-dropdowns',
          icon: 'icon-cursor',
        },
        {
          name: 'Button groups',
          url: '/global-theme/buttons/button-groups',
          icon: 'icon-cursor',
        },
        {
          name: 'Brand Buttons',
          url: '/global-theme/buttons/brand-buttons',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Charts',
      url: '/global-theme/charts',
      icon: 'icon-pie-chart',
    },
    {
      name: 'Icons',
      url: '/global-theme/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'CoreUI Icons',
          url: '/global-theme/icons/coreui-icons',
          icon: 'icon-star',
          badge: {
            variant: 'info',
            text: 'NEW',
          },
        },
        {
          name: 'Flags',
          url: '/global-theme/icons/flags',
          icon: 'icon-star',
        },
        {
          name: 'Font Awesome',
          url: '/global-theme/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7',
          },
        },
        {
          name: 'Simple Line Icons',
          url: '/global-theme/icons/simple-line-icons',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Notifications',
      url: '/global-theme/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Alerts',
          url: '/global-theme/notifications/alerts',
          icon: 'icon-bell',
        },
        {
          name: 'Badges',
          url: '/global-theme/notifications/badges',
          icon: 'icon-bell',
        },
        {
          name: 'Modals',
          url: '/global-theme/notifications/modals',
          icon: 'icon-bell',
        },
      ],
    },
    {
      name: 'Widgets',
      url: '/global-theme/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'Pages',
      url: '/global-theme/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star',
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Disabled',
      url: '/global-theme/dashboard',
      icon: 'icon-ban',
      attributes: { disabled: true },
    },
    {
      name: 'Download CoreUI',
      url: 'https://coreui.io/react/',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success',
      attributes: { target: '_blank', rel: "noopener" },
    },
    {
      name: 'Try CoreUI PRO',
      url: 'https://coreui.io/pro/react/',
      icon: 'icon-layers',
      variant: 'danger',
      attributes: { target: '_blank', rel: "noopener" },
    },
  ],
};
