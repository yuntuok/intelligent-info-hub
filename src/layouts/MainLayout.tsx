import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ContentArea from "@/components/ContentArea";
import Footer from "@/components/Footer";
import { getFriendlyLinks } from "@/data/toolsData";

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const [contentType, setContentType] = useState<"home" | "category" | "detail">("home");
  const [toolId, setToolId] = useState<string | undefined>(undefined);
  const [categoryId, setCategoryId] = useState<string | undefined>(undefined);
  const [subcategoryId, setSubcategoryId] = useState<string | undefined>(undefined);

  useEffect(() => {
    const path = location.pathname;
    
    if (path.startsWith("/tool/")) {
      setContentType("detail");
      setToolId(path.split("/").pop());
      setCategoryId(undefined);
      setSubcategoryId(undefined);
    } 
    else if (path.includes("/subcategory/")) {
      setContentType("category");
      const parts = path.split("/");
      setCategoryId(parts[1]);
      setSubcategoryId(parts[3]);
      setToolId(undefined);
    }
    else if (path !== "/" && path.length > 1) {
      setContentType("category");
      setCategoryId(path.substring(1));
      setSubcategoryId(undefined);
      setToolId(undefined);
    } 
    else {
      setContentType("home");
      setCategoryId(undefined);
      setSubcategoryId(undefined);
      setToolId(undefined);
    }
  }, [location.pathname]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#D3E4FD]">
      <Header toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1">
        <Sidebar 
          isOpen={sidebarOpen}
          closeSidebar={closeSidebar}
          currentCategory={categoryId}
          currentSubCategory={subcategoryId}
        />
        
        <main className="flex-1">
          <ContentArea 
            view={contentType}
            toolId={toolId}
            categoryId={categoryId}
            subcategoryId={subcategoryId}
          />
        </main>
      </div>
      
      <Footer friendlyLinks={getFriendlyLinks} />
    </div>
  );
};

export default MainLayout;
