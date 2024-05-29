import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type GenericCardProps = {
  title: string|null;
  children: React.ReactNode;
};

const GenericCard: React.FC<GenericCardProps> = ({ title, children }) => {
  return (
    <Card className="m-10">
      {title && (
        <CardHeader>
          <CardTitle className="border-b-2">{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default GenericCard;
