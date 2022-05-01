---
sidebar_position: 9
title: 單元測試 Unit Testing
---

單元測試指的是一種自動化的程式，專門用來對另一個目標程式進行測試，以驗證目標程式的運作與邏輯是否正常。

## 基本概念

單元測試的概念其實很簡單，甚至大部分的人都有寫過類似的程式。例如以下有一個數學加法的程式，他會將兩個參數相加後回傳。
```cs
// File name: Math.cs
class Math
{
    int Add(int a, int b)
    {
        return (a + b);
    }
}
```

對於上面這個程式，我們如果想要用程式來測試它的功能是否正常，我們可以編寫以下程式：
```cs
// File name: MathTest.cs
class MathTest
{
    void Add_Input1And2_Return3()
    {
        // Arrange.
        Math math = new Math();
        
        int firstNumber = 1;
        int secondNumber = 2;
        
        int expected = 3;
        int actual;
        
        // Act.
        actual = math.Add(firstNumber, secondNumber);
        
        // Assert.
        Assert.AreEqual(expected, actual);
    }
}
```

上面這個「MathTest.cs」就可以視爲一個簡單的單元測試程式。可以注意它使用了「3A（Arrange-Act-Assert，準備-操作-驗證）」的結構，這樣做的好處是很方便瞭解該單元測試程式的運作方式。而該測試方法的命名使用了「目標被測方法_假設條件_預期行爲」的結構。

## 參考資料
- [Unit Testing 簡介](https://ithelp.ithome.com.tw/articles/10102264)
- 單元測試的藝術 第二版（Roy Osherove, The Art of Unit Testing: with wxamples in C#, 2nd Edition）
- [單元測試的藝術-讀後整理](https://sunxiaoshan.medium.com/%E5%96%AE%E5%85%83%E6%B8%AC%E8%A9%A6%E7%9A%84%E8%97%9D%E8%A1%93-%E8%AE%80%E5%BE%8C%E6%95%B4%E7%90%86-ba2a4d3491c5)
- [《單元測試的藝術》學習筆記](https://zh-tw.coderbridge.com/series/89e2405766bc423b965adcdd4af244a0)