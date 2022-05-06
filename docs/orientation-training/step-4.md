---
sidebar_position: 4
title: 階段四：C# 程式
---

學習 C# 程式語言與 Visual Studio IDE 軟體。

## 硬體

準備以下硬體：
1. 通訊轉換器
2. 馬達
3. 電源轉接板
4. 12V 電源供應器
5. 2 條 3Pin 線。

[![](https://1.bp.blogspot.com/-MHwlCwtcL1o/YF13G6eexzI/AAAAAAAAAjw/Vfc9w23X_8Qo3jwq2PV55i6u-KLfBnh8gCPcBGAsYHg/s16000/Necessary_Device.png)](https://1.bp.blogspot.com/-MHwlCwtcL1o/YF13G6eexzI/AAAAAAAAAjw/Vfc9w23X_8Qo3jwq2PV55i6u-KLfBnh8gCPcBGAsYHg/s16000/Necessary_Device.png)
> ▲ 由左至右分別為：12V 電源供應器、AX-12(A) 馬達、通訊轉換器、電源轉接板及 2 條 3Pin 線

將它們如下圖連接。

[![](https://1.bp.blogspot.com/-CFlt05sNWe0/YF13VRWRhEI/AAAAAAAAAj0/Lszh1iwbzLEIL2IXsr32xSbpLgKBrRxTQCPcBGAsYHg/s16000/Conncet.png)](https://1.bp.blogspot.com/-CFlt05sNWe0/YF13VRWRhEI/AAAAAAAAAj0/Lszh1iwbzLEIL2IXsr32xSbpLgKBrRxTQCPcBGAsYHg/s16000/Conncet.png)
> ▲ 連接方式

確認通訊轉換器的模式，「AX / MX」系列使用「TTL」模式；「DX / RX / EX / MX」系列使用「RS-485」模式。

本例使用「AX-12(A)」馬達，因此為「TTL」模式，如果選擇錯誤則會導致後續失敗。

確認連接正確，接上電腦並確認 COM Port 後，開啟「RoboPlus」並於上方選擇「Expert」模式並點選「Dynamixel Wizard」。

[![](https://1.bp.blogspot.com/-nPVu2vGBUIQ/YF13lSFBzcI/AAAAAAAAAkM/W_xj7O1FlC4fFTMySRmheJsoqu5xVMPFQCPcBGAsYHg/s16000/Dynamixel%2BWizard%2BUI.png)](https://1.bp.blogspot.com/-nPVu2vGBUIQ/YF13lSFBzcI/AAAAAAAAAkM/W_xj7O1FlC4fFTMySRmheJsoqu5xVMPFQCPcBGAsYHg/s16000/Dynamixel%2BWizard%2BUI.png)
> ▲ Dynamixel Wizard 的介面

選擇 COM Port 並點選「Start searching」尋找馬達，若成功連接即可獲取其 ID 與鮑率。
[![](https://1.bp.blogspot.com/-fXX6jnB1GGE/YF13rQEHrYI/AAAAAAAAAkQ/Z4XqpkWIafkwJRNBwk7gbVwccMecR0ZQgCPcBGAsYHg/s639/NeedKnow.png)](https://1.bp.blogspot.com/-fXX6jnB1GGE/YF13rQEHrYI/AAAAAAAAAkQ/Z4XqpkWIafkwJRNBwk7gbVwccMecR0ZQgCPcBGAsYHg/s639/NeedKnow.png)
> ▲ 馬達的 ID 與鮑率

## 軟體

使用 [Visual Studio](https://visualstudio.microsoft.com/) IDE 來編寫 C# 程式。

Visual Studio 安裝免費的 Community 版就好。

### 指令封包
透過 [ROBOTIS Protocol 1](https://emanual.robotis.com/docs/en/dxl/protocol1/) 封包協定達成馬達控制。

此封包必須包含以下幾項（皆為 `Byte` 型態）：
1. 兩個標頭（`0xFF`）
2. 馬達 ID
3. 封包長度（參數數量 +3）
4. 封包指令（[指令表](https://emanual.robotis.com/docs/en/dxl/protocol1/#instruction)）
5. 指令數據起始位置（[AX-12A](https://emanual.robotis.com/docs/en/dxl/ax/ax-12a/#control-table-of-eeprom-area)）
6. 參數 
7. 校驗碼（[算法](https://emanual.robotis.com/docs/en/dxl/protocol1/#checksum-status-packet)）

> 透過第5點指令位址來判斷指令有幾位元。Goal Position 與 Moving Speed 皆為 2 Byte。

### C# 指令封包範例

開啟 Visual Stduio，新增「Windows Forms App (.NET Framework)」 C# 專案。在「Form1.cs [Design]」視窗中於側邊的「ToolBox」中將「Serial Port」拖拉到畫面中，並在「Peoperties」中修改「PortName」為正確的 COM Port。

[![](https://1.bp.blogspot.com/-0gnKNTJOrhA/YF2Cb4XX5pI/AAAAAAAAAks/FLEU_yVq1l0OjtCJlWP33p8E7wa7MkptQCPcBGAsYHg/s1860/SerialPort.png)](https://1.bp.blogspot.com/-0gnKNTJOrhA/YF2Cb4XX5pI/AAAAAAAAAks/FLEU_yVq1l0OjtCJlWP33p8E7wa7MkptQCPcBGAsYHg/s1860/SerialPort.png)
> ▲ 新增 Serial Port

```cs title="發送封包範例"
private void ControlAX12(int id, int position, int speed)
{
    // 建立資料封包。
    // 官方說明：https://emanual.robotis.com/docs/en/dxl/protocol1/#instruction-packet
    byte[] dataPackage = new byte[11];
    dataPackage[0] = 0xFF;     // 標頭1 (Header1)，固定為0xFF。
    dataPackage[1] = 0xFF;     // 標頭2 (Header2)，固定為0xFF。
    dataPackage[2] = (byte)id; // 封包傳送的ID (Packet ID)。
    dataPackage[3] = (byte)7;  // 長度 (Length)，其數值為參數位元組數量+3。
    dataPackage[4] = 0x03;     // 指令 (Instruction)，0x03為"Write"指令。
    dataPackage[5] = (byte)30; // 起始地址 (Starting address)。地址"30"對應的是"Goal Position"。
    dataPackage[6] = (byte)(position & 0xFF); // "Goal Position"參數位元組1 (低8位元)。
    dataPackage[7] = (byte)(position >> 8);   // "Goal Position"參數位元組2 (高8位元)。
    dataPackage[8] = (byte)(speed & 0xFF);    // "Moving Speed"參數位元組1 (低8位元)。
    dataPackage[9] = (byte)(speed >> 8);      // "Moving Speed"參數位元組2 (高8位元)。

    // 計算校驗和 (Checksum)。
    byte a = 0;
    for (int i = 2; i < 10; i++)
    {
        a += dataPackage[i];
    }
    dataPackage[10] = (byte)(0xFF - a);

    try
    {
        serialPort.Write(dataPackage, 0, dataPackage.Length); // 傳送。
        Thread.Sleep(1); // Delay 1 ms.
    }
    catch (Exception ex)
    {
        MessageBox.Show($"傳送封包時出錯。\r\n{ex.Message}",
                        "Error",
                        MessageBoxButtons.OK,
                        MessageBoxIcon.Error);
    }
}
```
完成封包後，透過 Serial Port 做傳輸。

### AX-12 馬達控制範例程式

到實驗室的 GitHub 下載 AX-12 馬達控制程式。連結：[nfu-irs-lab/AX12_motor_controller](https://github.com/nfu-irs-lab/AX12_motor_controller)

從 GitHub 上下載此程式碼專案，可以用以下任一種方式：
- 在「Releases」頁面，並在最新版本（Latest）的發佈文章下點擊「Source Code (zip)」，下載最新的發佈版本程式。（**推薦**）
- 在主頁面上點擊「Code」，再點擊「Download ZIP」下載程式碼。
- 使用 Git Clone。

[![](https://1.bp.blogspot.com/-A41nPy0eULA/YFwSl_OYOrI/AAAAAAAAAdI/5inEvp7YqrIMq3HSwm8XX1PHz89H_LQDQCPcBGAsYHg/w1684-h1069-p-k-no-nu/github-%25E4%25B8%258B%25E8%25BC%2589.png)](https://1.bp.blogspot.com/-A41nPy0eULA/YFwSl_OYOrI/AAAAAAAAAdI/5inEvp7YqrIMq3HSwm8XX1PHz89H_LQDQCPcBGAsYHg/w1684-h1069-p-k-no-nu/github-%25E4%25B8%258B%25E8%25BC%2589.png)
> ▲ 在 GitHub 上下載 AX-12 控制程式

使用 Visual Studio 來開啟「AX12_motor_controller.sln」檔案，就可以開啟範例程式專案。

## 驗收-4：以 C# 控制機械手臂
使用 C# 撰寫一個視窗程式，自行設計其圖形介面，並可以用來控制「驗收-2」所設計的機械手臂。

要求動作為，以圖形介面操控機械手臂及其夾爪，從「位置-A」夾取目標物（如空寶特瓶），並將其放到「位置-B」。位置 A 與 B 視情況由學長指定。

:::caution 整理與收拾
當所有驗收都完成後，請將組裝的機械手臂拆解，將螺絲、馬達、電線等零件和工具物歸原處，打掃工作環境並整理乾淨。

全部都完成後告知學長並確認後，才算是正式結束新進人員訓練。
:::
