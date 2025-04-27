
import React from "react";
import { useParams } from "react-router-dom";
import CardGrid from "./CardGrid";
import DetailView from "./DetailView";
import { getToolsByCategory, getTool, categories } from "@/data/toolsData";

interface ContentAreaProps {
  view: "category" | "detail" | "home";
  toolId?: string;
  categoryId?: string;
  subcategoryId?: string;
}

const ContentArea: React.FC<ContentAreaProps> = ({
  view,
  toolId,
  categoryId,
  subcategoryId
}) => {
  const getCategoryTitle = (id: string): string => {
    const category = categories.find(cat => cat.id === id);
    
    if (!category) return "所有工具";
    
    if (subcategoryId) {
      // Find subcategory name
      let subcategoryName = "";
      
      // Helper function to recursively search for subcategory
      const findSubcategory = (cats: typeof categories) => {
        for (const cat of cats) {
          if (cat.id === subcategoryId) {
            subcategoryName = cat.name;
            return true;
          }
          if (cat.subCategories) {
            if (findSubcategory(cat.subCategories)) {
              return true;
            }
          }
        }
        return false;
      };
      
      if (category.subCategories) {
        findSubcategory(category.subCategories);
      }
      
      return subcategoryName || category.name;
    }
    
    return category.name;
  };

  // Home view - show featured tools
  if (view === "home") {
    return (
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">欢迎来到 AI 智能工具导航</h1>
          <p className="text-gray-600">发现和使用最前沿的人工智能工具和应用</p>
        </div>
        
        <CardGrid 
          title="热门 AI 工具" 
          tools={getToolsByCategory('ai-tools').slice(0, 3)} 
        />
        
        <CardGrid 
          title="推荐应用" 
          tools={getToolsByCategory('ai-applications')} 
        />
        
        <CardGrid 
          title="免费 AI 生图工具" 
          tools={getToolsByCategory('free-image-gen')} 
        />
      </div>
    );
  }
  
  // Detail view - show single tool details
  if (view === "detail" && toolId) {
    const tool = getTool(toolId);
    
    if (!tool) {
      return <div className="p-6">未找到该工具</div>;
    }
    
    return (
      <DetailView tool={tool} />
    );
  }
  
  // Category view - show tools in a category
  if (view === "category" && categoryId) {
    const tools = subcategoryId
      ? getToolsByCategory(categoryId, subcategoryId)
      : getToolsByCategory(categoryId);
      
    const title = getCategoryTitle(categoryId);
    
    return (
      <div className="p-6">
        <CardGrid title={title} tools={tools} />
      </div>
    );
  }
  
  return (
    <div className="p-6">
      <p>选择一个分类查看相关工具</p>
    </div>
  );
};

export default ContentArea;
