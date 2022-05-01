---
sidebar_position: 8
title: 複合優於繼承
---

Favor composition over inheritance.

## 概念與理由

假設今天有個夾爪控制器，它需要透過 Serial Port 來進行通訊。這時我們有 2 種選擇：
- 繼承（Inheritance）：夾爪控制器「是一個」Serial Port 裝置。
- 複合（Composition）：夾爪控制器「有一個」Serial Port 裝置。

這樣看起來好像沒什麼差別，但實際上「繼承」的做法會降低其彈性。例如今天有一個裝置，它需要同時使用 2 個 Serial Port，這時如果使用「繼承」的話就會變成非常麻煩、難以達成；但如果是用「複合」的話，就只要再多宣告一個 Serial Port 就可以了。

```cs
// 使用繼承的方式。難以達成 2 個 Serial Port 的需求。
class Device : SerialPort
{
}

// 使用複合的方式。
class Device
{
    SerialPort SerialPortA = new SerialPort();
    SerialPort SerialPortB = new SerialPort();
}
```

## 參考資料
- [物件導向程式設計：為何說composition優於inheritance？](https://tw.twincl.com/programming/-662v)
- [Why composition is often better than inheritance](http://joostdevblog.blogspot.com/2014/07/why-composition-is-often-better-than.html)
