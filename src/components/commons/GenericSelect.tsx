import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type GenericSelectorProps = {
  trigger: string;
  items: string[];
};
const GenericSelect: React.FC<GenericSelectorProps> = ({ trigger, items }) => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder={trigger} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item, index) => (
          <SelectItem key={index} value={item.toLowerCase()}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default GenericSelect;
