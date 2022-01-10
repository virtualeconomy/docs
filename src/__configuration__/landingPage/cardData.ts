import components from '../../../src/app/assets/card-images/components.png';
import icons from '../../../src/app/assets/card-images/icons.png';
import github from '../../../src/app/assets/card-images/github.png';
import resources from '../../../src/app/assets/card-images/resources.png';
import patterns from '../../../src/app/assets/card-images/patterns.svg';
import community from '../../../src/app/assets/card-images/community.png';
import style from '../../../src/app/assets/card-images/style.png';
import roadmap from '../../../src/app/assets/card-images/roadmap.png';

export const cardData = [
    {
        title: 'Style Guide',
        description: `Learn more about Brightlayer UI style guidelines, including colors, themes, icons, typography, and more.`,
        image: style,
        path: '/style',
    },
    {
        title: 'Icons',
        description: `Browse the library of icons available in Brightlayer UI including Material icons as well as custom ones for Brightlayer UI applications.`,
        image: icons,
        path: '/style/iconography',
    },
    {
        title: 'Design Patterns',
        description: `Learn about common interactions and designs found in Brightlayer UI applications.`,
        image: patterns,
        path: '/patterns',
    },
    {
        title: 'Component APIs',
        description: `Check out our libraries of pre-built JavaScript components that accelerate your application development.`,
        image: components,
        path: 'https://brightlayer-ui-components.github.io',
    },
    {
        title: 'Development Resources',
        description: `Have a look at all of the code examples and packages available from Brightlayer UI. We're constantly updating and adding new materials.`,
        image: resources,
        path: '/resources/developer',
    },
    {
        title: 'GitHub',
        description: `All Brightlayer UI resources and materials are open source and available for viewing on our GitHub organization.`,
        image: github,
        path: 'https://github.com/brightlayer-ui',
    },
    {
        title: 'Community',
        description: `Learn how to join the Brightlayer UI community by innersourcing, requesting features, etc.`,
        image: community,
        path: '/community',
    },
    {
        title: 'Roadmap',
        description: `See what the team is currently working on and what we have planned for future updates.`,
        image: roadmap,
        path: '/roadmap',
    },
];
