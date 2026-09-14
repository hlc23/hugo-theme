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

原生支援，不需要另外裝 reveal-hugo

{{< notes >}}
這是 speaker notes，只有在按 `S` 開啟 speaker view 時才看得到。
{{< /notes >}}

---

## 怎麼寫投影片

一般的 markdown 檔案，用 `---` 分隔每一頁：

```md
---
title: "My Deck"
type: "reveal"
---

# 第一頁

---

## 第二頁
```

---

## 一樣支援程式碼高亮

```python
from pwn import *

io = remote("chal.example.com", 1337)
io.sendline(b"A" * 40)
```

---

## Fragment 逐步顯示

{{< fragment >}}先出現這行{{< /fragment >}}

{{< fragment >}}再出現這行{{< /fragment >}}

---

## 謝謝收看

按 `ESC` 看總覽，方向鍵換頁
