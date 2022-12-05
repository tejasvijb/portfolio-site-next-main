import { imgPaths } from 'utils/imgPaths'

export interface ProjectType {
  name: string
  description: string
  points: string[]
  tagUrls: string[]
  links: string[]
}

export const projects: ProjectType[] = [
  {
    name: 'Portfolio Site',
    description:
      'Personal portfolio and a personal blog is always a nice thing to have, so I handcrafted one for myself to showcase my blogs and projects',
    points: [
      '👾 Next.js for the core',
      '🧰 TypeScript for the language',
      '📝 MDX for the Blog',
      '📓 next-contentlayer for blog management',
      '🐱 Github comments and reactions',
      '💎 Prism to highlight the code blocks',
      '🌠 Framer Motion for animation',
      '💅 Sass for styling',
      '🔮 Vercel open graph dynamic image generation',
      '✨ SEO optimized',
    ],
    tagUrls: [imgPaths['Next.js'].path, imgPaths['Typescript'].path, imgPaths['Sass'].path],
    links: ['https://github.com/0xHecker/portfolio-next-sass', 'https://beddit-lac.vercel.app/'],
  },

  {
    name: 'QKart Frontend',
    description:
      'QKart is an e-commerce application offering a variety of products for customers to choose from.',
    points: [
      '🛍  Implemented the core logic for authentication, shopping cart and checkout',
      '⚛ Improved UI by adding responsive design elements for uniform experience across different devices',
      '👯 User auth, Login password etc',
      '🖥  Utilized REST APIs to dynamically load and render data served by the backend serve',
      '🔭 Implemented search using Debouncing'
    ],
    tagUrls: [
      imgPaths['Javascript'].path,
      imgPaths['React'].path,
      imgPaths['HTML5'].path,
      imgPaths['CSS3'].path,
      imgPaths['express'].path,
    ],
    links: ['https://github.com/tejasvijb/qkartfrontend', 'https://cutt.ly/51CGON7'],
  },

  {
    name: 'XBoard',
    description:
      'XBoard is a News Feed website that will feature the latest news for select topics, from Flipboard.',
    points: [
      '🌟 Built XBoard using HTML, CSS, Bootstrap and JavaScript from scratch.',
      '📣 Used Accordions and Image Carousel to improve UI',
      '🌠 Fetched news content from flipboards RSS feed using REST API.',
    ],
    tagUrls: [imgPaths['Javascript'].path, imgPaths['HTML5'].path, imgPaths['CSS3'].path],
    links: ['https://cutt.ly/41CG1Zy', 'https://cutt.ly/41CG1Zy'],
  },

  {
    name: 'Qtrip Dynamic',
    description:
      'QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities.',
    points: [
      '⚛ Created web pages using HTML and CSS and made them dynamic using JavaScript.',
      'Created web pages using HTML and CSS and made them dynamic using JavaScript',
      '💻 Utilised localStorage to persist user preferences at client-side',
      'Improved UX with multi-select filters, image carousels',
    ],
    tagUrls: [imgPaths['Javascript'].path, imgPaths['React'].path, imgPaths['Sass'].path],
    links: ['https://cutt.ly/81CG8W3', 'https://cutt.ly/81CG8W3'],
  },

  {
    name: 'Qtrip Static',
    description: 'QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities.',
    points: [
      'Created 3 different web pages from Wireframe layout using HTML and CSS',
      'Utilized Bootstrap extensively for responsive design',
      'Deployed the website to Netlify',
    ],
    tagUrls: [
      imgPaths['HTML5'].path,
      imgPaths['Javascript'].path,
      imgPaths['CSS3'].path,
      imgPaths['prisma'].path,
    ],
    links: ['https://cutt.ly/N1CG60o', 'https://cutt.ly/N1CG60o'],
  },

  {
    name: 'Adopt a pet 🐕🐈',   
    description: 'This project introduced me to the concept of single page applications using react routers',
    points: [
      '🔭 Implemented search',
      'Implemented different pages for categories',
      'Dynamically render the components',
    ],
    tagUrls: [
      imgPaths['Javascript'].path,
      imgPaths['React'].path,
      imgPaths['HTML5'].path,
      imgPaths['CSS3'].path,
    ],
    links: ['https://github.com/tejasvijb/adopt-a-pet-starter','https://timely-valkyrie-6c92c8.netlify.app/'],
  },

  {
    name: 'AppointFix',
    description:
      'A simple appointment planner using React and redux store',
    points: [
      '⚛ React for the frontend',
      'Redux to manage state',
      'Schedule appointment for different contacts',
    ],
    tagUrls: [imgPaths['React'].path, imgPaths['React'].path, imgPaths['Javascript'].path],
    links: ['https://github.com/tejasvijb/appointment-planner', 'https://tranquil-peony-82309a.netlify.app/'],
  },

  {
    name: 'InkinSkin',
    description:
      'It is a simple static landing page for tattoo studio made with html and Sass, learnt a lot of advanced css patterns, cascading rules, BEM and Scss',
    tagUrls: [imgPaths['HTML5'].path, imgPaths['Sass'].path],
    points: ['🦆 BEM', '💆 Mixins, global variables', '🌠 Transitions and animations', '💃 Responsive design', '🚀 Scalable CSS patterns'],
    links: ['https://github.com/tejasvijb/InkInskin', 'https://tejasvijb.github.io/InkInskin/'],
  },
]

/*

  {
    name: 'Heart rate anomaly map',
    description:
      'Lorem ipsum dolor sit amet consectetur dolor officia recnt tenetur similique porro adipisicing elit. Architecto quae enim sit quas',
    points: ['📝 BEM', ' Mixins, global variables', '💎 Transitions and animations', '📝 Responsive design', '🌠 Scalable CSS patterns'],

    tagUrls: [
      imgPaths['Next.js'].path,
      imgPaths['Typescript'].path,
      imgPaths['GraphQL'].path,
      imgPaths['Apollo'].path,
      imgPaths['postgreSQL'].path,
      imgPaths['redis'].path,
      imgPaths['typeorm'].path,
      imgPaths['express'].path,
      imgPaths['docker'].path,
    ],
    links: ['https://github.com/0xHecker/beddit-web', 'https://beddit-lac.vercel.app/'],
  },

*/
