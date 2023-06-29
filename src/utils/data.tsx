import harness from '../assets/img/harness.png';
import chalkbag from '../assets/img/chalkbag.png';
import carabiner from '../assets/img/carabiner.png';
import rope from '../assets/img/rope.png';
import quickDraw from '../assets/img/quickDraw.png';
import shoes from '../assets/img/shoes.png';
import crampons from '../assets/img/crampons.png';
import belayDevice from '../assets/img/belayDevice.png';
import helmet from '../assets/img/helmet.png';
import landshaft from '../assets/img/landshaft.png';
import route from '../assets/img/route.png';
import ecosystem from '../assets/img/ecosystem.png';
import mountWithney from '../assets/img/mountWithney.png';
import mountKarakoram from '../assets/img/karakoram.png';
import mountCook from '../assets/img/mountCook.png';
import mountMatterhorn from '../assets/img/mountMatterhorn.png';
import mountMoncBlanc from '../assets/img/mountMoncBlanc.png';
import mountKilimanjaro from '../assets/img/mountKilimanjaro.png';
import mountAconcagua from '../assets/img/mountAconcagua.png';
import mountElbrus from '../assets/img/mountElbrus.png';


interface headerDatas {
  path: string;
  label: string;
}

export  const headerLinksData: headerDatas[] = [
  { path: '/story', label: 'OUR STORY' },
  { path: '/guide-marathon', label: 'GUIDE MARATHON' },
  { path: '/become-guide', label: 'BECOME A GUIDE' },
  { path: '/media', label: 'MEDIA' },
  { path: '/get-in-touch', label: 'GET IN TOUCH' },
];

interface homeSliderImages {
  id: number;
  image: string;
}

export const homeSliderBannerimages: homeSliderImages[] = [
  { id: 1, image: 'https://cdn.shopify.com/s/files/1/0231/8024/7118/files/SHOPIFY_Home_Page_Banners_9_cac3c531-f636-4356-9e70-fb7ff5bb13cc_1920x.png?v=1685614143' },
  { id: 2, image: 'https://www.soelden.com/.imaging/mte/jcr/soelden/pxpx2000/dam/Sommer/SOELDEN/Navigationsbilder/soel_hochtour_windachscharte_01_14.jpg/jcr:content/soel-navibilder-wanderfuehrer.jpg' },
  { id: 3, image: 'https://media.licdn.com/dms/image/C4E22AQEk9Hi3N2TN0Q/feedshare-shrink_800/0/1672757647018?e=1689206400&v=beta&t=8imMEQemqqR63J0BrrZRGbOZByeZ6H6ruJ2ePY0agOk' },
  { id: 4, image: 'https://images.unsplash.com/photo-1633231610793-a5be285cb418?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW4lMjBndWlkZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' },
];

interface becomeBlocks {
  id: number;
  title: string;
  text: string;
  image: string;
}

