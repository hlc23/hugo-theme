---
title: "Example Slide Deck"
date: 2026-01-05T09:00:00+08:00
description: "A native Reveal.js deck rendered by the Root theme itself, no second theme required."
type: "reveal"
tableOfContents: false
revealjs:
  theme: "black"
  transition: "slide"
---

# Root + Reveal.js

Native support, no reveal-hugo required

{{< notes >}}
These are speaker notes — press `S` to open speaker view and see them.
{{< /notes >}}

---

## Writing a deck

Just a regular markdown file, slides separated by `---`:

```md
---
title: "My Deck"
type: "reveal"
---

# Slide one

---

## Slide two
```

---

## Syntax highlighting still works

```python
from pwn import *

io = remote("chal.example.com", 1337)
io.sendline(b"A" * 40)
```

---

## Fragments

{{< fragment >}}This appears first{{< /fragment >}}

{{< fragment >}}Then this{{< /fragment >}}

---

## Thanks for watching

Press `ESC` for the overview, arrow keys to navigate
