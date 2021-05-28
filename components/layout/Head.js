import NextHead from "next/head";

export default function Head({ title = "" }) {
  return (
    <NextHead>
      <title>
        {title}
        {title ? " | " : ""}Launch Prep
      </title>
      <link rel="icon" href="/favicon.svg" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans&amp;family=Space+Mono&amp;display=swap"
        rel="stylesheet"
      />
    </NextHead>
  );
}