export const mainBecomeBlocks: becomeBlocks[] = [
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

interface gear {
  image: string
}

export const gears: gear[] = [
  { image: harness },
  { image: chalkbag },
  { image: quickDraw },
  { image: rope },
  { image: carabiner },
  { image: shoes },
  { image: belayDevice },
  { image: helmet },
  { image: crampons },
];


interface slide {
  id: number;
  title: string;
  text: string;
  image: string;
  date: string
}

export const blogMediaSlides: slide[] = [
  {
    id: 1,
    title: "Essential Gear for Mountain Adventurers",
    text: "Discover the must-have gear and equipment for mountain exploration. From hiking boots to navigation tools, ensure you're well-prepared for your next adventure in the mountains. Additionally, don't forget to pack adequate layers of clothing to adapt to changing weather conditions and a reliable headlamp to illuminate your path during nighttime expeditions.",
    image: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2017/11/27/27178ecc-ecae-47e3-ad37-75b1224626d8/everest-kit",
    date: "15 september, 2023"
  },
  {
    id: 2,
    title: "Capturing Breathtaking Mountain Landscapes",
    text: "Learn the art of photographing stunning mountain landscapes. Gain insights into composition, lighting, and post-processing techniques to capture the beauty of mountains in your blog media. Master the craft of photographing breathtaking mountain landscapes, using composition, lighting, and post-processing techniques to create visually stunning images that will leave a lasting impression on your blog readers",
    image: landshaft,
    date: "15 september, 2023"
  },
  {
    id: 3,
    title: "Navigating Challenging Terrain: Tips for Mountain Hikers",
    text: "Explore essential tips and techniques for hiking in challenging mountain terrains. From route planning to safety precautions, enhance your mountain hiking skills and share valuable insights with your readers. Embark on thrilling hikes, conquer challenging trails, and inspire your readers with your mountain adventure stories",
    image: route,
    date: "15 september, 2023"
  },
  {
    id: 4,
    title: "Exploring Alpine Flora and Fauna",
    text: "Delve into the fascinating world of alpine flora and fauna. Learn about unique plant species, wildlife encounters, and conservation efforts in mountain ecosystems to enrich your mountain guide blog. Discover the delicate balance of nature in these high-altitude environments and gain a deeper appreciation for the intricate connections between the living organisms and their habitat",
    image: ecosystem,
    date: "15 september, 2023"
  },
];

interface overlayText {
  id: number;
  optionClass: string;
  title: string;
  text: string;
}

export const overlayText: overlayText[] = [
  {
    id: 1,
    optionClass: "mission-block",
    title: "OUR MISSION",
    text:  "our mission is to provide exceptional mountain guiding services and unforgettable experiences for adventurers of all levels. We are dedicated to ensuring the safety, enjoyment, and growth of our clients as they explore the wonders of the mountains\
      Through our expert guidance, we aim to inspire a love for the outdoors, instill confidence in climbers, and help them achieve their mountain goals. With a strong emphasis on professionalism, knowledge, and personalized attention, we create tailored experiences that cater to individual aspirations and abilities.\
      We prioritize safety above all else, adhering to strict industry standards and utilizing the latest techniques and equipment. Our experienced guides are well-versed in mountain terrain, weather conditions, and rescue procedures, ensuring a secure and worry-free adventure for our clients.\
      Whether you're a novice looking to take your first steps in the mountains or an experienced climber seeking new challenges, we are here to guide you every step of the way. Join us at [Your Mountain Guide Name] and let's embark on unforgettable mountain adventures together"
  },
  {
    id: 2,
    optionClass: "partners-block",
    title: "MAIN PARTNERS",
    text: "We are proud to collaborate with esteemed partners who share our passion for mountain exploration and outdoor experiences. These partnerships enhance our services and provide exceptional opportunities for unforgettable mountain adventures.\
        Our longstanding partnership provides top-of-the-line equipment and gear, ensuring safety and performance in the mountains.\
        Adventure Travel Agency: Our collaboration ensures seamless travel arrangements and logistics, allowing clients to focus on their adventure.\
        Environmental Conservation Foundation: Our partnership contributes to environmental conservation efforts and raises awareness about preserving the fragile mountain ecosystems.\
        Mountain Rescue Team: Our collaboration prioritizes client safety with preparedness and emergency response capabilities.\
        Local Guides Association: We connect clients with experienced guides who offer unique insights into the local culture, history, and natural wonders.\
        Together, we create extraordinary mountain experiences while supporting local communities and protecting the mountains' pristine environments."
  },
];

interface mountSlides {
  id: number;
  image: string;
  title: string;
  text: string;
}

export const mountainSlider: mountSlides[] = [
  {
    id: 1,
    image: mountWithney,
    title: "Conquering the Tallest Peak in the United States - Mount Whitney",
    text: "Embark on an awe-inspiring journey to conquer the towering heights of Mount Whitney, located in the United States."
  },
    
  {
    id: 2,
    image: mountKarakoram,
    title: "Conquering the Mighty Karakoram Range",
    text :  "Embark on a daring expedition to conquer the formidable peaks of the Karakoram Range, spanning Pakistan, India, and China."
  },

  {
    id: 3,
    image: mountCook,
    title: "Conquering the Magnificent Mount Cook in New Zealand",
    text:  "Experience the thrill of conquering the majestic heights of Mount Cook, the highest peak in New Zealand.",
  },

  {
    id: 4,
    image: mountMatterhorn,
    title: "Conquering the Iconic Matterhorn in the Swiss Alps",
    text: "Challenge yourself to conquer the iconic Matterhorn, an emblem of the Swiss Alps and a symbol of mountaineering"
  },
  
  {
    id: 5,
    image: mountMoncBlanc,
    title: "Conquering the Majestic Mont Blanc in the French Alps",
    text: "Embark on an unforgettable journey to conquer the majestic heights of Mont Blanc, the highest peak in the Alps"
  },
  
  {
    id: 6,
    image: mountKilimanjaro,
    title: "Conquering the Roof of Africa - Mount Kilimanjaro",
    text: "Embark on an extraordinary adventure to conquer the legendary Mount Kilimanjaro, the highest peak in Africa"
  },
  
  {
    id: 7,
    image: mountAconcagua,
    title: "Conquering the Majestic Aconcagua in the Andes",
    text: "Take on the ultimate challenge of conquering the towering heights of Aconcagua, the highest peak in the Andes"
  },

  {
    id: 8,
    image: mountElbrus,
    title: "Conquering the Mighty Mount Elbrus in Russia",
    text: "Embark on an epic expedition to conquer the mighty heights of Mount Elbrus, the highest peak in Europe"
  },
];

interface marathonTitle {
  title: string
}


export const marathonTitles: marathonTitle[] = [
  {title: "EXPLORE"},
  {title: "EXPEDITIONS"},
  {title: "CHALLENGE"},
  {title: "SUMMIT"}
];

