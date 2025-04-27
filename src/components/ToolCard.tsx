
import React from "react";
import { Link } from "react-router-dom";
import { Tool } from "@/data/toolsData";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md max-w-sm">
      <CardContent className="p-4 flex space-x-4">
        <div className="w-16 h-16 shrink-0 overflow-hidden bg-gray-100 rounded-lg">
          <img
            src={tool.imageUrl}
            alt={tool.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold mb-1 line-clamp-1">{tool.name}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">{tool.description}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-end">
        <Link to={`/tool/${tool.id}`}>
          <Button variant="ghost" size="sm" className="text-theme-blue">
            查看详情 <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ToolCard;
