export default {
    items: [
      {
        name: 'Accueil',
        url: '/home/dashboard',
        icon: 'icon-speedometer',
      },
      {
        name: 'Projets',
        url: '/home/base',
        icon: 'icon-puzzle',
        children: [
          {
            name: 'Tous les projets',
            url: '/home/base/breadcrumbs',
            icon: 'icon-puzzle',
          },
          {
            name: 'Nouveau projet',
            url: '/home/base/cards',
            icon: 'icon-puzzle',
          },
        ],
      },
      {
        name: 'Mondes',
        url: '/home/base',
        icon: 'icon-puzzle',
        children: [
          {
            name: 'Tous les mondes',
            url: '/home/base/breadcrumbs',
            icon: 'icon-puzzle',
          },
          {
            name: 'Nouveau monde',
            url: '/home/base/cards',
            icon: 'icon-puzzle',
          },
        ],
      },
      {
        title: true,
        name: 'Thème',
        wrapper: {            // optional wrapper object
          element: '',        // required valid HTML5 element tag
          attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
        },
        class: ''             // optional class names space delimited list for title item ex: "text-center"
      },
      {
        name: 'Voir les possibilités du thème',
        url: '/global-theme',
        icon: 'icon-drop',
      },
    ],
  };
  