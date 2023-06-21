import partnersLogo1 from '../assets/img/partnersLogo1.png';
import partnersLogo2 from '../assets/img/partnersLogo2.png';
import partnersLogo3 from '../assets/img/partnersLogo3.png';
import partnersLogo4 from '../assets/img/partnersLogo4.png';
import partnersLogo5 from '../assets/img/partnersLogo5.png';
import partnersLogo6 from '../assets/img/partnersLogo6.png';
import partnersLogo7 from '../assets/img/partnersLogo7.png';
import partnersLogo8 from '../assets/img/partnersLogo8.png';
import partnersLogo9 from '../assets/img/partnersLogo9.png';
import landshaft from '../assets/img/landshaft.png';
import shareReaders from '../assets/img/shareReaders.png';
import ecosystem from '../assets/img/ecosystem.png';


export  const headerLinksData = [
  { path: '/story', label: 'OUR STORY' },
  { path: '/guide-marathon', label: 'GUIDE MARATHON' },
  { path: '/become-guide', label: 'BECOME A GUIDE' },
  { path: '/media', label: 'MEDIA' },
  { path: '/get-in-touch', label: 'GET IN TOUCH' },
];

export const homeSliderBannerimages = [
  { id: 1, src: 'https://cdn.shopify.com/s/files/1/0231/8024/7118/files/SHOPIFY_Home_Page_Banners_9_cac3c531-f636-4356-9e70-fb7ff5bb13cc_1920x.png?v=1685614143' },
  { id: 2, src: 'https://www.soelden.com/.imaging/mte/jcr/soelden/pxpx2000/dam/Sommer/SOELDEN/Navigationsbilder/soel_hochtour_windachscharte_01_14.jpg/jcr:content/soel-navibilder-wanderfuehrer.jpg' },
  { id: 3, src: 'https://media.licdn.com/dms/image/C4E22AQEk9Hi3N2TN0Q/feedshare-shrink_800/0/1672757647018?e=1689206400&v=beta&t=8imMEQemqqR63J0BrrZRGbOZByeZ6H6ruJ2ePY0agOk' },
  { id: 4, src: 'https://images.unsplash.com/photo-1633231610793-a5be285cb418?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW4lMjBndWlkZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' },
];

export const mainBecomeBlocks = [
  {
    id: 1,
    title: "Embark on a Journey of Knowledge",
    text: "Learn the essential skills and techniques required to become a knowledgeable mountain guide. Our comprehensive training program covers navigation, safety protocols, weather analysis, and more, empowering you to lead expeditions with confidence.",
    image: "https://www.datocms-assets.com/55179/1647345347-breithorn-pennine-alps-guided-ascent.jpg?fit=clip&h=400&w=500.png", 
  },
  {
    id: 2,
    title: "Master the Art of Mountaineering",
    text: "Gain expertise in the art of mountaineering and conquer the world's most breathtaking peaks. Our experienced instructors will teach you advanced climbing techniques, rope management, ice climbing, and other essential skills needed to guide others through challenging terrain.",
    image: "https://s3.amazonaws.com/www.explorersweb.com/wp-content/uploads/2021/11/04193841/Female-IFMGA-guides-acclimatize-in-Chamonix-Photo-Soloviova-Liudmyla.jpg", 
  },
  {
    id: 3,
    title: "Navigate with Precision",
    text: "Develop your navigation skills to guide fellow adventurers through rugged mountain landscapes. Learn how to read maps, use compasses, and make critical decisions in changing environments. Become a trusted navigator capable of leading others to their destinations safely.",
    image: "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2016/08/mountain-guide.jpg", 
  },
  {
    id: 4,
    title: "Share Your Passion and Inspire",
    text: "As a mountain guide, you have the unique opportunity to inspire others with your love for the mountains. Teach aspiring climbers about the importance of conservation, the rich history of the mountains, and the thrill of overcoming challenges. Make a lasting impact on the next generation of adventurers.",
    image: "https://i.insider.com/6398bad0f0c5330018dc17da?width=700.png", 
  },
];

export const logos = [
  { image: partnersLogo1 },
  { image: partnersLogo2 },
  { image: partnersLogo3 },
  { image: partnersLogo4 },
  { image: partnersLogo5 },
  { image: partnersLogo6 },
  { image: partnersLogo7 },
  { image: partnersLogo8 },
  { image: partnersLogo9 },
  // Add more logo objects as needed
];


interface slide {
  id: number
  title: string;
  text: string;
  image:string;
}

export const blogMediaSlides: slide[] = [
  {
    id: 1,
    title: "Essential Gear for Mountain Adventurers",
    text: "Discover the must-have gear and equipment for mountain exploration. From hiking boots to navigation tools, ensure you're well-prepared for your next adventure in the mountains",
    image: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2017/11/27/27178ecc-ecae-47e3-ad37-75b1224626d8/everest-kit"
  },
  {
    id: 2,
    title: "Capturing Breathtaking Mountain Landscapes",
    text: "Learn the art of photographing stunning mountain landscapes. Gain insights into composition, lighting, and post-processing techniques to capture the beauty of mountains in your blog media.",
    image: landshaft
  },
  {
    id: 3,
    title: "Navigating Challenging Terrain: Tips for Mountain Hikers",
    text: "Explore essential tips and techniques for hiking in challenging mountain terrains. From route planning to safety precautions, enhance your mountain hiking skills and share valuable insights with your readers.",
    image: shareReaders
  },
  {
    id: 4,
    title: "Exploring Alpine Flora and Fauna",
    text: "Delve into the fascinating world of alpine flora and fauna. Learn about unique plant species, wildlife encounters, and conservation efforts in mountain ecosystems to enrich your mountain guide blog.",
    image: ecosystem
  },
];

