---
sidebar_position: 2
title: 程式碼風格 Coding Style
---

Coding Style 代表的是寫程式碼的格式風格，包含了縮排和命名規則等。

## 遵守格式
世界上有很多不同的 Coding Style，它們之間沒有絕對的好壞，只有一項唯一的準則：「同一個程式、專案與團隊應該遵守同一套 Coding Style，讓各程式碼的風格統一」。

```c
// 其中一種常見的 Coding Style: K&R
if (x == y) {
    printf("Hello World");
} else {
    printf("Goodbye World");
}

// 令一種常見的 Coding Style: Allman
if (x == y)
{
    printf("Hello World");
}
else
{
    printf("Goodbye World");
}
```

以 C# 來說，應該儘量遵守 Microsoft 官方所建議的 Coding Style。簡單歸納的話，縮排格式使用「Allman」，而變數和方法等的命名規則爲除了參數（Parameter）、區域變數（Local variable）及私有欄位（Private field）使用小駝峰（Lower camel case）外，其它統統使用大駝峰（Upper camel case，又稱帕斯卡 Pascal case），且私有欄位（Private field）加上字首底線 `_`。在命名時儘量避免使用縮寫。而註解文字與註解符號間加入一個空白，並且以句號結尾。

```cs
// C# Coding Style 簡易範例。
public class ArmController
{
    private int _deviceId;
    public string IpAddress = "127.0.0.1";
    
    public string GoHome(double motorSpeed)
    {
        int errorCode;
        
        // Some code here.
        
        if (errorCode > 0)
        {
            return "Error";
        }
        else if (errorCode == 0)
        {
            return "Done";
        }
        else
        {
            return "Unknown";
        }
    }
}
```

## 保持格式一致
現在有許多 IDE 都有自動格式化（Auto format）的功能，例如 Visual Studio 可以使用快捷鍵 <kbd>Ctrl</kbd>+<kbd>K</kbd>, <kbd>Ctrl</kbd>+<kbd>D</kbd> 來自動格式化整個檔案。另外也有像 [CodeMaid](https://marketplace.visualstudio.com/items?itemName=SteveCadwallader.CodeMaid) 這種擴充插件可以使用。

而 Visual Studio 也可以使用快捷鍵 <kbd>F2</kbd> 來快速重新命名變數和方法。

## 參考資料
- [C# 編碼慣例 (C# 程式設計手冊)](https://docs.microsoft.com/zh-tw/dotnet/csharp/programming-guide/inside-a-program/coding-conventions)
- [命名方針](https://docs.microsoft.com/zh-tw/dotnet/standard/design-guidelines/naming-guidelines)
- [大小寫慣例](https://docs.microsoft.com/zh-tw/dotnet/standard/design-guidelines/capitalization-conventions)
- [一般命名慣例](https://docs.microsoft.com/zh-tw/dotnet/standard/design-guidelines/general-naming-conventions)
- [C# Coding Standards and Naming Conventions](https://github.com/ktaranov/naming-convention/blob/master/C%23%20Coding%20Standards%20and%20Naming%20Conventions.md)
- [C# Naming Conventions](https://www.c-sharpcorner.com/UploadFile/8a67c0/C-Sharp-coding-standards-and-naming-conventions/)
- [WiKi 駝峰式大小寫](https://zh.wikipedia.org/wiki/%E9%A7%9D%E5%B3%B0%E5%BC%8F%E5%A4%A7%E5%B0%8F%E5%AF%AB)
