
import React from "react";
import { Link } from "react-router-dom";
import { Tool } from "@/data/toolsData";
import { Card, CardContent } from "@/components/ui/card";

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md max-w-sm">
      <CardContent className="p-4 flex space-x-4">
        <div className="w-12 h-12 shrink-0 overflow-hidden bg-gray-100 rounded-lg">
          <img
            src={tool.imageUrl}
            alt={tool.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <Link to={`/tool/${tool.id}`} className="block">
            <h3 className="text-lg font-semibold mb-1 line-clamp-1 hover:text-theme-blue transition-colors">
              {tool.name}
            </h3>
          </Link>
          <p className="text-gray-600 text-sm line-clamp-2">{tool.description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ToolCard;
