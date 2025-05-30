
import React from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  const getCategoryInfo = (id: string) => {
    const category = categories.find(cat => cat.id === id);
    if (!category) return { name: "所有工具", subCategories: [] };
    return category;
  };

  // Detail view - show single tool details
  if (view === "detail" && toolId) {
    const tool = getTool(toolId);
    if (!tool) {
      return <div className="p-6">未找到该工具</div>;
    }
    return <DetailView tool={tool} />;
  }

  // Home view - show all categories with their tools
  return (
    <div className="p-6 space-y-12">
      {categories.map(category => {
        const tools = getToolsByCategory(category.id, subcategoryId);
        if (tools.length === 0) return null;
        
        // If we're in category view and this is not the selected category, skip
        if (view === "category" && categoryId && category.id !== categoryId) {
          return null;
        }
        
        return (
          <div key={category.id} className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h2 className="text-2xl font-semibold">{category.name}</h2>
              {category.subCategories && category.subCategories.length > 0 && (
                <Tabs 
                  defaultValue={subcategoryId || category.subCategories[0].id}
                  className="mt-4"
                >
                  <TabsList>
                    {category.subCategories.map(sub => (
                      <TabsTrigger 
                        key={sub.id} 
                        value={sub.id}
                        onClick={() => {
                          window.history.pushState(
                            {}, 
                            "", 
                            `/${category.id}/subcategory/${sub.id}`
                          );
                        }}
                      >
                        {sub.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              )}
            </div>
            <CardGrid tools={tools} />
          </div>
        );
      })}
    </div>
  );
};

export default ContentArea;
