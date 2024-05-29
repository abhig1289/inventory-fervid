import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

type GenericTableLayoutProps = {
  card_title: string;
  card_content: string;
  button_text: string;
  children: React.ReactNode;
};
const GenericTableLayout: React.FC<GenericTableLayoutProps> = ({
  card_title,
  card_content,
  button_text,
  children,
}) => {
  return (
    <div>
      <Card className="border-none">
        <CardHeader>
          <CardTitle>{card_title}</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between">
            <span className="text-sm">{card_content}</span>
            <Button><span className="mr-2"><Plus/></span>{button_text}</Button>
        </CardContent>
      </Card>
      {children}
    </div>
  );
};

export default GenericTableLayout;
