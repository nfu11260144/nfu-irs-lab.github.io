---
sidebar_position: 2
title: GitHub
---

## Repository

GitHub 上 Repository (repo) 的空間容量是有上限的，而且它本來就是針對儲存程式碼而設計的，因此容量不大，所以應該仔細地審視什麼檔案該或不該上傳到 GitHub。

例如以下舉例的檔案基本上***不應該***上傳到 GitHub，請善用「.gitignore」來忽略它們。
- 程式編譯而自動產生的中間檔、執行檔。
- 暫存檔。
- Log 檔。
- 非於程式緊緊相關的圖片、影片或 PDF 等類似的大型檔案。
- 含有個資或敏感資料的內容。

對於 Visual Studio 的相關程式，可以透過 Visual Studio 內建的 Git 功能來自動產生設定好的「.gitignore」，或是使用 GitHub 官方提供的樣板[ github/gitignore ](https://github.com/github/gitignore/blob/master/VisualStudio.gitignore)。