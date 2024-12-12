import React, {useState} from 'react';

const HowItWorks = () => {
  const [activeButton,setActiveButton] = useState('users');

  return (
    <section className="how-it-works bg-cover bg-center text-white h-[80vh] flex justify-center pt-10" style={{ backgroundImage: "url('/wallet.jpg')" }}>
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-2 mt-10">Wallet App</h2>
      <p style={{fontSize: '15px',fontWeight: 400,lineHeight: '21px',marginBottom: '12px',marginTop:'25px'}}>
        make your life easier with our wallet secure app
      </p>
     
      <div className="steps grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 px-28">
          <div className="card bg-white text-black p-2 rounded-lg shadow-lg flex flex-row ">
            <img src="/image7.png" alt="Discover Shops" style={{ width: '180px', height: '165px', left: '5.73px', gap: '0px', opacity: 1 }} className="mb-4" />
            <div className="text-left ml-4 mt-6">
              <h3 className="text-2xl font-semibold mb-2">1. Discover Transaction</h3>
              <p>Browse nearby Wallet  shops and services using location-based recommendations.</p>
            </div>
          </div>
          <div className="card bg-white text-black p-2 rounded-lg shadow-lg flex flex-row ">
            <img src="/image8.png" alt="Place Orders" style={{ width: '180px', height: '165px', left: '5.73px', gap: '0px', opacity: 1 }} className="mb-4" />
            <div className="text-left ml-4 mt-6">
              <h3 className="text-2xl font-semibold mb-2">2. Create wallet</h3>
              <p>Add desired services to your cart, select payment methods (cash or digital), and confirm your order.</p>
            </div>
          </div>
          <div className="card bg-white text-black p-2 mt-8 rounded-lg shadow-lg flex flex-row">
            <img src="/image9.png" alt="Track Progress" style={{ width: '180px', height: '165px', left: '5.73px', gap: '0px', opacity: 1 }} className="mb-4" />
            <div className="text-left ml-4 mt-6">
              <h3 className="text-2xl font-semibold mb-2">3. Track Progress</h3>
              <p> Get real-time updates on your order status, from processing to delivery.</p>
            </div>
          </div>
          <div className="card bg-white text-black p-2 mt-8 rounded-lg shadow-lg flex flex-row">
            <img src="/image10.png" alt="Pay Securely" style={{ width: '180px', height: '165px', left: '5.73px', gap: '0px', opacity: 1 }} className="mb-4" />
            <div className="text-left ml-4 mt-6">
              <h3 className="text-2xl font-semibold mb-2">4. Pay Securely</h3>
              <p> Use cash or secure digital payment options for a seamless experience.</p>
            </div>
          </div>
        
      </div>
    </div>
  </section>
  );
};

export default HowItWorks;
