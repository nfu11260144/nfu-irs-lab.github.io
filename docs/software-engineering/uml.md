---
sidebar_position: 3
title: 統一塑模語言 UML
---

UML 是一種規範語言，它定義了數種不同的圖示，以圖形化的方式來協助軟體工程相關事務。

## 類別圖
對於物件導向程式（OOP），UML 最常被使用的是類別圖（Class Diagram）。類別圖是用來表示一段 OOP 中各個類別（Class）的成員（Member），以及它和其它類別的關係。使用類別圖可以很清楚地看出這段程式碼的架構，進而對程式做更進一步的分析。

### 圖形
- 類別（Class）
  - 一個矩形。
  - 基本可以分成 3 格，其中只有第 1 格是必要的：
    - 第 1 格：該 Class 的名稱，需為**粗體字**。
    - 第 2 格：該 Class 的屬性（Attribute）。
    - 第 3 格：該 Class 的方法（Operation）。
  - 屬性及方法的名稱前面加上符號以代表其封裝：
    - `+`：Public
    - `-`：Private
    - `#`：Protected
    - `~`：Package
  - 使用斜體樣式來代表抽象（Abstract）。
  - 使用底線樣式來代表靜態（Static）。
- 介面（Interface）
  - 基本規則與 Class 相同，但在第 1 格的名稱之上需加上一行 `<<Interface>>`，作為區分。
  - 另外還有所謂的「棒棒糖」表示法。

### 關係
- 依賴（Dependency）
  - 關鍵字：uses a
  - 開口箭頭虛線。〈⋯⋯
- 關聯（Association）
  - 關鍵字：has a
  - 開口箭頭實線。〈㇐
- 聚合（Aggregation）
  - 關鍵字：owns a
  - 空心菱形實線，菱形在母體（較大的）端。◇㇐
  - 概念：
    - 弱擁有。
    - 生命週期無關。
    - 互無部署關係的多個事物組成的***集合***。
  - 舉例：
    - 機場中的飛機。
    - 飛機可以飛離機場，機場也可以都沒飛機。機場被拆除的話飛機不用也跟著拆除，反之依然。
    - `機場` ◇㇐ `飛機`。
- 組合（Composition）
  - 關鍵字：is a part of
  - 實心菱形實線，菱形在母體（較大的）端。◆㇐
  - 概念：
    - 強擁有。
    - 生命週期有關。
    - 某個事物是另一事物的***一部分***。
  - 舉例：
    - 機場中的跑道。
    - 要拆除機場的話跑道也會一起拆除。
    - `機場` ◆㇐ `跑道`。
- 繼承（Inheritance）
  - 關鍵字：is a
  - 空心三角形實線。◁㇐
- 實作（Implementation / Realization）
  - 關鍵字：is like a
  - 空心三角形虛線。◁⋯⋯

## 參考資料
- [[Design Pattern] UML基礎 - 類別圖 ~ Code Paradise](http://glj8989332.blogspot.com/2018/02/design-pattern-uml.html?m=1)
- [Dependency Inversion Implies Interfaces Are Owned by High-level Modules | Mikhail Shilkov](https://mikhail.io/2016/05/dependency-inversion-implies-interfaces-are-owned-by-high-level-modules/)
- [Inversion of Control Containers and the Dependency Injection pattern](https://www.martinfowler.com/articles/injection.html)
- [【UML】Class Diagram 類別圖 (下)：Relationships 關係 - SpicyBoyd 部落格](https://spicyboyd.blogspot.com/2018/07/umlclass-diagram-relationships.html)
- [UML類別圖：Aggregation vs. Composition | 自學程式誌](https://chenglearning.blogspot.com/2015/02/classrelationship.html#more)
- [軟體設計及架構---UML 入門](https://ithelp.ithome.com.tw/articles/10223499)