
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
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-theme-blue to-theme-purple rounded-md flex items-center justify-center">
                <span className="text-white font-bold">AI</span>
              </div>
              <span className="font-bold text-lg">智能工具导航</span>
            </Link>
            <p className="text-gray-500 text-sm">
              发现和使用最前沿的人工智能工具和应用
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-3">友情链接</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-2">
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
        
        <div className="text-center pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} 智能工具导航 | 版权所有
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
