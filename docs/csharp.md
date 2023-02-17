---
sidebar_position: 7
title: C#
---

[Learn C# in Y Minutes](https://learnxinyminutes.com/docs/csharp/)
[安裝Nuget套件](https://youtu.be/lR8RZ_RZhxk)

## 類別 Class
### 類別的組成
```cs
public class MyClass
{
    // 欄位 Field。
    public int MyField;

    // 屬性 Property。
    public float MyProperty { get; set; }

    // 方法 Method。
    public void MyMethod(double myParameter1, string myParameter2)
    { /* Some code here... */ }

    // 建構子 Constructor，或稱建構函式。
    public MyClass()
    { /* Some code here... */ }

    // 解構子 Destructor，或稱解構函式、完成項。
    ~MyClass()
    { /* Some code here... */ }
}
```

## Lambda 運算子
### 方法
```cs
// 在方法(Method)中取代 return。
// Add1、Add2 與 Add3 的功能完全相同。

int Add1(int a, int b)
{
    return a + b;
}

int Add2(int a, int b)
    => a + b;

int Add3(int a, int b) => a + b;
```

### 屬性
```cs
// 簡化屬性(Property)的 getter 與 setter。
// Speed1 與 Speed2 的功能完全相同。

private int _speed;

public int Speed1
{
    get
    {
        return _speed;
    }

    set
    {
        // 3 元運算子。若 value < 0 的話給 0，否則給 value。
        _speed = (value < 0) ? 0 : value;
    }
}

public int Speed2
{
    get =>  _speed;
    set =>  _speed = (value < 0) ? 0 : value;
}
```

### 唯讀屬性
```cs
// 簡化 read-only 的屬性(Property)。
// Message1 與 Message2 的功能完全相同。

public string Message1
{
    get
    {
        return "Hello World!";
    }
}

public string Message2 => "Hello World!";
```

### 無參數無回傳的委派
```cs
// 無參數及回傳值委派（delegate），達成匿名方法。

// 宣告一個委派 MyAction。
delegate void MyAction();
  
void Main()
{
    // 實體化一個 MyAction：act。
    MyAction act = null;
    
    // 正統的完整寫法。
    act = new MyAction(ShowA);
    act(); // 顯示「A」。
    
    // 簡化的寫法。
    act = ShowB;
    act(); // 顯示「B」。
    
    // 使用 Lambda 運算子達成匿名方法。
    act = () => MessageBox.Show("C");
    act(); // 顯示「C」。
    
    // 多行的匿名方法。
    act = () => 
    {
      MessageBox.Show("D1");
      MessageBox.Show("D2");
      MessageBox.Show("D3");
    };
    act(); // 顯示「D1」、「D2」與「D3」。
}
      
void ShowA() { MessageBox.Show("A"); }
void ShowB() { MessageBox.Show("B"); }
```

### 有參數有回傳的委派
```cs
// 具有參數及回傳值的委派（delegate），達成匿名方法。
// Main1() 與 Main2() 的功能完全相同。

// 使用 C# 內建的泛型 Func<> 宣告委派 MyFunc。
Func<int, string> MyFunc;

void Main1()
{
    MyFunc = Convert;
    string text = MyFunc(2);
}

string Convert(int number)
{
    return Convert.ToString(number * 10);
}

void Main2()
{
    MyFunc = (a) => Convert.ToString(a * 10);
    string text = MyFunc(2);
}
```

### 事件委派
```cs
// 對於事件的委派（delegate），達成匿名方法。
// Init1() 與 Init2() 的功能完全相同。

int Count = 0;
Timer MyTimer = new Timer();

void Init1()
{
    MyTimer.Tick += MyTimerEvent;
}

void MyTimerEvent(object sender, EventArgs e)
{
    ++Count;
}

void Init2()
{
    MyTimer.Tick += (s, e) => ++Count;
}
```

### 參考資料
- [委派 - C# 程式設計手冊](https://docs.microsoft.com/zh-tw/dotnet/csharp/programming-guide/delegates/)
- [delegate 運算子 - C# 參考](https://docs.microsoft.com/zh-tw/dotnet/csharp/language-reference/operators/delegate-operator)
- [=> 運算子 - C# 參考](https://docs.microsoft.com/zh-tw/dotnet/csharp/language-reference/operators/lambda-operator)
- [C#雜記 — 委派(Delegate)、FUNC<\>、ACTION<\>](https://ad57475747.medium.com/c-%E9%9B%9C%E8%A8%98-%E5%A7%94%E6%B4%BE-delegate-func-action-4b3191c7a131)
- [茅塞頓開的一晚-Func 委派+匿名方法+lambda](https://dotblogs.com.tw/lastsecret/2010/06/26/16201)
