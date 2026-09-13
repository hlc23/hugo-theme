---
title: "Example CTF Write-up"
date: 2026-01-01T12:00:00+08:00
description: "A short example showing headings, code blocks, alerts and the spoiler shortcode."
categories:
  - pwn
tags:
  - example
  - ctf
tableOfContents: true
---

This is a demo post showing how **Root** renders a regular article.

## Challenge

> nc chal.example.com 1337

## Analysis

```python
from pwn import *

io = remote("chal.example.com", 1337)
io.sendline(b"A" * 40)
print(io.recvline())
```

{{< alert "info" "Note" >}}
This is an info callout — use it for asides.
{{< /alert >}}

{{< alert "warning" >}}
This is a warning callout without a title.
{{< /alert >}}

## Flag

Click below to reveal the flag:

{{< spoiler >}}flag{this_is_a_demo_flag}{{< /spoiler >}}

## Side-by-side content

{{< columns >}}
{{< column width="1" >}}
**Left**

Code or a screenshot goes here.
{{< /column >}}
{{< column width="1" >}}
**Right**

The matching explanation goes here.
{{< /column >}}
{{< /columns >}}
