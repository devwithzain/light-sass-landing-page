import { avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9 } from "@/public";

/**
 * An array of navigation items, each with an id, title, and href.
 * These items are used to build the main navigation menu of the application.
 */
export const navigationItems = [
   {
      id: 1,
      title: 'About',
      href: '/about'
   },
   {
      id: 2,
      title: 'Features',
      href: '/features'
   },
   {
      id: 3,
      title: 'Customers',
      href: '/customers'
   },
   {
      id: 4,
      title: 'Updates',
      href: '/updates'
   },
   {
      id: 5,
      title: 'Help',
      href: '/help'
   }
];

export const pricingTiers = [
   {
      id: 1,
      title: "Free",
      monthlyPrice: 0,
      buttonText: "Get started for free",
      popular: false,
      inverse: false,
      features: [
         "Up to 5 project members",
         "Unlimited tasks and projects",
         "2GB storage",
         "Integrations",
         "Basic support",
      ],
   },
   {
      id: 2,
      title: "Pro",
      monthlyPrice: 9,
      buttonText: "Sign up now",
      popular: true,
      inverse: true,
      features: [
         "Up to 50 project members",
         "Unlimited tasks and projects",
         "50GB storage",
         "Integrations",
         "Priority support",
         "Advanced support",
         "Export support",
      ],
   },
   {
      id: 3,
      title: "Business",
      monthlyPrice: 19,
      buttonText: "Sign up now",
      popular: false,
      inverse: false,
      features: [
         "Up to 5 project members",
         "Unlimited tasks and projects",
         "200GB storage",
         "Integrations",
         "Dedicated account manager",
         "Custom fields",
         "Advanced analytics",
         "Export capabilities",
         "API access",
         "Advanced security features",
      ],
   },
];

export const testimonials = [
   {
      id: 1,
      text: "Its user-friendly interface and robust features support our diverse needs.",
      imageSrc: avatar9,
      name: "Casey Harper",
      username: "@casey09",
   },
   {
      id: 2,
      text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
      src: avatar1,
      name: "Jamie Rivera",
      username: "@jamietechguru00",
   },
   {
      id: 3,
      text: "Our team's productivity has skyrocketed since we started using this tool. ",
      src: avatar2,
      name: "Josh Smith",
      username: "@jjsmith",
   },
   {
      id: 4,
      text: "This app has completely transformed how I manage my projects and deadlines.",
      src: avatar3,
      name: "Morgan Lee",
      username: "@morganleewhiz",
   },
   {
      id: 5,
      text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
      src: avatar4,
      name: "Casey Jordan",
      username: "@caseyj",
   },
   {
      id: 6,
      text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
      src: avatar5,
      name: "Taylor Kim",
      username: "@taylorkimm",
   },
   {
      id: 7,
      text: "The customizability and integration capabilities of this app are top-notch.",
      src: avatar6,
      name: "Riley Smith",
      username: "@rileysmith1",
   },
   {
      id: 8,
      text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
      src: avatar7,
      name: "Jordan Patels",
      username: "@jpatelsdesign",
   },
   {
      id: 9,
      text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
      src: avatar8,
      name: "Sam Dawson",
      username: "@dawsontechtips",
   },
];