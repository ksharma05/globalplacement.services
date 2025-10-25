import React from 'react';
import useContent from '../hooks/useContent';

// Import all client logos
import NakheelLogo from '../assets/Nakheel_Properties_logo.svg.png';
import BechtelLogo from '../assets/Bechtel_logo_2023.svg.png';
import DaewooLogo from '../assets/Logo_Daewoo_Motors_(2002-2016).svg.png';
import HyundaiLogo from '../assets/Hyundai_Motorsport.png';
import EnkaLogo from '../assets/ENKA_Spor_Kulübü.png';
import IsraelLogo from '../assets/IsraelCorp.svg.png';
import ArchirodonLogo from '../assets/Archirodon_Logo.png';
import GusanLogo from '../assets/m_img_ci-removebg-preview.webp';

const ClientList = () => {
  const { clients } = useContent();

  if (!clients || !clients.list) {
    return null;
  }

  // Create a mapping of logo filenames to imported assets
  const logoMap = {
    'Nakheel_Properties_logo.svg.png': NakheelLogo,
    'Bechtel_logo_2023.svg.png': BechtelLogo,
    'Logo_Daewoo_Motors_(2002-2016).svg.png': DaewooLogo,
    'Hyundai_Motorsport.png': HyundaiLogo,
    'ENKA_Spor_Kulübü.png': EnkaLogo,
    'IsraelCorp.svg.png': IsraelLogo,
    'Archirodon_Logo.png': ArchirodonLogo,
    'm_img_ci-removebg-preview.webp': GusanLogo
  };

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-base-content mb-4">
          {clients.title}
        </h2>
        <p className="text-lg text-base-content/70">
          {clients.subtitle}
        </p>
      </div>
      
      <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        {clients.list.map((client, index) => (
          <div key={index} className="flex items-center justify-center p-4">
            <img
              alt={client.name}
              src={logoMap[client.logo]}
              width={158}
              height={48}
              className="max-h-12 w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientList