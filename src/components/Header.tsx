
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SearchBar from "./SearchBar";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-white border-b border-gray-200 z-40 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side: Logo and site name */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={toggleSidebar}
            >
              <Menu className="h-5 w-5" />
            </Button>
            
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-theme-blue to-theme-purple rounded-md flex items-center justify-center">
                <span className="text-white font-bold">AI</span>
              </div>
              <span className="font-bold text-lg hidden sm:inline">智能工具导航</span>
            </Link>
          </div>

          {/* Middle: Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium hover:text-theme-blue transition-colors">
              首页
            </Link>
            <Link to="/ai-tools" className="font-medium hover:text-theme-blue transition-colors">
              AI工具集
            </Link>
            <Link to="/ai-applications" className="font-medium hover:text-theme-blue transition-colors">
              AI应用集
            </Link>
            <Link to="/free-image-gen" className="font-medium hover:text-theme-blue transition-colors">
              免费AI生图
            </Link>
          </nav>

          {/* Right side: Search and user */}
          <div className="flex items-center space-x-4">
            {searchOpen ? (
              <div className="relative w-full max-w-xs">
                <SearchBar onClose={() => setSearchOpen(false)} />
              </div>
            ) : (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
            )}
            
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
