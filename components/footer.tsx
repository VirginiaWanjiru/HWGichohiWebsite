import React from 'react';
import LogoLarge from "@/components/icons/LogoLarge";
import Link from 'next/link';

interface ExternalLink {
  name: string;
  url: string;
}

const externalLinks: ExternalLink[] = [
  { name: 'Standard 1', url: 'https://www.linkedin.com' },
  { name: 'Standard 2', url: 'https://www.twitter.com' },
  { name: 'Standard 3', url: 'https://www.facebook.com' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#292524] text-[#FAFAFA] px-4 py-32 text-xs">
      <div className="container mx-auto flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-600">
        {/* Section 1 */}
        <div className="flex-1 flex flex-col space-y-4 pb-4 md:pb-0 md:pr-4">
          <LogoLarge />
          
        </div>
        
       
        
        {/* Section 3 */}
        <div className="flex-1 flex flex-col space-y-2 py-4 md:py-0 md:px-4 ">
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p className="text-xs">Email: hwgichohiandcompany@gmail.com</p>
          <p className="text-xs">Phone: +1 234 567 8900</p>
          <p className="text-xs">Address: 123 Business St, City, Country</p>
        </div>
        
        {/* Section 4 */}
        <div className="flex-1 flex flex-col space-y-4 pt-4 md:pt-0 md:pl-4 ">
          <p className="text-xs">
            ©H.W Gichohi and Co. All rights reserved. H.W Gichohi and Co refers
            to the H.W Gichohi and Co network and/or one or more of its member
            firms, each of which is a separate legal entity.
          </p>
          <p className="text-xs">Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;