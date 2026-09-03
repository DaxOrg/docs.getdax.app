# docs.getdax.app

## About this project

This is the **official documentation site** for [Dax](https://getdax.app) — an AI-powered productivity companion built for developers, creators, and anyone building with AI.

- Built on [Mintlify](https://mintlify.com) with the Aspen theme
- Pages are MDX files with YAML frontmatter; tool pages live in `tools/`
- Configuration lives in `docs.json`
- Use the Mintlify MCP server, `https://mcp.mintlify.com`, to edit content and settings via MCP
- Use the Mintlify docs MCP server, `https://www.mintlify.com/docs/mcp`, to query information about using Mintlify via MCP

## Project structure

```
docs.json                # Site config (theme, colors, nav, logos)
index.mdx                # Welcome/landing page
quickstart.mdx           # Installation & first tool tutorial
how-dax-works.mdx        # Shared model (summoning, activation, privacy)
shortcuts.mdx            # Complete keyboard shortcut reference
tools/                   # 15 tool documentation pages
  ask-ai.mdx, image-to-url.mdx, image-ask.mdx, image-to-prompt.mdx,
  generate-image.mdx, text-transform.mdx, file-drop.mdx, frequent-clis.mdx,
  open-project.mdx, inject-md.mdx, boilerplates.mdx, vibe-history.mdx, command-history.mdx,
  suggest-a-tool.mdx, feedback.mdx
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
- Refer to each tool by its public name (e.g. **Image to URL**, **Ask AI**).
  Internal codenames (Uplink, Promptify, QuickQuestion, BulkUpload) may be
  mentioned once for context but are not the primary name.
- Tools are opened by a **global shortcut** or **from the menu**. Don't invent
  shortcuts for tools that open from the menu.

## Style preferences

- Use active voice and second person ("you")
- Keep sentences concise; one idea per sentence
- Use sentence case for headings
- Bold for UI elements: Click **Settings**
- Code formatting for file names, commands, paths, and code references
- Target macOS 13+ (Ventura+), Apple Silicon or Intel

## Tool categories

| Category | Tools |
|---|---|
| Capture & Share | Image to URL, File Drop, Image to Prompt |
| Ask AI | Ask AI, Image Ask, Generate Image, AI Text Transform |
| Your Workflow | Frequent CLIs, Open Project, Inject MD, Boilerplates, Vibe History, Command History |
| Help & Feedback | Suggest a Tool, Feedback |
