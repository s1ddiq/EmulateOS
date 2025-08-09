"use client";
import React, { useEffect, useState } from "react";

const BootScreen = () => {
  const messages = [
    "Booting EmulateOS v1.0.0",
    "Initializing BIOS Interface",
    "Detecting hardware: CPU, RAM, GPU",
    "Loading Kernel Modules",
    "Mounting virtual filesystem (/root)",
    "Establishing system services",
    "Starting network manager",
    "Initializing drivers: input, audio, display",
    "Loading user environment",
    "Checking system integrity",
    "Launching EmulateOS Desktop Environment",
  ];
  const [finished, setFinished] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    if (currentMessageIndex < messages.length - 1) {
      // Checks if we have reached the last message, translates too currentMessageIndex < 2
      const timer = setTimeout(() => {
        setCurrentMessageIndex((prev) => prev + 1);
      }, 1);

      return () => clearTimeout(timer);
    } else {
      setFinished(true);
    }
  }, [currentMessageIndex]);
  return (
    <div
      className={`w-full min-h-screen bg-black flex flex-col justify-center items-center text-white tracking-wider absolute ${
        finished && "animate-fade-out"
      }`}
    >
      {/* Logo / Title */}
      {/* <h1 className="text-2xl md:text-4xl font-bold mb-10 animate-flicker">
        EmulateOS
      </h1> */}
      <p className="text-xs text-white/40 absolute bottom-4 left-4 font-mono">
        Press <span className="text-white">DEL</span> to enter Setup | Press{" "}
        <span className="text-white">F12</span> for Boot Menu
      </p>

      {/* Glitchy boot grid */}
      <div className="grid grid-cols-2 grid-rows-2 gap-5 mb-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="w-24 h-24 md:w-28 md:h-28 border border-green-400/40 bg-green-400/10 rounded-sm animate-flicker"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </div>

      {/* Booting Text */}
      <p className="text-sm uppercase opacity-70 animate-typewriter">
        {messages[currentMessageIndex]}
      </p>
    </div>
  );
};

export default BootScreen;
