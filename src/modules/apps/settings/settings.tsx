"use client";
import { useState } from "react";
import AppWindow from "../components/app-window";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const SettingsApp = () => {
  const [informationModalOpen, setInformationModalOpen] = useState(true);

  return (
    <AppWindow title="Settings">
      <div className="p-4 text-white bg-zinc-900 h-full space-y-6">
        <section>
          <h2 className="text-lg font-semibold">Appearance</h2>
          <p className="text-sm text-muted-foreground mb-2">
            Change theme, colors, and background
          </p>
          <button className="bg-zinc-800 px-3 py-1 rounded hover:bg-zinc-700">
            Dark Mode
          </button>
          <button className="bg-zinc-800 px-3 py-1 rounded hover:bg-zinc-700 ml-2">
            Light Mode
          </button>
        </section>

        <section>
          <h2 className="text-lg font-semibold">System</h2>
          <p className="text-sm text-muted-foreground mb-2">
            Manage performance, storage, and OS behavior
          </p>
          <button className="bg-zinc-800 px-3 py-1 rounded hover:bg-zinc-700">
            Clear Cache
          </button>
        </section>

        <section onClick={() => setInformationModalOpen((prev) => !prev)}>
          <h2 className="text-lg font-semibold">About</h2>
          <p className="text-sm text-muted-foreground mb-2">
            View version information and credits
          </p>
          {informationModalOpen && (
            <div className="text-xs text-muted-foreground">
              <p>Creator &gt; s1ddiq</p>
              <p>Version &gt; v1.0.0</p>
            </div>
          )}
          <div className="text-xs text-zinc-500">EmulateOS v1.0.0 © 2025</div>
        </section>
      </div>
    </AppWindow>
  );
};

export default SettingsApp;
