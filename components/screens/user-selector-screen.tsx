"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserIcon } from "lucide-react";
import { useState } from "react";

const UserSelectorScreen = () => {
  const [finished, setFinished] = useState(false);

  return (
    <div
      className={`w-full min-h-screen bg-neutral-950 flex flex-col justify-center items-center text-white p-4 ${
        finished && "animate-fade-out"
      }`}
    >
      {/* Title */}
      {/* User Card */}
      <Card className="w-full max-w-sm border border-white/10 bg-white/5 text-white shadow-xl">
        <CardHeader className="flex flex-col items-center gap-4">
          <div className="p-4 border border-white/20 rounded-full bg-white/10">
            <UserIcon size={64} className="text-white/80" />
          </div>
          <CardTitle className="text-xl font-medium">User</CardTitle>
        </CardHeader>

        <CardContent>
          <Button
            className="w-full text-base py-6 mt-2 rounded-md bg-zinc-800 hover:bg-zinc-800/90"
            onClick={() => setFinished(true)}
          >
            Sign In
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserSelectorScreen;
