import { acme, apex, avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, celestial, echo, instagram, linkedin, pin, pulse, quantum, x, youtube } from "@/public";
import { features } from "process";

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
      src: avatar9,
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

export const logoMarqueeItems = [
   {
      id: 1,
      src: apex
   },
   {
      id: 2,
      src: acme
   },
   {
      id: 3,
      src: celestial
   },
   {
      id: 4,
      src: echo
   },
   {
      id: 5,
      src: pulse
   },
   {
      id: 6,
      src: quantum
   }
];

export const footerItems = [
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
      title: 'Pricing',
      href: '/pricing'
   },
   {
      id: 5,
      title: 'Help',
      href: '/help'
   },
   {
      id: 6,
      title: 'Careers',
      href: '/careers'
   }
];

export const footerSocialsItems = [
   {
      id: 1,
      src: instagram,
      href: "/"
   },
   {
      id: 2,
      src: linkedin,
      href: "/"
   },
   {
      id: 3,
      src: pin,
      href: "/"
   },
   {
      id: 4,
      src: x,
      href: "/"
   },
   {
      id: 5,
      src: youtube,
      href: "/"
   },
];

export const pricingItems = [
   {
      id: 1,
      title: 'Free',
      price: 0,
      btn: "Get for free",
      features: [
         {
            id: 1,
            feature: "Up to 5 project members",
         },
         {
            id: 2,
            feature: "Unlimited tasks and projects",
         },
         {
            id: 3,
            feature: "2GB storage",
         },
         {
            id: 4,
            feature: "Integrations",
         },
         {
            id: 5,
            feature: "Basic support",
         },
      ]
   },
   {
      id: 2,
      title: 'Pro',
      price: 9,
      btn: "Sign up now",
      features: [
         {
            id: 1,
            feature: "Up to 50 project members",
         },
         {
            id: 2,
            feature: "Unlimited tasks and projects",
         },
         {
            id: 3,
            feature: "50GB storage",
         },
         {
            id: 4,
            feature: "Integrations",
         },
         {
            id: 5,
            feature: "Priority support",
         },
         {
            id: 6,
            feature: "Advanced support",
         },
         {
            id: 7,
            feature: "Export support",
         },
      ]
   },
   {
      id: 3,
      title: 'Business',
      price: 19,
      btn: "Sign up now",
      features: [
         {
            id: 1,
            feature: "Up to 5 project members",
         },
         {
            id: 2,
            feature: "Unlimited tasks and projects",
         },
         {
            id: 3,
            feature: "200GB storage",
         },
         {
            id: 4,
            feature: "Integrations",
         },
         {
            id: 5,
            feature: "Dedicated account manager",
         },
         {
            id: 6,
            feature: "Custom fields",
         },
         {
            id: 7,
            feature: "Advanced analytics",
         },
         {
            id: 8,
            feature: "Export capabilities",
         },
         {
            id: 9,
            feature: "API access",
         },
         {
            id: 10,
            feature: "Advanced security features",
         },
      ]
   },
];