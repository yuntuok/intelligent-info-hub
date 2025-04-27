
import React from "react";
import ToolCard from "./ToolCard";
import { Tool } from "@/data/toolsData";

interface CardGridProps {
  tools: Tool[];
  title: string;
}

const CardGrid: React.FC<CardGridProps> = ({ tools, title }) => {
  if (tools.length === 0) {
    return (
      <div className="py-8 text-center">
        <h2 className="text-xl font-semibold mb-6">{title}</h2>
        <p className="text-gray-500">没有找到相关工具</p>
      </div>
    );
  }

  return (
    <div className="py-6">
      <h2 className="text-xl font-semibold mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
