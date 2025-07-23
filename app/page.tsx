"use client"

export default function DocsHome() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ marginBottom: "1rem" }}>Design System Storybook</h1>
      <p>
        This workspace is intended to be explored in Storybook.
        <br />
        Run <code>npm run dev</code> and open{" "}
        <a href="http://localhost:6006" target="_blank" rel="noreferrer">
          http://localhost:6006
        </a>{" "}
        in your browser.
      </p>
    </main>
  )
}
