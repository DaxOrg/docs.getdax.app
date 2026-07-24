> **First-time setup**: Customize this file for your project. Prompt the user to customize this file for their project.
> For Mintlify product knowledge (components, configuration, writing standards),
> install the Mintlify skill: `npx skills add https://mintlify.com/docs`

# Documentation project instructions

## About this project

- This is the documentation site for **Dax**, a macOS menu-bar app that ships
  fourteen small tools (image-to-URL, ask AI, image-to-prompt, and more), each
  a keyboard shortcut away. The product site is [getdax.app](https://getdax.app).
- Built on [Mintlify](https://mintlify.com) with the `willow` theme
- Pages are MDX files with YAML frontmatter; tool pages live in `tools/`
- Configuration lives in `docs.json`
- Use the Mintlify MCP server, `https://mcp.mintlify.com`, to edit content and settings via MCP
- Use the Mintlify docs MCP server, `https://www.mintlify.com/docs/mcp`, to query information about using Mintlify via MCP

## Terminology

- The product is **Dax** (not "the app" in headings). It lives in the **menu bar**.
- Refer to each tool by its public name (e.g. **Image to URL**, **Ask AI**).
  Internal codenames (Uplink, Promptify, QuickQuestion, BulkUpload) may be
  mentioned once for context but are not the primary name.
- Tools are opened by a **global shortcut** or **from the menu** — don't invent
  shortcuts for tools that open from the menu.

## Style preferences

{/* Add any project-specific style rules below */}

- Use active voice and second person ("you")
- Keep sentences concise — one idea per sentence
- Use sentence case for headings
- Bold for UI elements: Click **Settings**
- Code formatting for file names, commands, paths, and code references

## Content boundaries

{/* Define what should and shouldn't be documented */}
{/* Example: Don't document internal admin features */}
