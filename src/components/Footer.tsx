import { Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/yna.services'', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/yna.service', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/y-a-services', label: 'LinkedIn' },
  { icon: MessageCircle, href: 'https://wa.me/+201553514081', label: 'WhatsApp' },
];

function Footer() {
  return (
    <footer className="bg-black border-t border-slate-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center space-x-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className="text-gray-400 hover:text-emerald-600 transition-all duration-300 transform hover:scale-110"
            >
              <social.icon className="w-8 h-8" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
