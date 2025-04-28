
import React from "react";
import ToolCard from "./ToolCard";
import { Tool } from "@/data/toolsData";

interface CardGridProps {
  tools: Tool[];
}

const CardGrid: React.FC<CardGridProps> = ({ tools }) => {
  if (tools.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-gray-500">没有找到相关工具</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
};

export default CardGrid;
