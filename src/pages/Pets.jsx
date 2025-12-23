import React, { useMemo, useState } from 'react'
import Menubar from '../components/Menubar'
import { FaAccessibleIcon, FaCat, FaDog, FaDove, FaFish, FaFrog, FaOtter } from 'react-icons/fa';
import "../pages/Pet.css"
import { PetImages } from '../assets/assets';

const PETS_DATA = [
  { id: 1, title: 'Golden Retriever', category: 'dog', details: "A friendly, intelligent, and highly affectionate companion known for its patient nature and golden coat", img: PetImages.goldenretriever },
  { id: 2, title: 'Saint Bernard', category: 'dog', details: "A massive, gentle giant originally bred for rescue work, famous for its calm and protective disposition", img: PetImages.saintbernard },
  { id: 3, title: 'German Shepherd', category: 'dog', details: "A versatile and courageous working dog prized for its loyalty, intelligence, and protective instincts", img: PetImages.germanshepherd },
  { id: 4, title: 'Persian Cat', category: 'cat', details: "A glamorous, long-haired feline with a flat face and a very calm, sweet temperament", img: PetImages.persian },
  { id: 5, title: 'Siamese', category: 'cat', details: "A sleek, vocal, and social cat famous for its striking blue eyes and dark \"points\" on its coat", img: PetImages.siamesecat },
  { id: 6, title: 'Goldfish', category: 'fish', details: "A classic aquatic pet available in many varieties, ranging from hardy pond fish to fancy, delicate types", img: PetImages.goldfish },
  { id: 7, title: 'Finches', category: 'bird', details: "Tiny, active, and social songbirds that are best enjoyed for their pleasant chirps and colorful plumage", img: PetImages.finch },
  { id: 8, title: 'Budgies', category: 'bird', details: "Small, intelligent, and highly social parrots that are popular for their ability to mimic speech and vibrant colors", img: PetImages.budgies },
  { id: 9, title: 'Guinea Pig', category: 'small mammals', details: "A social and vocal rodent known for its \"wheeking\" sounds and gentle, docile temperament", img: PetImages.guineapig },
  { id: 10, title: 'Rabbit', category: 'small mammals', details: "A long-eared, hopping herbivore that can be highly social and even litter-trained for indoor living", img: PetImages.rabbit },
  { id: 11, title: 'Green Turtle', category: 'reptile', details: "A graceful marine herbivore known for its smooth, olive-colored shell and incredible long-distance migrations", img: PetImages.greenturtle },
  { id: 12, title: 'Rottweiler', category: 'dog', details: "A robust and confident guardian that is deeply devoted to its family while remaining wary of strangers", img: PetImages.rottweiler },
  { id: 13, title: 'Boerboel', category: 'dog', details: "A powerful South African mastiff bred for farm guarding, known for its immense strength and steady nerves", img: PetImages.boerboel },
  { id: 14, title: 'Caucasian Shepherd', category: 'dog', details: "A fearless and formidable livestock guardian with a thick coat and a fierce instinct to protect its territory", img: PetImages.caucasianshepherd },
  { id: 15, title: 'Turkish Kangal', category: 'dog', details: "A legendary guardian from Turkey, renowned for its massive size, incredible bite force, and calm alertness", img: PetImages.kangal },
  { id: 16, title: 'Toy Pomeranian', category: 'dog', details: "A tiny, spirited \"puff-ball\" with a bold personality and a thick, luxurious double coat", img: PetImages.pomenranian },
  { id: 17, title: 'American Eskimo', category: 'dog', details: "A striking, white-coated companion valued for its high intelligence, alertness, and agility", img: PetImages.eskimo },
  { id: 18, title: 'Lhasa Apso', category: 'dog', details: "A small but sturdy Tibetan breed known for its long, flowing hair and independent, watchful character", img: PetImages.lhasaapso },
  { id: 19, title: 'Dobberman Pinscher', category: 'dog', details: "A sleek and athletic protector that combines elegant looks with sharp intelligence and speed", img: PetImages.doberman },
  { id: 20, title: 'Great Dane', category: 'dog', details: "An impressively tall and elegant breed often called the \"Apollo of dogs\" for its gentle and friendly soul", img: PetImages.greatdane },
  { id: 21, title: 'Chow Chow', category: 'dog', details: "A dignified and aloof breed from China, recognizable by its lion-like mane and unique blue-black tongue", img: PetImages.chowchow },
  { id: 22, title: 'Alabai', category: 'dog', details: "An ancient, powerful livestock guardian known for its independence, endurance, and quiet confidence", img: PetImages.alabai },
  { id: 23, title: 'Shitzu', category: 'dog', details: "A playful and affectionate \"lion dog\" bred for royalty, characterized by its sweet nature and silky hair", img: PetImages.shitzu },
  { id: 24, title: 'American Bulldog', category: 'dog', details: "A sturdy and athletic utility dog with a high energy level and a deeply loyal bond to its owners", img: PetImages.americanbulldog },
  { id: 25, title: 'American Bully', category: 'dog', details: "A modern companion breed known for its heavy, muscular build and surprisingly gentle, outgoing temperament", img: PetImages.americanbully },
  { id: 26, title: 'American Pitbull', category: 'dog', details: "An enthusiastic and resilient athlete that is famously people-oriented and eager to please", img: PetImages.americanpitbull },
  { id: 27, title: 'Siberian Husky', category: 'dog', details: "A stunning, wolf-like sled dog known for its high energy, talkative nature, and striking blue or brown eyes", img: PetImages.siberianhusky },
  { id: 28, title: 'Cane Corso', category: 'dog', details: "A majestic Italian mastiff that serves as a highly capable protector with a noble and assertive presence", img: PetImages.canecorso },
  { id: 29, title: 'French Bulldog', category: 'dog', details: "A playful, low-energy companion known for its \"bat ears,\" smashed face, and adaptable personality", img: PetImages.frenchbulldog },
  { id: 30, title: 'British Bulldog', category: 'dog', details: "A thick-set, courageous symbol of persistence with a calm temperament and a distinctive heavy-wrinkled face", img: PetImages.britishbulldog },
  { id: 31, title: 'Poodle', category: 'dog', details: "An exceptionally smart and athletic dog that comes in three sizes, famous for its hypoallergenic, curly coat", img: PetImages.poodle },
  { id: 32, title: 'Chihuahua', category: 'dog', details: "A tiny dog with a massive personality, known for being fiercely loyal to its favorite person and very alert", img: PetImages.chihuahua },
  { id: 33, title: 'Cocker Spaniel', category: 'dog', details: "A merry and gentle sporting dog characterized by its long, velvety ears and soulful, expressive eyes", img: PetImages.cockerspaniel },
  { id: 34, title: 'Tibetan Mastiff', category: 'dog', details: "A massive, nocturnal guardian with a thick mane and a highly independent, protective nature", img: PetImages.tibetanmastiff },
  { id: 35, title: 'Neopolitan Mastiff', category: 'dog', details: "A heavy-boned guardian easily recognized by its loose, wrinkled skin and imposing, pendulous jowls", img: PetImages.neopolitanmastiff },
  { id: 36, title: 'Samoyed', category: 'dog', details: "A stunning, white-coated herder famous for its \"Sammy smile\" and friendly, social disposition", img: PetImages.samoyed },
  { id: 37, title: 'Dalmatian', category: 'dog', details: "A sleek and high-endurance athlete instantly recognizable by its unique black or liver-colored spots", img: PetImages.dalmatian },
  { id: 38, title: 'Great Pyrenees', category: 'dog', details: "A majestic, white livestock guardian known for its zen-like calm and steadfast devotion to its flock", img: PetImages.greatpyrenees },
  { id: 39, title: 'Labrador Retriever', category: 'dog', details: "America's longtime favorite, prized for its versatile athletic ability and warm, outgoing nature", img: PetImages.labrador },
  { id: 40, title: 'Dogo Argentino', category: 'dog', details: "A powerful, white short-coated hunter bred for stamina, strength, and unwavering bravery", img: PetImages.dogoargentino },
  { id: 41, title: 'Belgian Malinois', category: 'dog', details: "A world-class working dog with intense drive and intelligence, often used in elite police and military roles", img: PetImages.belgianmalinois },
  { id: 42, title: 'Pug', category: 'dog', details: "A charming and mischievous small dog known for its wrinkled face, curled tail, and big personality", img: PetImages.pug },
  { id: 43, title: 'Domestic Shorthair', category: 'cat', details: "A versatile and hardy cat of mixed ancestry, found in nearly every color and personality imaginable", img: PetImages.domesticshorthair },
  { id: 44, title: 'Bengal', category: 'cat', details: "A high-energy, athletic cat that looks like a miniature wild leopard with its distinct spots or marbling", img: PetImages.bengal },
  { id: 45, title: 'Turkish Van', category: 'cat', details: "A rare, water-loving cat known for its \"van\" pattern—color only on the head and tail—and powerful build", img: PetImages.turkishvan },
  { id: 46, title: 'Turkish Angora', category: 'cat', details: "An elegant, silky-coated cat prized for its grace, intelligence, and playful nature", img: PetImages.angoracat },
  { id: 47, title: 'Mainecoon', category: 'cat', details: "A \"gentle giant\" of the cat world, known for its massive size, tufted ears, and bushy tail", img: PetImages.mainecoon },
  { id: 48, title: 'Ragdoll', category: 'cat', details: "A large, affectionate cat that famously goes limp with relaxation when held", img: PetImages.ragdoll },
  { id: 49, title: 'British Shorthair', category: 'cat', details: "A stocky, plush-coated cat with a round face and a calm, dignified \"Teddy bear\" appearance", img: PetImages.britishshorthair },
  { id: 50, title: 'American Shorthair', category: 'cat', details: "A powerful, even-tempered hunter known for its longevity and distinctive silver tabby patterns", img: PetImages.americanshorthair },
  { id: 51, title: 'Scottish Fold', category: 'cat', details: "A sweet-natured cat easily identified by its unique ears that fold forward and downward", img: PetImages.scottishfold },
  { id: 52, title: 'Bombay', category: 'cat', details: "A sleek, jet-black cat bred to look like a miniature panther with striking copper or gold eyes", img: PetImages.bombaycat },
  { id: 53, title: 'Senegalese Parrot', category: 'bird', details: "A medium-sized, charismatic bird known for its quiet nature, striking yellow-and-green plumage, and loyalty", img: PetImages.parrot },
  { id: 54, title: 'Pigeon', category: 'bird', details: "A hardy and intelligent bird with a remarkable homing instinct and a long history of living alongside humans", img: PetImages.pigeon },
  { id: 55, title: 'Ostrich', category: 'bird', details: "The world’s largest and fastest-running bird, known for its powerful legs, flightless nature, and giant eggs", img: PetImages.ostrich },
  { id: 56, title: 'Peacock', category: 'bird', details: "A magnificent and ornamental bird famous for the male’s massive, iridescent tail feathers used in stunning displays", img: PetImages.peacock },
  { id: 57, title: 'Canary', category: 'bird', details: "Solitary and cheerful singers prized for their beautiful melodies and bright, sunny feathers", img: PetImages.canary },
  { id: 58, title: 'Monitor Lizard', category: 'reptile', details: "A highly intelligent and powerful reptile ranging from small species to giants like the Komodo dragon", img: PetImages.monitorlizard },
  { id: 59, title: 'Mouse', category: 'small mammals', details: "A small, active, and curious pocket pet that is fascinating to watch and relatively easy to care for", img: PetImages.mouse },
  { id: 60, title: 'Aquarium', category: 'fish', details: "A controlled aquatic ecosystem that serves as both a habitat for pets and a tranquil piece of living decor", img: PetImages.aquarium },
  { id: 61, title: 'Indoor bird cage', category: 'bird', details: "A secure and enriched habitat designed to provide a safe living space and exercise area for pet birds", img: PetImages.birdcage },
];


