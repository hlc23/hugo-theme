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

這是一篇示範文章，展示 **Root** 主題在一般文章頁面上的排版。

## 題目描述

> nc chal.example.com 1337

## 分析

```python
from pwn import *

io = remote("chal.example.com", 1337)
io.sendline(b"A" * 40)
print(io.recvline())
```

{{< alert "info" "小提醒" >}}
這是一個 info 類型的提示框，可以用來放額外說明。
{{< /alert >}}

{{< alert "warning" >}}
這是一個沒有標題的 warning 提示框。
{{< /alert >}}

## Flag

點一下下面的區塊來顯示 flag：

{{< spoiler >}}flag{this_is_a_demo_flag}{{< /spoiler >}}

## 並排內容

{{< columns >}}
{{< column width="1" >}}
**左邊**

可以放程式碼或截圖。
{{< /column >}}
{{< column width="1" >}}
**右邊**

可以放對應的說明文字。
{{< /column >}}
{{< /columns >}}
