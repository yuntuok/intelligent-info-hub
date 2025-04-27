
import React from "react";
import { Link } from "react-router-dom";

interface FriendlyLink {
  name: string;
  url: string;
}

interface FooterProps {
  friendlyLinks: FriendlyLink[];
}

const Footer: React.FC<FooterProps> = ({ friendlyLinks }) => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-4">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} 智能工具导航 | 版权所有
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            {friendlyLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-gray-600 hover:text-theme-purple text-sm transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
