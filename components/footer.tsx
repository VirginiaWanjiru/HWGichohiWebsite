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
    <footer className="bg-[#292524] text-[#FAFAFA] px-4 py-12 text-xs">
      <div className="container mx-auto flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-600">
        {/* Section 1 */}
        <div className="flex-1 flex flex-col justify-start space-y-4">
          <LogoLarge />
        </div>

        {/* Section 2 */}
        <div className="flex-1 flex flex-col justify-start space-y-2 py-4 md:py-0 md:px-4">
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p className="text-xs">Email: hwgichohiandcompany@gmail.com </p>
          <p className="text-xs">Phone: +(254) 713 324 558</p>
          <p className="text-xs">Address: Allimex Plaza, 4th Floor Off MSA Road </p>
          <p className="text-xs">Opening Hours: Monday-Fridays 8:00 am - 5:00 pm </p>
          <p className="text-xs">Saturday : 8:00 am - 12:00pm noon </p>
        </div>

        {/* Section 3 */}
        <div className="flex-1 flex flex-col justify-start space-y-4 pt-4 md:pt-0 md:pl-4">
          <p className="text-xs">
            ©H.W Gichohi and Co. All rights reserved. H.W Gichohi and Co refers to the H.W Gichohi and Co network and/or one or more of its member firms, each of which is a separate legal entity.
          </p>
          <p className="text-xs">Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
