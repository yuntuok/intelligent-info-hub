
import React from "react";
import { Tool } from "@/data/toolsData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

interface DetailViewProps {
  tool: Tool;
}

const DetailView: React.FC<DetailViewProps> = ({ tool }) => {
  return (
    <div className="max-w-4xl mx-auto py-6">
      <div className="mb-6">
        <Link to={`/${tool.category}`}>
          <Button variant="ghost" className="flex items-center text-gray-600">
            <ChevronLeft className="mr-1 h-4 w-4" />
            返回列表
          </Button>
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src={tool.imageUrl}
              alt={tool.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-4">
            <h1 className="text-2xl font-bold">{tool.name}</h1>
            <p className="text-gray-600">{tool.description}</p>
          </div>
        </div>
        
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: tool.detailContent }} />
        
        {tool.url && (
          <div className="mt-8">
            <Button className="bg-theme-purple hover:bg-theme-indigo">
              <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-white">
                访问官网
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailView;
