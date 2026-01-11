import React from 'react'
import Menubar from '../components/Menubar'
import './Policies.css'

const Policies = () => {
  return (
    <div className='policiesPage'>
      <div style={{ position: 'sticky', top: 0, zIndex: 10 }}>
        <Menubar />
      </div>

      <div className="policiesContent">
        <div className="privacyPolicy">
          <span className="title">Privacy Policy</span>
          <span className="text"><b>A. Information We Collect</b> <br />
We collect personal information (Name, Phone Number, Address, Email) and pet-related data to process orders and provide tailored consultancy. <br /><br />

<b>B. How We Use Your Data</b> <br />
To process transactions and deliveries. <br />
To send updates regarding your pet’s health or stud service schedules. <br />
To comply with Nigerian regulatory requirements. <br /><br />

<b>C. Third-Party Sharing</b> <br />
We do not sell your data. We only share information with necessary third parties, such as logistics/delivery partners and payment processors. <br /><br />

<b>D. Security</b> <br />
We implement industry-standard security measures to protect your data. However, no online transmission is 100% secure. By using our site, you acknowledge this inherent risk. <br />
</span>
        </div>



        <div className="termsOfService">
          <span className="title">Terms of Service</span>
          <span className="text"><b>A. Live Animals & Stud Services</b> <br />
No Refunds: Due to bio-security risks and the stress involved in transporting animals, all live animal sales and stud service fees are final and non-refundable. <br />
Booking Deposits: Deposits made to "hold" a pet are non-refundable if the buyer fails to complete the purchase. <br /><br />

<b>B. Pet Accessories</b> <br />
Returns: We only accept returns for physical accessories (cages, leashes, bowls) if they are defective or the wrong item was sent. <br />
Timeline: Issues must be reported within 24 hours of delivery. Items must be unused and in original packaging. <br />
Non-Returnable: Consumables (pet food, treats, supplements) and personalized items cannot be returned for hygiene reasons. <br /><br />

<b>C. Consultancy</b> <br />
Fees for consultancy sessions are non-refundable once the session has commenced or if the client fails to show up for a scheduled appointment. <br />
</span>
        </div>



        <div className="refundPolicy">
          <span className="title">Refund & Return Policy</span>
          <span className="text"><b>A. General Overview</b> <br />
By using this website, you agree to be bound by these terms. We reserve the right to refuse service to anyone for any reason at any time. <br /><br />

<b>B. Live Animal Sales</b> <br />
Health Guarantee: All pets are sold in good health at the point of handover. Once the pet leaves our premises or is accepted by the buyer/courier, the risk of loss or injury transfers to the buyer. <br/>
Behavioral Disclaimer: We are not liable for the future temperament, size, or reproductive capability of any pet sold. <br /><br />

<b>C. Stud Services</b> <br />
Health Requirements: All visiting females must have up-to-date vaccinations and a clean health bill. We reserve the right to refuse a mating if the female appears unhealthy. <br /><br />
Results: A "stud service" is a service for a mating attempt, not a guarantee of pregnancy. If the female does not conceive, a repeat mating may be offered at a discounted rate or for free at our sole discretion, provided certain conditions are met. <br /><br />

<b>D. Consultancy Services</b> <br />
Our consultancy is for informational purposes and does not replace professional veterinary medicine. We are not liable for actions taken based on our advice. <br /><br />

<b>E. Limitation of Liability</b><br />
To the maximum extent permitted by Nigerian law, ES Paws shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services. <br />
</span>
        </div>
      </div>
    </div>
  )
}

export default Policies