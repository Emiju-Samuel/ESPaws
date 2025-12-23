import React, { useState } from 'react'
import Menubar from '../components/Menubar'
import "../pages/Blog.css"
import { PetImages } from '../assets/assets'

const samplePosts = [
  {
    id: 1,
    title: 'The Right Fit: A Beginner\'s Guide to Choosing Your Forever Companion',
    subtitle: 'Stop guessing and start bonding. Learn the key factors—from energy level to necessary commitment—before bringing home a new friend.',
    image: PetImages.blog1,
    content: `Choosing a lifelong companion is a transformative decision that requires a thoughtful balance between emotional connection and the practical realities of your daily life. It begins with an honest assessment of your activity level, as bringing a high-energy dog into a sedentary lifestyle or a quiet apartment can lead to stress for both the owner and the animal. Beyond the initial excitement, you must consider the long-term commitment of time, which ranges from the social demands of highly intelligent birds and canines to the specialized habitat maintenance required for fish and reptiles. Financial preparedness also plays a vital role, spanning far beyond the initial purchase to include high-quality nutrition, routine veterinary wellness checks, and the inevitable emergency costs that arise over a pet's lifetime. Furthermore, understanding the natural lifespan of your chosen friend—whether it is the three-year journey of a hamster or the multi-decade commitment of a tortoise—ensures that your future self is just as prepared for guardianship as you are today. By prioritizing compatibility over aesthetics and preparation over impulse, you move away from the uncertainty of guessing and step into a rewarding, harmonious bond that will flourish for years to come.`
  },
  {
    id: 2,
    title: 'Dog, Cat, or Guinea Pig? How to Match the Perfect Pet to Your Current Lifestyle',
    subtitle: 'Our comprehensive checklist breaks down family needs, housing space, and time commitment to ensure a happy match.',
    image: PetImages.blog2,
    content: [
      "Selecting a new pet requires an honest evaluation of your physical environment and the daily rhythms of your household to ensure a harmonious transition for everyone involved. For those living in spacious suburban homes with fenced yards, a dog often becomes the ideal active companion, yet it is essential to remember that canine ownership demands a significant daily time commitment for exercise, training, and social interaction that may not suit a busy professional or someone residing in a high-rise apartment. Conversely, cats offer a more adaptable presence for smaller living spaces and busier schedules, providing deep emotional bonds and companionship without the necessity of outdoor walks or constant supervision. By aligning the physical constraints of your housing with the natural instincts of the animal, you create a foundation where both the pet and the owner can thrive without the stress of an overcrowded or under-stimulating environment.",
      "Beyond the walls of your home, the specific needs of your family members and the hours you can realistically dedicate to care will ultimately define the success of your pet match. Guinea pigs and other small mammals are often celebrated as excellent entry-level pets for families with children, yet they require specialized attention to their diet, cage cleanliness, and gentle handling that must be overseen by a committed adult. While a guinea pig might fit perfectly into a quiet, structured routine, it may not be the right fit for a highly chaotic household with loud noises or predatory larger pets. Choosing the right companion is less about finding the \"best\" animal and more about identifying which creature’s lifespan, financial requirements, and social needs naturally intersect with your current life stage. When you prioritize this logistical compatibility alongside your emotional desire for a pet, you ensure that the bond you build is based on a sustainable, lifelong commitment rather than a fleeting impulse."
    ]
  },
  {
    id: 3,
    title: 'The First 48 Hours: 5 Essential Accessories Every New Puppy or Kitten Needs',
    subtitle: 'Get prepared! We detail the must-have gear—from safe bedding to premium food—that guarantees a smooth transition home.',
    image: PetImages.blog3,
    content: [
      "The initial transition from a shelter or breeder to a new home is a period of immense sensory overload for a young animal, making the preparation of a dedicated \"safe zone\" the most critical task of your first day. At the heart of this space should be a high-quality, size-appropriate bed that offers both warmth and a sense of security, allowing your new puppy or kitten to retreat and decompress whenever they feel overwhelmed by their new surroundings. Surrounding this area with a few familiar scents and ensuring it is located in a low-traffic part of the house will help minimize anxiety during those first few hours. By establishing this physical anchor early on, you provide your pet with a reliable home base that serves as their sanctuary while they slowly build the confidence to explore the rest of your living space.",
      "Once the environment is set, focusing on the biological essentials of nutrition and hydration ensures that your pet’s physical health remains stable during the stress of moving. It is vital to have stainless steel or ceramic food and water bowls ready, as these materials are durable and less likely to harbor bacteria compared to porous alternatives. Choosing a premium, age-specific formula of food is equally important, ideally staying consistent with what the pet was previously eating to avoid digestive upset during the first forty-eight hours. Providing constant access to fresh water and a consistent feeding schedule not only supports their growing bodies but also helps establish a routine, which is one of the fastest ways to build trust and help a new kitten or puppy feel that their needs will always be met in this new environment.",
      "The final layer of a successful home-coming involves the tools for safety and mental engagement, which prevent accidents and foster early bonding. A sturdy, adjustable collar or harness equipped with an identification tag is a non-negotiable safety item, even if you don't plan on going for long walks immediately, as it ensures your pet can be identified if they slip through an open door in a moment of curiosity. Complementing this safety gear with age-appropriate, durable chew toys or scratchers provides a constructive outlet for their natural instincts and helps protect your furniture from teething or clawing. When these essential accessories are in place before the pet arrives, you eliminate the chaos of last-minute shopping trips, allowing you to spend every moment of those first two days focused entirely on cuddling and connecting with your new best friend."
    ]
  },
  {
    id: 4,
    title: 'Don\'t Forget These! Your Crucial New Pet Starter Kit Checklist',
    subtitle: 'Avoid emergency trips to the store with our expert-approved list of bowls, leashes, travel crates, and comfort items.',
    image: PetImages.blog4,
    content: [
      "The excitement of bringing home a new pet often leads to a focus on the most obvious items like food and beds, but a truly comprehensive starter kit begins with the less glamorous essentials of hygiene and sanitation. For dog owners, this means having a steady supply of biodegradable waste bags and a sturdy scooper, while cat owners must prioritize a high-sided litter box and a tracking-mat to keep the home environment clean and odor-free. It is equally important to invest in an enzymatic cleaner specifically designed to break down pet accidents, as standard household cleaners often fail to remove the pheromones that tempt animals to revisit the same spot. By securing these sanitation tools before your pet arrives, you establish a standard of cleanliness that makes the adjustment period much more manageable for everyone in the household.",
      "Once the logistical needs of cleanliness are met, the focus shifts toward the long-term health and physical maintenance of your new companion through specialized grooming and wellness tools. Every starter kit should include a species-appropriate brush or comb to manage shedding and skin health, alongside a set of pet-safe nail clippers to prevent painful overgrowth. Dental health is another frequently neglected area, so including a finger-brush and pet-formulated toothpaste in your initial kit can save you from expensive veterinary dental cleanings in the future. Integrating these grooming habits into your daily routine during the first week not only keeps your pet looking their best but also serves as a vital bonding activity that builds trust through physical touch and gentle care.",
      "The final component of a successful starter kit involves the critical elements of safety and emergency preparedness that provide peace of mind during unexpected situations. A well-ventilated, secure travel carrier or a crash-tested car harness is essential for safe transportation to and from the veterinarian or during family trips. Inside your home, you should have a basic pet first-aid kit containing antiseptic wipes, gauze, and a digital thermometer, as well as a clear list of emergency contact numbers for the nearest 24-hour animal hospital. Finally, ensuring your pet is equipped with a microchip and a physical ID tag creates a permanent safety net that greatly increases the chances of a happy reunion should they ever wander off. When you approach your starter kit with this level of detail, you move beyond mere ownership and step into a role of responsible and prepared guardianship."
    ]
  },
  {
    id: 5,
    title: 'Decoding Pet Nutrition: Understanding the 5 Key Ingredients for Optimal Pet Health',
    subtitle: 'Our guide simplifies complex labels, helping you choose the best premium food to fuel a longer, happier life for your companion.',
    image: PetImages.blog5,
    content: [
      "Understanding the foundation of pet nutrition begins with identifying high-quality protein sources, which serve as the essential building blocks for your companion’s muscles, organs, and immune system. When examining a label, the primary ingredient should always be a clearly named animal protein, such as chicken, beef, or salmon, rather than a vague \"meat by-product\" or \"animal meal\" that can often contain inconsistent nutritional value. These premium proteins provide the vital amino acids necessary for maintaining a lean body mass and a healthy heart, ensuring that your pet has the raw energy required for daily play and long-term vitality. By prioritizing identifiable animal tissues as the lead ingredient, you are ensuring that your pet’s diet is biologically appropriate and easily digestible for maximum nutrient absorption.",
      "Complementary to protein, the inclusion of healthy fats and complex carbohydrates provides the sustained energy and cognitive support required for a flourishing life. Quality fats like omega-3 and omega-6 fatty acids, often derived from fish oil or flaxseed, are crucial for maintaining a shiny coat and healthy skin while also supporting brain development and joint lubrication. Meanwhile, complex carbohydrates such as sweet potatoes or brown rice offer a steady release of glucose into the bloodstream, avoiding the energy crashes associated with cheap fillers like corn or soy. When these energy sources are balanced correctly, they work in tandem to support your pet’s metabolic health and provide the fiber necessary for a smooth-functioning digestive tract.",
      "The final pillars of optimal pet health are found in the concentrated vitamins and minerals that bolster long-term immunity and cellular repair. Premium pet foods often fortify their recipes with antioxidants from real fruits and vegetables, such as blueberries and spinach, which help neutralize free radicals and protect against the effects of aging. Essential minerals like calcium and phosphorus must also be present in precise ratios to ensure strong bone structure and dental health, especially during the growth phases of puppies and kittens. By choosing a diet that incorporates these micro-nutrients through whole-food sources rather than synthetic additives, you are providing a comprehensive nutritional shield that supports your companion’s health from the inside out."
    ]
  },
  {
    id: 6,
    title: 'Is Your Pet Food Lying to You? Simple Ways to Spot Quality Ingredients',
    subtitle: 'Learn what terms like "by-product" and "meal" really mean, and discover the essential vitamins and proteins for peak wellness.',
    image: PetImages.blog6,
    content: [
      "Navigating the complex world of pet food labeling requires a critical eye for the specific terminology used in ingredient lists, as manufacturers often use vague language to mask the true quality of their protein sources. When you see the term \"meat by-product\" on a label, it typically refers to the non-rendered, clean parts of a carcass other than meat, which can include organs but may also encompass less nutritious tissues that vary significantly in quality. In contrast, a \"meat meal\" is a rendered product that has been dried and concentrated, which can actually be a highly dense source of protein if the source animal is clearly named, such as \"chicken meal\" or \"lamb meal.\" By learning to distinguish between these terms, you can ensure that the primary source of nutrition for your pet is coming from identifiable, high-quality animal tissues rather than mystery mixtures that provide inconsistent biological value.",
      "Beyond the protein source, the overall quality of a pet food is often revealed by the presence of fillers and synthetic additives that provide little more than empty calories. Truly premium nutrition avoids heavy reliance on corn, wheat, and soy, which are frequently used to bulk up the product but can lead to digestive sensitivities and energy fluctuations in many animals. Instead, superior brands focus on providing essential vitamins and minerals through whole-food inclusions like carrots, spinach, and blueberries, which naturally deliver the antioxidants needed for cellular repair and a strong immune system. When you scan a label and find a diverse range of recognizable vegetables and fruits near the top of the list, it is a strong indicator that the brand is prioritizing a nutrient-dense, balanced diet that supports your pet’s health from the inside out.",
      "The final step in verifying the integrity of your pet’s diet involves looking for the balance of healthy fats and the absence of artificial preservatives that can compromise long-term wellness. Essential fatty acids, such as those found in salmon oil or flaxseed, are non-negotiable for maintaining a lustrous coat, healthy skin, and cognitive function, yet they are easily degraded if not preserved correctly. High-quality foods avoid chemical preservatives like BHA or BHT in favor of natural tocopherols, which are forms of Vitamin E that protect the food without introducing potentially harmful synthetic compounds into your pet's body. By choosing foods that prioritize these natural stabilization methods and clear, transparent ingredient sourcing, you move past the marketing hype and provide your companion with a foundation for a peak wellness and a significantly longer, more vibrant life."
    ]
  },
  {
    id: 7,
    title: 'Responsible Breeding: What to Look for in a High-Quality Stud Service',
    subtitle: 'Elevate your breeding program. We cover genetic screening, professional management, and the ethical standards you should demand.',
    image: PetImages.blog7, // Fix: Added 'content' key before the array of strings
    content: [
      "The foundation of a successful and responsible breeding program begins with a commitment to health that extends far beyond a simple physical examination. When evaluating a potential stud service, the primary indicator of quality is a comprehensive suite of genetic screening and health clearances specific to the breed, ensuring that hereditary conditions are not passed down to future generations. A reputable stud owner will provide authenticated documentation for hip and elbow certifications, cardiac evaluations, and DNA testing for breed-specific predispositions, demonstrating a proactive approach to canine wellness. By demanding this level of transparency, breeders can make informed decisions that prioritize the long-term health and structural integrity of the litter over mere aesthetics or popularity.",
      "Beyond biological health, the professional management and temperament of the stud dog play a pivotal role in the quality of the breeding service. A high-quality stud should exhibit a stable, predictable temperament that adheres to the breed standard, as behavioral traits are just as inheritable as physical characteristics. Professional management also encompasses the technical aspects of the service, including the use of modern reproductive technologies like chilled or frozen semen shipping and precise ovulation timing to ensure the highest probability of a successful pregnancy. A stud owner who invests in professional handling and veterinary oversight during the breeding process provides a level of security and expertise that protects the welfare of both animals involved while maximizing the potential for a healthy, vibrant litter.",
      "The final hallmark of a superior stud service is a rigid adherence to ethical standards and a deep-seated passion for the improvement of the breed. Responsible stud owners do not offer their services to every applicant; instead, they carefully vet potential mates to ensure that the pairing will truly enhance the lineage and that the resulting puppies will be placed in responsible homes. This ethical framework includes a clear, written contract that outlines the responsibilities of both parties, including guarantees for litter size or re-breeding policies in the event of a failed pregnancy. By choosing to work with providers who view breeding as a serious responsibility rather than a casual transaction, you contribute to a culture of excellence that preserves the best qualities of the breed for years to come."
    ]
  },
  {
    id: 8,
    title: 'Beyond Pedigree: Why Genetic Health Testing is Non-Negotiable for Your Next Litter',
    subtitle: 'Protect the breed and the dam. Understand the critical health clearances and professionalism required for a successful, healthy breeding outcome.',
    image: PetImages.blog8,
    content: [
      "A prestigious pedigree or a collection of show ribbons may indicate that a dog meets the aesthetic standards of its breed, but these surface-level accolades offer no guarantee of the hidden genetic health that truly defines a quality litter. Genetic health testing has become a non-negotiable standard in responsible breeding because it allows owners to peer beneath the surface and identify carriers of recessive disorders that could devastate the lives of future puppies and their owners. By utilizing modern DNA panels, breeders can screen for specific conditions such as progressive retinal atrophy, degenerative myelopathy, and exercise-induced collapse before a mating ever takes place. This scientific approach shifts the focus from hope to certainty, ensuring that the legacy of the dam and the sire is one of vitality and strength rather than a continuation of preventable hereditary suffering.",
      "The scope of health clearances must also extend into physical structural evaluations conducted by specialized veterinary professionals to complement the data provided by DNA testing. Professionalism in breeding requires a commitment to obtaining official certifications from organizations like the Orthopedic Foundation for Animals to assess hip and elbow dysplasia, as well as cardiac and ophthalmologist evaluations to confirm that the breeding pair is physically capable of producing healthy offspring. These clearances are not merely suggestions but are the essential evidence that a breeder is prioritizing the welfare of the dam and the long-term mobility of her puppies over a quick turnaround or convenience. When both genetic data and physical certifications are aligned, the resulting breeding outcome is grounded in a holistic understanding of the animal's biology, significantly reducing the risk of chronic pain or early-onset illness for the next generation.",
      "Ultimately, the decision to invest in comprehensive health testing reflects an ethical standard that values the preservation of the breed’s future over short-term gains. Professionalism in this field means maintaining detailed, transparent records of all health outcomes and being willing to remove a dog from a breeding program if the results indicate a risk to the lineage. This level of dedication protects the emotional and financial well-being of future families, who can bring home a new companion with the peace of mind that comes from knowing their pet was bred with the highest level of scientific and ethical oversight. By making genetic testing a non-negotiable part of your protocol, you elevate your breeding program to a position of leadership, contributing to a global community that cherishes the health, happiness, and longevity of every animal brought into the world."
    ]
  },
  {
    id: 9,
    title: 'Solving Separation Anxiety: Simple Steps to Keep Your Pet Happy While You\'re Away',
    subtitle: 'Expert behavioral advice to reduce stress, prevent destructive chewing, and ensure your pet feels secure when left alone.',
    image: PetImages.blog9,
    content: [
      "Addressing separation anxiety begins with desensitizing your pet to the specific cues that signal your departure, which often trigger a spike in stress before you even leave the house. Many pets begin to panic the moment they hear the jingle of car keys or see their owner putting on a coat, so it is vital to perform these actions throughout the day without actually leaving, thereby breaking the association between these items and your absence. By normalizing these \"departure triggers\" in a low-stakes environment, you help your pet maintain a lower baseline of anxiety, making the eventual moment of your exit feel like a routine event rather than a distressing abandonment. This psychological groundwork creates a calmer atmosphere that allows your pet to remain in a relaxed state of mind as you transition out of the home.",
      "The physical environment you leave behind plays an equally important role in preventing destructive behaviors like chewing or scratching, which are often outlets for pent-up nervous energy. Providing high-value interactive toys, such as food-stuffed rubber puzzles or long-lasting chews, can redirect your pet’s focus toward a rewarding task that keeps their mind engaged during the first thirty minutes of your absence, which is typically the most stressful window. Additionally, creating a \"comfort zone\" equipped with a familiar bed and perhaps a piece of your recently worn clothing can provide a soothing scent-based reassurance that helps them feel secure. When a pet is occupied with a constructive activity in a comfortable setting, they are far less likely to seek out household items as a way to cope with their isolation, turning a potentially destructive time into a period of restful independence.",
      "Long-term success in overcoming separation anxiety is found in the gradual build-up of your time away and the maintenance of a low-key atmosphere during both departures and homecomings. It is essential to avoid overly emotional goodbyes or highly energetic greetings, as these intense interactions only serve to highlight the contrast between your presence and your absence, making the time you spend apart feel more significant. Instead, aim for a neutral, calm demeanor that reinforces the idea that coming and going is a natural, non-eventful part of the day. By slowly increasing the duration of your absences while consistently rewarding calm behavior, you build your pet’s \"independence muscle,\" eventually reaching a point where they feel completely safe and secure waiting for your return, regardless of how long the day may be."
    ]
  },
  {
    id: 10,
    title: 'Crate vs. Playpen: Which Setup is Right for House Training Your New Puppy?',
    subtitle: 'Compare the pros and cons of confinement options and discover techniques to create a safe, positive training space.',
    image: PetImages.blog10,
    content: [
      "The decision between a crate and a playpen often hinges on your specific training goals and the amount of time you can realistically dedicate to active supervision throughout the day. A crate utilizes a puppy’s natural denning instinct to keep their sleeping area clean, making it the most effective tool for rapid house training because it encourages them to hold their bladder until they are taken outside. However, because of its confined nature, a crate requires a strict schedule of frequent potty breaks and should never be used as a place for long-term isolation. When used correctly, the crate becomes a secure sanctuary where the puppy feels safe and calm, but it demands a higher level of owner commitment to ensure the puppy is not confined for longer than their physical development allows.",
      "In contrast, a playpen offers a \"long-term confinement\" solution that provides more freedom for movement while still protecting your home from unsupervised accidents and destructive chewing. Playpens are ideal for owners who may be away for longer periods, as they allow enough space for a sleeping area, a play zone, and a designated \"potty pad\" or indoor turf patch if outdoor access isn't immediately possible. While this setup reduces the immediate pressure on the puppy’s bladder control and prevents the stress of tight confinement, it can sometimes slow down the house training process because the puppy becomes accustomed to relieving themselves within their living enclosure. Choosing a playpen is often a matter of lifestyle flexibility, providing a safe environment for play and exploration while keeping the puppy’s mischievous impulses contained.",
      "Ultimately, the most successful training programs often involve a hybrid approach that leverages the strengths of both tools to create a balanced environment for growth and learning. You might utilize the crate for overnight sleeping and focused nap times to build bladder strength, while transitioning the puppy to a playpen during the day to allow for independent play and safe socialization with the rest of the household. Regardless of the setup you choose, the key to success lies in creating positive associations with these spaces by using high-value treats and comfortable bedding to ensure the puppy never views confinement as a punishment. By thoughtfully integrating these tools into your daily routine, you provide your new companion with the structure they need to thrive and the boundaries necessary to become a well-adjusted member of your family."
    ]
  },
  {
    id: 11,
    title: 'Summer Pet Safety Checklist: Protecting Your Companion from the Heat',
    subtitle: 'Learn the warning signs of heatstroke, discover cooling gear, and prepare your outdoor spaces for a safe, fun summer season.',
    image: PetImages.blog11,
    content: [
      "As temperatures climb, the most critical step in summer pet safety is acknowledging that animals cannot regulate their body temperature through sweating as efficiently as humans, making them highly susceptible to heat exhaustion. Preparing your home and yard for the season starts with providing multiple sources of fresh, cool water and ensuring that any outdoor area has significant, reliable shade that moves with the sun throughout the day. For pets that spend time on patios or walks, it is essential to test the pavement temperature with the back of your hand, as asphalt can become hot enough to cause second-degree burns on sensitive paw pads within seconds. Integrating cooling gear, such as pressure-activated gel mats or reflective sun-shades, into your pet's environment can provide a much-needed thermal refuge when the midday sun reaches its peak.",
      "Recognizing the early warning signs of heatstroke is a life-saving skill that every pet owner must master before the first heatwave arrives. Unlike a typical tired pet, an animal suffering from heat stress will exhibit excessive, frantic panting that does not subside with rest, often accompanied by dark red or purple gums and a glazed expression in their eyes. If you notice your companion becoming unusually lethargic, stumbling, or vomiting after being in the heat, it is vital to move them to a cool, air-conditioned space immediately and begin the cooling process with lukewarm—never ice-cold—water on their paws and underbelly. Understanding these physiological red flags allows you to intervene before the condition escalates into a medical emergency, ensuring that a fun day in the sun doesn't turn into a trip to the urgent care clinic.",
      "Managing summer activities requires a fundamental shift in your daily routine to prioritize the cooler hours of the early morning or late evening for exercise and play. High-intensity activities like fetching or running should be strictly avoided during the heat of the day, as the internal body temperature of a pet can rise to dangerous levels long before they show outward signs of distress. If you must be outdoors, frequently offer water and consider using a portable misting fan or a damp cooling vest to help dissipate heat from their core. By maintaining a vigilant eye on the weather forecast and adjusting your expectations for your pet’s activity level, you can enjoy the vibrant energy of the summer season while keeping your companion’s health and comfort as your absolute priority."
    ]
  },
  {
    id: 12,
    title: 'Essential Tips for Keeping Pets Warm and Active in the Cold',
    subtitle: 'From paw protection to cold-weather nutrition, ensure your pet stays safe, cozy, and mentally stimulated during the chilly months.',
    image: PetImages.blog12,
    content: [
      "As the temperature drops, protecting your pet’s extremities becomes the first line of defense against the harsh winter elements. Paws are particularly vulnerable to the hidden dangers of the season, as ice, snow, and chemical de-icing salts can lead to painful cracking, chemical burns, or even toxicity if a pet licks their paws after a walk. Applying a thick layer of pet-safe paw wax or training your companion to wear insulated booties provides a necessary barrier against these irritants while also preventing the buildup of uncomfortable ice balls between their toes. For short-haired breeds or senior pets with slower circulation, a well-fitted fleece or windproof jacket is not just a fashion choice but a vital tool for maintaining a stable core body temperature during outdoor excursions, ensuring that their daily exercise remains a source of joy rather than a struggle against the cold.",
      "Beyond external gear, winter safety requires a nuanced understanding of how cold weather alters your pet’s internal nutritional and hydration needs. Animals that spend significant time outdoors or in drafty environments often expend more calories simply to generate enough body heat to stay warm, which may necessitate a slight increase in their daily food intake under the guidance of a veterinarian. It is equally important to monitor their water consumption, as the dry air of indoor heating systems can lead to dehydration just as easily as the summer sun. Ensuring that outdoor water bowls are replaced with heated or insulated versions to prevent freezing is a critical logistical step that guarantees your pet always has access to the hydration necessary for healthy metabolism and temperature regulation throughout the season.",
      "When the weather becomes too severe for extended outdoor activity, the focus of care must shift toward creative indoor enrichment to keep your pet’s mind sharp and their energy levels managed. Mental stimulation is a powerful tool for preventing the \"winter blues\" and destructive behaviors that often arise from confinement, and it can be easily integrated into your home life through scent-work games, indoor agility courses using furniture, or interactive treat-dispensing puzzles. These activities provide a low-impact way to burn off restless energy without exposing your pet to the dangers of frostbite or slipping on icy patches. By balancing necessary physical protection with a robust indoor mental health routine, you ensure that the winter months become a season of cozy bonding and healthy growth rather than a period of sedentary boredom for your companion."
    ]
  },
]

const Blog = () => {
  const [activePost, setActivePost] = useState(null)

  return (
    <div className="blog-page">
      <div style={{ position: 'sticky', top: 0, zIndex: 10 }}>
        <Menubar />
      </div>

      <div className="blog-container">
        <h1 className="blog-title">Our Blog</h1>
        <div className="cards-grid">
          {samplePosts.map(post => (
            <article key={post.id} className="card">
              <div className="card-media">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="card-body">
                <h3>{post.title}</h3>
                <p className="subtitle">{post.subtitle}</p>
                <button className="read-btn" onClick={() => setActivePost(post)}>Read more</button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activePost && (
        <div className="overlay" onClick={() => setActivePost(null)}>
          <div className="post-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActivePost(null)}>×</button>
            <div className="post-header">
              <img src={activePost.image} alt={activePost.title} className="post-header-img" />
              <div className="post-header-text">
                <h2>{activePost.title}</h2>
                <p className="subtitle">{activePost.subtitle}</p>
              </div>
            </div>
            <div className="post-content">
              {Array.isArray(activePost.content)
                ? activePost.content.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))
                : <p>{activePost.content}</p>
              }
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Blog