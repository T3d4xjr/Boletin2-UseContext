// src/app/serverLayout.js
import { metadata } from "./metadata";

export default function ServerLayout({ children }) {
  return (
    <>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      {children}
    </>
  );
}
