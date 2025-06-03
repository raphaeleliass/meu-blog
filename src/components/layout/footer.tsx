import React from "react";
import { social } from "../utils";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="bg-secondary/80 text-muted-foreground flex flex-col items-center justify-center gap-4 p-4 text-xs">
      <ul className="flex gap-2">
        {social.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:underline"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <p>
        <a
          href="https://raphaelelias.vercel.app/"
          target="_blank"
          rel="noreferrer noopener"
          className="cursor-pointer hover:underline"
        >
          Raphael Elias
        </a>{" "}
        &copy; {date}
      </p>
    </footer>
  );
}
