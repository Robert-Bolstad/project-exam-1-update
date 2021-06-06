import NextHead from "next/head";

export default function Head({ title = "", description = "" }) {
  return (
    <NextHead>
      <title>
        {title}
        {title ? " | " : ""}Launch Prep
      </title>
      <meta name="description" content={description}></meta>
      <link rel="icon" href="/logo.svg" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans&amp;family=Space+Mono&amp;display=swap"
        rel="stylesheet"
      />
    </NextHead>
  );
}
