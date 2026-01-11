import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import {
    FaArrowDown,
  FaArrowRight,
  FaCat,
  FaCheckCircle,
  FaDog,
  FaDove,
  FaFish,
  FaHorse,
  FaKiwiBird,
  FaOtter,
  FaQuoteLeft,
  FaSearch,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import "../pages/Home.css";
import storyImage from "../assets/storyimage.png";
import varietyPets from "../assets/varietypets.png";
import petaccessories from "../assets/petaccessories.png";
import stud from "../assets/stud.png";
import blog1 from "../assets/blogfirstimg.png";
import blog2 from "../assets/blogsecondimg.png";
import blog3 from "../assets/blogthirdimg.png";

const Home = () => {

  const FORMDROP_URL = import.meta.env.VITE_FORMDROP_URL;

    async function handleSubmit(e) {
      e.preventDefault();
      const form = e.target;
      const data = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        'inquiry-type': form['inquiry-type'].value,
        message: form.message.value.trim()
      };

      // Validation
      if (!data.name || !data.email || !data['inquiry-type'] || !data.message) {
        alert('Please fill all required fields.');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
      }

      if (data.phone && !/^\d{10,}$/.test(data.phone.replace(/\D/g, ''))) {
        alert('Please enter a valid phone number (at least 10 digits).');
        return;
      }

      if (!FORMDROP_URL) {
        console.error('FORMDROP_URL is not set:', FORMDROP_URL);
        console.log('Form endpoint not configured. Please check your environment variables.');
        return;
      }

      try {
        console.log('Posting to FORMDROP_URL:', FORMDROP_URL, 'payload:', data);
        const response = await fetch(FORMDROP_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(data)
        });
        if (!response.ok) {
          const respText = await response.text();
          console.error('Form submission failed:', response.status, respText);
          throw new Error(`HTTP error! status: ${response.status} - ${respText}`);
        }

        // try to parse json, but fall back to text for debugging
        let result;
        try {
          result = await response.json();
        } catch (err) {
          result = await response.text();
        }
        console.log('Form submit response:', result);
        alert('Form submitted successfully!');
        form.reset();
      } catch (error) {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
      }
    }






  return (
    <div>
      <div className="navigationBar">
        <Navbar expand="lg" className="bg-body-tertiary navbarMain">
          <Container fluid className="navbarContent">
            <Navbar.Brand href="#" className="navtitle">
              ES Paws
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" className="navbarToggle" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 navlinks"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#home" className="navlink">
                  Home
                </Nav.Link>
                <Nav.Link href="#about" className="navlink">
                  About
                </Nav.Link>
                <Nav.Link href="/pets" className="navlink">
                  Pets
                </Nav.Link>
                <Nav.Link href="/blog" className="navlink">
                  Blog
                </Nav.Link>
                <Nav.Link href="#faqs" className="navlink">
                  FAQs
                </Nav.Link>
                <Nav.Link href="#contact" className="navlink">
                  Contact
                </Nav.Link>
                
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  style={{ fontFamily: "Outfit" }}
                />
                <Button variant="outline-danger">
                  <FaSearch />
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* The header section starts */}

      <div className="heroSection" id="home">
        <div className="heroSectionContent" data-aos="fade-up">
          <div className="heading">
            <span>Your Pet's Entire World, All In One Place</span>
          </div>
          <div className="subheading">
            <span>
              Beyond retail: Browse ethically raised companions, essential
              accessories, expert breeding services, and personalized care
              advice.
            </span>
          </div>
          <div className="ctas">
            <div className="primaryCta">
              <span><a href="#request">Request for a Pet or Stud</a></span>
              <FaArrowRight />
            </div>
            <div className="secondaryCta">
              <span><a href="#services">Explore Specialized Services</a></span>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* The header section ends */}





      {/* About section starts */}

      <div className="aboutSection" id="about">
        <div className="aboutSectionContent">
          <div className="ourStory">
            <div className="ourStoryHeading">
              <span>Our Story: More Than Just a Shop</span>
            </div>
            <div className="ourStoryBody">
              <div className="left">
                <span>
                  At ES Paws, we believe that pet ownership is a joyful journey
                  that deserves the very best support. Founded by a passionate
                  animal lover and seasoned pet professionals, we set out to
                  create more than just a retail store—we established a
                  comprehensive resource for pets and their parents at every
                  stage of life. From finding your forever companion to ensuring
                  their long-term health and happiness, we are dedicated to
                  setting the standard for ethical care, quality products, and
                  expert guidance. <br /> <br />
                  <br />
                  Our mission is simple: To provide exceptional quality, trusted
                  advice, and unwavering support to the pet community we serve.
                </span>
              </div>
              <div className="right">
                <img src={storyImage} alt="Our Story" />
              </div>
            </div>
          </div>

          <div className="services" id="services">
            <div className="servicesHeading">
              <span>What We Offer: A Comprehensive Ecosystem for Pets</span>
            </div>
            <div className="servicesSubHeading">
              <span>
                Our unique business model combines the convenience of retail
                with high-value, specialized pet services, making us your
                single, trusted destination.
              </span>
            </div>
            <div className="serviceContent">
              <div className="serviceone" data-aos="fade-up">
                <div className="serviceLeft">
                  <div className="serviceHeading">
                    <span>Pet Retail & Companionship</span>
                  </div>
                  <div className="serviceSubHeading">
                    <span>
                      We offer a curated selection of ethically sourced pets,
                      focusing on health and temperament. We partner with
                      reputable, registered breeders to ensure the highest
                      standard of care.
                    </span>
                  </div>
                  <div className="serviceContent">
                    <span>
                      Ethical Sourcing: Variety of pets, like small mammals,
                      specific breeds, exotic birds, sourced with transparency.
                    </span>
                    <span>
                      Health Guarantee: Every pet includes a comprehensive
                      health check, initial vaccinations, and a clear guarantee.
                    </span>
                  </div>
                </div>
                <div className="serviceRight">
                  <img src={varietyPets} alt="Variety of Pets" />
                </div>
              </div>

              <div className="servicetwo" data-aos="fade-up">
                <div className="serviceLeft">
                  <div className="serviceHeading">
                    <span>Quality Pet Accessories & Supplies</span>
                  </div>
                  <div className="serviceSubHeading">
                    <span>
                      Our retail selection is hand-picked for safety,
                      durability, and effectiveness, ensuring a comfortable,
                      stimulating, and healthy environment for your pet.
                    </span>
                  </div>
                  <div className="serviceContent">
                    <span>
                      Core Retail: Premium nutrition, specialized diets,
                      bedding, leashes, and training aids.
                    </span>
                    <span>
                      Wellness: Durable, non-toxic toys for enrichment, and
                      high-quality grooming and hygiene products.
                    </span>
                  </div>
                </div>
                <div className="serviceRight">
                  <img src={petaccessories} alt="Variety of Pets" />
                </div>
              </div>

              <div className="servicethree" data-aos="fade-up">
                <div className="serviceLeft">
                  <div className="serviceHeading">
                    <span>Specialized Stud Services</span>
                  </div>
                  <div className="serviceSubHeading">
                    <span>
                      We provide professional, hygienic, and expertly managed
                      stud services exclusively for ethical breeders focused on
                      improving breed standards..
                    </span>
                  </div>
                  <div className="serviceContent">
                    <span>
                      Elite Stock: Access to genetically screened,
                      champion-lineage stud animals with exceptional health.
                    </span>
                    <span>
                      Professional Management: Services include pre-breeding
                      screenings, genetic consultations, and expert guidance.
                    </span>
                  </div>
                </div>
                <div className="serviceRight">
                  <img src={stud} alt="Variety of Pets" />
                </div>
              </div>

              <div className="servicefour" data-aos="fade-up">
                <div className="serviceLeft">
                  <div className="serviceHeading">
                    <span>Personalized Pet Consultancy Services</span>
                  </div>
                  <div className="serviceSubHeading">
                    <span>
                      Our service offers personalized, expert guidance to help
                      pet owners and breeders navigate complex decisions.
                    </span>
                  </div>
                  <div className="serviceContent">
                    <span>
                      Comprehensive Consults: Guidance on choosing the right
                      pet, addressing challenging behavior (anxiety,
                      reactivity), and specialized advice for breeding and
                      long-term nutrition.
                    </span>
                  </div>
                </div>
                <div className="serviceRight">
                  <img src={varietyPets} alt="Variety of Pets" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About section ends */}





      {/* Pets category starts*/}

      <div className="pets" id="pets">
        <div className="petsContent">
          <div className="top">
            <div className="left" data-aos="fade-right">
              <span>Explore Pet Categories</span>
            </div>
            <div className="right" data-aos="fade-left">
              <Link to="/pets" style={{textDecoration: "none"}}><span>View All</span></Link>{" "}
              <FaArrowRight style={{ color: "#FF6F61" }} />{" "}
            </div>
          </div>
          <div className="bottom">
            <div className="cards">
              <div className="card" data-aos="fade-up" style={{ backgroundColor: "#E0F2F5" }}>
                <div className="cardContent">
                  <span className="cardIcon">
                    <FaDog />
                  </span>
                  <span className="cardText">Dogs</span>
                </div>
              </div>
              <div className="card" data-aos="fade-up" style={{ backgroundColor: "#FFE0E7" }}>
                <div className="cardContent">
                  <span className="cardIcon">
                    <FaCat />
                  </span>
                  <span className="cardText">Cats</span>
                </div>
              </div>
              <div className="card" data-aos="fade-up" style={{ backgroundColor: "#F0F0FF" }}>
                <div className="cardContent">
                  <span className="cardIcon">
                    <FaHorse />
                  </span>
                  <span className="cardText">Small Mammals</span>
                </div>
              </div>
              <div className="card" data-aos="fade-up" style={{ backgroundColor: "#E3F5E3" }}>
                <div className="cardContent">
                  <span className="cardIcon">
                    <FaDove />
                  </span>
                  <span className="cardText">Birds</span>
                </div>
              </div>
              <div className="card" data-aos="fade-up" style={{ backgroundColor: "#FFFFE5" }}>
                <div className="cardContent">
                  <span className="cardIcon">
                    <FaFish />
                  </span>
                  <span className="cardText">Fish</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pets category ends */}





      {/* Blog section starts */}

      <div className="blogSection" id="blog">
        <div className="blogSectionContent">
          <div className="heading">
            <span className="headingText">
              From Our Blog: Insights, Tips, and Stories
            </span>
            <span className="headingButton"><Link to="/blog" style={{textDecoration: "none", color: "#ff6f61"}}>Read More</Link></span>
          </div>
          <div className="cards">
            <div className="card">
              <div className="cardContent">
                <div className="top">
                  <img src={blog1} alt="The right pet" />
                </div>
                <div className="bottom">
                  <div className="text">
                    <span>
                      The Right Fit: A Beginner's Guide to Choosing Your Forever
                      Companion
                    </span>
                  </div>
                  <div className="button">
                    <span><Link to="/blog" className="blogLink">Read More</Link></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="cardContent">
                <div className="top">
                  <img src={blog2} alt="The right pet" />
                </div>
                <div className="bottom">
                  <div className="text">
                    <span>
                      Dog, Cat, or Guinea Pig? How to Match the Perfect Pet to Your Current Lifestyle
                    </span>
                  </div>
                  <div className="button">
                    <span><Link to="/blog" className="blogLink">Read More</Link></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="cardContent">
                <div className="top">
                  <img src={blog3} alt="The right pet" />
                </div>
                <div className="bottom">
                  <div className="text">
                    <span>
                      First 48 Hours: 5 Essential Accessories Every New Puppy or Kitten Needs
                    </span>
                  </div>
                  <div className="button">
                    <span><Link to="/blog" className="blogLink">Read More</Link></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog section ends */}




      {/* FAQs section starts */}

      <div className="faqSection" id="faqs">
        <div className="faqSectionContent">
            <div className="heading"><span>Frequently Asked Questions</span></div>
                <div className="faqs">
                <Accordion defaultActiveKey="0" flush className="faqAccordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is ES Paws' core mission?</Accordion.Header>
        <Accordion.Body>
          Our mission is to be your complete partner in pet parenthood. We provide 
          exceptional quality products, trusted expert advice, and unwavering support 
          to the pet community, emphasizing ethical sourcing and animal welfare above all else.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>How does ES Paws ensure ethical pet sourcing?</Accordion.Header>
        <Accordion.Body>
          We only partner with reputable breeders who adhere to strict ethical 
          guidelines, health testing protocols, and transparent records. We never source 
          from puppy mills or irresponsible facilities, prioritizing the health and temperament of every animal.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Do you offer a health guarantee with pets?</Accordion.Header>
        <Accordion.Body>
          Yes. Every pet purchased from us comes with a comprehensive health guarantee against 
          genetic and hereditary defects, alongside initial vet checks and vaccination records to give you peace of mind.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Do you offer specialized or veterinary diets?</Accordion.Header>
        <Accordion.Body>
          Yes, we stock a range of premium, specialized, and prescription-quality
           diets recommended by veterinarians, including options for specific 
           allergies, life stages, and chronic conditions.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Can I meet the pets before making a decision?</Accordion.Header>
        <Accordion.Body>
          Absolutely. We encourage you to spend time interacting with any potential companion in a 
          relaxed setting. Please contact us to schedule a meet-and-greet to ensure the best possible match for your home.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>Do you offer advice on integrating a new pet into the family?</Accordion.Header>
        <Accordion.Body>
          Yes. Our adoption process includes a detailed orientation where we provide guidance on everything 
          from puppy-proofing to initial training and introducing the new pet to existing family members.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
        <Accordion.Header>What makes your Stud Service different?</Accordion.Header>
        <Accordion.Body>
          Our service is focused purely on ethical improvement of breed standards. We offer access to genetically 
          screened, champion-lineage sires, coupled with professional, hygienic handling and expert consultation on breeding management.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7">
        <Accordion.Header>Are your stud animals health tested?</Accordion.Header>
        <Accordion.Body>
          Yes. All stud animals are extensively health tested and certified for breed-specific issues 
          (e.g., hips, elbows, eyes, and genetics) prior to being offered for service. Documentation is provided upon consultation.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="8">
        <Accordion.Header>What topics does the Pet Consultancy service cover?</Accordion.Header>
        <Accordion.Body>
          Our personalized consultations cover a wide range of needs, including choosing the right pet 
          for your lifestyle, addressing behavioral issues (anxiety, aggression), puppy/kitten training, 
          and specialized breeding and nutritional guidance.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="9">
        <Accordion.Header>Do you ship accessories and supplies?</Accordion.Header>
        <Accordion.Body>
          Yes, we offer local delivery and nationwide shipping for all accessories 
          and non-perishable supplies. Shipping rates and timelines are calculated at checkout.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="10">
        <Accordion.Header>Where is your physical store located?</Accordion.Header>
        <Accordion.Body>
          We are located at [Your Store Address]. Please check our 'Contact Us' page for current store hours and directions.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            </div>
        </div>
      </div>

      {/* FAQs section ends */}




    {/* Testimonials section starts */}

    <div className="testimonial">
        <div className="testimonialContent">
            <div className="heading">Honest Feedback From Our Valued Clients</div>
            <div className="cards">
                <div className="card">
                    <div className="cardContent">
                        <div className="icon">< FaQuoteLeft /></div>
                        <div className="text"><span>ES Paws is my go-to for all things pet. Great products and pets, great prices, and great service.</span></div>
                    </div>
                </div>

                <div className="card">
                    <div className="cardContent">
                        <div className="icon">< FaQuoteLeft /></div>
                        <div className="text"><span>I was skeptical about online pet shopping but ES Paws delivered! Fast, friendly and lovely pets and pet accessories</span></div>
                    </div>
                </div>

                <div className="card">
                    <div className="cardContent">
                        <div className="icon">< FaQuoteLeft /></div>
                        <div className="text"><span>"I really like the puppy you delivered to me, i'll be getting another one in the next few weeks"</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Testimonials section ends */}





    {/* Request section starts */}


    <div className="request" id="request">
        <div className="requestContent">
            <div className="heading"><span>What do you need?😊</span></div>
        <form className="requestForm" method="POST" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
          <input type="tel" name="phone" placeholder="Phone Number (optional)" />

          <select name="inquiry-type" required>
            <option value="">Select Inquiry Type</option>
            <option value="pet-purchase">Pet Purchase</option>
            <option value="breeding">Stud Service</option>
            <option value="consultation">Book a Consultation</option>
            <option value="partnership">Pet Accessories</option>
            <option value="general">General Inquiry</option>
          </select>

          <textarea name="message" rows="5" placeholder="Write your message here..." required />

          <button type="submit" className="btn">Send Message</button>
        </form>
        </div>
    </div>


    {/* Request Section ends */}


    
    {/* Footer Section starts */}

    <div className="footer" id="contact">
        <div className="footerSection">
            <div className="top">
                <div className="about">
                    {/* <span className="title">ES Paws</span> */}
                    <span>ES Paws is a premier pet breeding and care service, dedicated to providing high-quality pets and expert guidance for pet owners.</span>
                    <span> <a href="tel:09139978617">09139978617</a></span>
                    <span> <a href="mailto:espaws@yahoo.com">espaws@yahoo.com</a></span>
                    <span>Akure, Ondo State, Nigeria</span>
                    <span>Monday-Sun: 5am - 10pm</span>
                </div>
                <div className="links">
                    <span className="title">Quick Links</span>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#pets">Pets</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#faqs">FAQs</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="services">
                    <span className="title">Services & Resources</span>
                    <ul>
                        <li><a href="/pets">View Available Pets</a></li>
                        <li><a href="#request">Stud Service</a></li>
                        <li><a href="#request">Book a Consultancy</a></li>
                        <li><a href="/blog">Blog/Guide</a></li>
                    </ul>
                </div>
                <div className="policies">
                    <span className="title">Policies</span>
                    <ul>
                        <li><a href="#contact">Privacy Policy</a></li>
                        <li><a href="#contact">Terms of Service</a></li>
                        <li><a href="#contact">Refund Policy</a></li>
                    </ul>
                </div>
                <div className="socials">
                    <span className="title">Follow Us</span>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Tiktok</a></li>
                    </ul>
                </div>
            </div>
            <div className="bottom"><span>© {new Date().getFullYear()} ES Paws. All rights reserved</span></div>
        </div>
    </div>

    {/* Footer section ends */}


    </div>
  );
};

export default Home;
