
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Category } from "@/data/toolsData";

interface CategoryItemProps {
  category: Category;
  level: number;
  currentCategory?: string;
  currentSubCategory?: string;
  closeSidebar: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  level,
  currentCategory,
  currentSubCategory,
  closeSidebar
}) => {
  const [isExpanded, setIsExpanded] = useState(
    currentCategory === category.id || 
    (category.subCategories?.some(sub => sub.id === currentCategory) ?? false)
  );
  
  const hasSubCategories = category.subCategories && category.subCategories.length > 0;
  const isActive = currentCategory === category.id;
  
  const toggleExpand = (e: React.MouseEvent) => {
    if (hasSubCategories) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };
  
  return (
    <div className="w-full">
      <Link
        to={hasSubCategories ? "#" : `/${category.id}`}
        onClick={(e) => {
          if (hasSubCategories) {
            toggleExpand(e);
          } else {
            closeSidebar();
          }
        }}
        className={cn(
          "flex items-center py-2 px-3 rounded-md mb-1 transition-colors space-x-2",
          isActive ? "bg-gray-100 text-theme-purple font-medium" : "hover:bg-gray-50",
          level === 0 ? "font-medium" : "",
          level === 1 ? "pl-6 text-sm" : ""
        )}
      >
        {/* 使用category的自定义图标 */}
        <span className="w-4 h-4 shrink-0">{category.icon}</span>
        <span>{category.name}</span>
        {hasSubCategories && (
          <span className="ml-auto text-gray-400">
            {isExpanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </span>
        )}
      </Link>
      
      {hasSubCategories && isExpanded && (
        <div className="ml-2 pl-1">
          {category.subCategories.map((subCategory) => (
            <CategoryItem
              key={subCategory.id}
              category={subCategory}
              level={level + 1}
              currentCategory={currentCategory}
              currentSubCategory={currentSubCategory}
              closeSidebar={closeSidebar}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  closeSidebar,
  currentCategory,
  currentSubCategory,
}) => {
  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 shadow-lg transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:shadow-none",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          {categories.map((category) => (
            <CategoryItem
              key={category.id}
              category={category}
              level={0}
              currentCategory={currentCategory}
              currentSubCategory={currentSubCategory}
              closeSidebar={closeSidebar}
            />
          ))}
        </div>
      </div>
      
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
