
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
  
  // Category view - show tools in a specific category
  if (view === "category" && categoryId) {
    const category = getCategoryInfo(categoryId);
    const tools = subcategoryId
      ? getToolsByCategory(categoryId, subcategoryId)
      : getToolsByCategory(categoryId);
      
    return (
      <div className="p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
          {category.subCategories && category.subCategories.length > 0 && (
            <Tabs 
              defaultValue={subcategoryId || category.subCategories[0].id}
              className="mt-4"
            >
              <TabsList>
                {category.subCategories.map(sub => (
                  <TabsTrigger key={sub.id} value={sub.id}>
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
  }
  
  // Home view - show all categories with their tools
  return (
    <div className="p-6 space-y-12">
      {categories.map(category => {
        const tools = getToolsByCategory(category.id);
        if (tools.length === 0) return null;
        
        return (
          <div key={category.id} className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h2 className="text-2xl font-semibold">{category.name}</h2>
              {category.subCategories && category.subCategories.length > 0 && (
                <Tabs defaultValue={category.subCategories[0].id} className="mt-4">
                  <TabsList>
                    {category.subCategories.map(sub => (
                      <TabsTrigger key={sub.id} value={sub.id}>
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
