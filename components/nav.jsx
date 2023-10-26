"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const Navigation = () => {
  const ref = useRef(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header>
    <div className="fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  bg-zinc-900/0 border-transparent">
      <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
        <div className="flex justify-between gap-8">
          <a
            className="duration-200 text-zinc-400 hover:text-zinc-100"
            href="/projects"
          >
            Projects
          </a>
          <a
            className="duration-200 text-zinc-400 hover:text-zinc-100"
            href="/contact"
          >
            Contact
          </a>
        </div>
        <a
          className="duration-200 text-zinc-300 hover:text-zinc-100"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-6 h-6 "
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
        </a>
      </div>
    </div>
  </header>
  );
};