const CATEGORIES = [
  { id: 'dog', label: 'Dog', icon: <FaDog /> },
  { id: 'cat', label: 'Cat', icon: <FaCat /> },
  { id: 'fish', label: 'Fish', icon: <FaFish /> },
  { id: 'small mammals', label: 'Small Mammals', icon: <FaOtter /> },
  { id: 'bird', label: 'Bird', icon: <FaDove /> },
  { id: 'reptile', label: 'Reptile', icon: <FaFrog /> },
];

const Pets = () => {

    // State for the currently selected category (defaults to 'dog')
  const [selectedCategory, setSelectedCategory] = useState('dog');
  // State for the search input
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering Logic
  const filteredPets = useMemo(() => {
    return PETS_DATA.filter((pet) => {
      const matchesCategory = pet.category === selectedCategory;
      const matchesSearch = pet.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);





  return (
    <div>
        <div style={{position: "sticky", top: 0, zIndex: "10"}}>
          <Menubar />
        </div>

      <div className="pets">
        <div className="store-container">
      <header className="store-header">
        <h2>Find Your Perfect Companion</h2>
        
        {/* Search Bar */}
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder={`Search in ${selectedCategory}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </header>

      {/* Category Navigation */}
      <nav className="category-nav">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory(cat.id);
              setSearchQuery(''); // Optional: clear search when switching categories
            }}
          >
            <div className="icon-box">{cat.icon}</div>
            <span className="category-label">{cat.label}</span>
          </button>
        ))}
      </nav>

      {/* Pet Cards Grid */}
      <main className="pets-grid">
          {filteredPets.length > 0 ? (
          filteredPets.map((pet) => (
            <div key={pet.id} className="pet-card">
              <div className="card-image">
                {(() => {
                  const src = pet.img;
                  const isImageSrc = typeof src === 'string' && (
                    src.startsWith('/') || src.startsWith('./') || src.endsWith('.png') || src.endsWith('.jpg') || src.endsWith('.jpeg') || src.startsWith('data:')
                  );
                  return isImageSrc ? (
                    <img src={src} alt={pet.title} />
                  ) : (
                    src
                  );
                })()}
              </div>
              <div className="card-content">
                <h3>{pet.title}</h3>
                <p className="details">{pet.details}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No pets found matching "{searchQuery}" in this category.</p>
          </div>
        )}
      </main>
    </div>
      </div>
    
    </div>
  )
}



// --- Icon Components (Simple SVGs) ---
// function DogIcon() {
//   return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.296 2.486C8.24 13.578 11 15 11 15l2 6.17a6.6 6.6 0 0 1-5 0" /><path d="M14 5.172C14 3.782 15.577 2.679 17.5 3c2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.296 2.486C15.76 13.578 13 15 13 15l-2 6.17a6.6 6.6 0 0 0 5 0" /></svg>;
// }
// function CatIcon() {
//   return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 3.5-2.5 4-2.5 1.5 5 2.5 6.5 2.5 8 0 4-5.224 9-8.5 9s-8.5-5-8.5-9c0-1.5 1-3 2.5-8 .5 0 2.22.5 4 2.5.65-.17 1.33-.26 2-.26Z" /></svg>;
// }
// function FishIcon() {
//   return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6.5 12c.94-3.46 4.968-6 8.5-6 3.532 0 8 3 8 9s-4.468 9-8 9c-3.532 0-7.56-2.54-8.5-6" /><path d="M6 12c-3.263 0-4.812.5-5.5 2-.689 1.5.5 4 1.5 4" /><path d="M6 12c-3.263 0-4.812-.5-5.5-2-.689-1.5.5-4 1.5-4" /></svg>;
// }
// function MouseIcon() {
//   return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 6c-3.3 0-6 2.7-6 6v3c0 3.3 2.7 6 6 6s6-2.7 6-6v-3c0-3.3-2.7-6-6-6Z" /><path d="M6 12c0-1.7 1.3-3 3-3" /><path d="M18 12c0-1.7-1.3-3-3-3" /></svg>;
// }
// function BirdIcon() {
//   return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 7c0-1.7-1.3-3-3-3h-2c-1.7 0-3 1.3-3 3v4c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3V7Z" /><path d="M4 15l3-3" /><path d="M20 15l-3-3" /></svg>;
// }
// function ReptileIcon() {
//   return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="8" width="18" height="12" rx="4" /><path d="M8 8V6a2 2 0 0 1 4 0v2" /><path d="M16 8V6a2 2 0 0 0-4 0v2" /></svg>;
// }

export default Pets