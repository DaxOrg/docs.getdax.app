# docs.getdax.app

## About this project

This is the **official documentation site** for [Dax](https://getdax.app) — the human harness for working with AI agents.

- Built on [Mintlify](https://mintlify.com) with the Aspen theme
- Pages are MDX files with YAML frontmatter; Accelerator pages live in `accelerators/`
- Configuration lives in `docs.json`
- Use the Mintlify MCP server, `https://mcp.mintlify.com`, to edit content and settings via MCP
- Use the Mintlify docs MCP server, `https://www.mintlify.com/docs/mcp`, to query information about using Mintlify via MCP

## Project structure

```
docs.json                # Site config (theme, colors, nav, logos)
index.mdx                # Welcome/landing page
quickstart.mdx           # Installation & first Accelerator
how-dax-works.mdx        # How the platform fits together, account, plans, privacy
shortcuts.mdx            # Complete keyboard shortcut reference
main-window.mdx          # The main window: coding agents side by side
companion.mdx            # Dax Companion (iPhone & iPad)
accelerators/            # overview.mdx + one page per live Accelerator
developers/              # Accelerator SDK (English only)
zh/, es/, fr/            # Internationalization (Chinese, Spanish, French)
logo/                    # Light/dark logo SVGs
.mintignore              # Build exclusions (drafts/, *.draft.mdx)
```

## Key commands

```bash
npm i -g mint       # Install Mintlify CLI (global)
mint dev            # Local preview at localhost:3000
mint broken-links   # Validate internal links
```

Deployment is automatic via the [Mintlify GitHub App](https://dashboard.mintlify.com); changes to the default branch auto-deploy.

## Terminology

- The product is **Dax** (not "the app" in headings). It lives in the **menu bar**.
- Dax is **one platform**: the main window, Accelerators, Dax Companion. Its
  built-in features are **Accelerators**, never "tools" (the app says
  Accelerators everywhere: the ⌃⌥Space launcher, Settings → Accelerators).
  "Tools" is only right for MCP tools agents call, or drawing tools.
- Refer to each Accelerator by its public name (e.g. **Image to URL**, **Ask AI**).
  Internal codenames (Uplink, Promptify, QuickQuestion, BulkUpload) may be
  mentioned once for context but are not the primary name.
- Never write "Shepherd" or "herd": the agents window is the **main window**.
- Accelerators open by a **global shortcut**, the **launcher**, or **the menu**.
  Take default chords from each `*Accelerator.swift`'s `defaultHotkey` in the
  Dax repo; don't invent them.
- Shelved Accelerators (unregistered in `AcceleratorRegistry.bootstrap`) have
  no page; old `/tools/*` URLs redirect in `docs.json`.

## Style preferences

- Use active voice and second person ("you")
- Keep sentences concise; one idea per sentence
- Use sentence case for headings
- Bold for UI elements: Click **Settings**
- Code formatting for file names, commands, paths, and code references
- Target macOS 14+ (Sonoma+), Apple Silicon or Intel

## Accelerator groups

| Group | Accelerators |
|---|---|
| Capture & share | Image to URL, File Drop, Clip to Link, Shelf, Screen Markup |
| AI | Ask AI, Image Ask, Generate Image, Image to Prompt, AI Text Transform, Context Form Fill, Image to Text |
| Agent workflow | Frequent CLIs, Inject MD or Skill, Prompt Snippets, Vibe History, Secrets, Schedules, Markdown Viewer, Remove BG, Feedback |
