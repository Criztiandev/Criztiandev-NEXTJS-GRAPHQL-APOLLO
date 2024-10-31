import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import React from "react";

const RememberMe = () => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox />
      <Label className="text-stone-400 text-sm">Remember me</Label>
    </div>
  );
};

export default RememberMe;
