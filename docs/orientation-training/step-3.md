---
sidebar_position: 3
title: 階段三：Robotis 套件
---

## RoboPlus Manager
拿出一台「CM-530」控制器及至少一顆「AX-12(A)」馬達，並使用 3-Pin 傳輸線連接。「CM-530」使用 USB 線連接電腦，接上 9~12 V 電源並開啟。

[![](https://1.bp.blogspot.com/-KLyF24RRlCA/YFwZQQzBexI/AAAAAAAAAfI/zHGCvbyp8cUegHPTCGWP7GrsAmfNpAJJQCPcBGAsYHg/w400-h299/MX530.png)](https://1.bp.blogspot.com/-KLyF24RRlCA/YFwZQQzBexI/AAAAAAAAAfI/zHGCvbyp8cUegHPTCGWP7GrsAmfNpAJJQCPcBGAsYHg/w400-h299/MX530.png)
> ▲ CM-530

打開「RoboPlus」程式，在中間的標籤頁中選擇「BIOLOID」，再點選「RoboPlus Manager」即會開啟新的視窗。

[![](https://1.bp.blogspot.com/-NrjL7EmsBL8/YFwZQRNncuI/AAAAAAAAAfI/zlktxG81QqcmCJUA5UF1wDcGbjiUEg6GwCPcBGAsYHg/s16000/%25E6%2593%25B7%25E5%258F%2596.PNG)](https://1.bp.blogspot.com/-NrjL7EmsBL8/YFwZQRNncuI/AAAAAAAAAfI/zlktxG81QqcmCJUA5UF1wDcGbjiUEg6GwCPcBGAsYHg/s16000/%25E6%2593%25B7%25E5%258F%2596.PNG)
> ▲ RoboPlus 程式

「RoboPlus Manager」視窗中，點擊左上角的下拉式選單來選擇「CM-530」的COM Port，實際的 COM Port 請使用 Windows 的「裝置管理員」得知，或直接選擇「Auto Search」。完成後就可以按下旁邊的「Connect」按鈕進行連線。

[![](https://1.bp.blogspot.com/--1lPrJ4TLlI/YFwZQQSyDrI/AAAAAAAAAfI/W4CTYcriRhcmcD4LtH15Ap_gpR-9jmwqQCPcBGAsYHg/s16000/RP-COM.png)](https://1.bp.blogspot.com/--1lPrJ4TLlI/YFwZQQSyDrI/AAAAAAAAAfI/W4CTYcriRhcmcD4LtH15Ap_gpR-9jmwqQCPcBGAsYHg/s16000/RP-COM.png)
> ▲ RoboPlus Manager 頁面

連線成功後就會在左側列出所有找到的裝置。

[![](https://1.bp.blogspot.com/-m_1ViZJsmRs/YFwZQWqUQPI/AAAAAAAAAfI/O1eDZgPS6Sk8gjqylhBmEh0ZdvILIj2KACPcBGAsYHg/s16000/RP-Connected1.png)](https://1.bp.blogspot.com/-m_1ViZJsmRs/YFwZQWqUQPI/AAAAAAAAAfI/O1eDZgPS6Sk8gjqylhBmEh0ZdvILIj2KACPcBGAsYHg/s16000/RP-Connected1.png)
> ▲ RoboPlus Manager 連線成功

AX-12（或其它 AI 馬達）有兩種操作模式：Joint（關節）與Wheel（輪子）。正如其名，「關節模式」適合用於機器人關節，它使用角度位置來進行控制；「輪子模式」適合用在車輪等持續旋轉的地方，使用轉速及方向控制。

「關節模式」的角度範圍為：`0° ~ 300°`，對應的數值為：`0 ~ 1023`。中心點在 `150° (512)`。預計要使用「關節模式」來進行組裝的話，請記得在組裝前先將其轉到中心點。

在「RoboPlus Manager」視窗的右上角選擇「Joint」，在中間區域點選「Goal Position」就可以進行「關節模式」的控制。

[![](https://1.bp.blogspot.com/-onR6Fm_Fn0k/YFwZQa-88pI/AAAAAAAAAfI/fBvNWGtg2IAVk6BHGyZXbDb9E01BjLC6wCPcBGAsYHg/s16000/RP-Connected3.png)](https://1.bp.blogspot.com/-onR6Fm_Fn0k/YFwZQa-88pI/AAAAAAAAAfI/fBvNWGtg2IAVk6BHGyZXbDb9E01BjLC6wCPcBGAsYHg/s16000/RP-Connected3.png)
> ▲ 關節模式控制頁面

「輪子模式」可以 `360°` 連續不斷地旋轉。並且可以控制方向為「CW（順時針）」或「CCW（逆時針）」。旋轉速度的數值範圍為：`0 ~ 1023`，數值為 `0` 代表停止轉動。

在「RoboPlus Manager」視窗的右上角選擇「Wheel」，在中間區域點選「Moving Speed」就可以進行「輪子模式」的控制。

[![](https://1.bp.blogspot.com/-1j9aCzzWjI0/YFwZQX8-fII/AAAAAAAAAfI/nDdeqI7pNdczM6KYbvhsH5AriKAC1go_QCPcBGAsYHg/s16000/RP-whell.png)](https://1.bp.blogspot.com/-1j9aCzzWjI0/YFwZQX8-fII/AAAAAAAAAfI/nDdeqI7pNdczM6KYbvhsH5AriKAC1go_QCPcBGAsYHg/s16000/RP-whell.png)
> ▲ 輪子模式控制頁面

使用完「RoboPlus Manager」記得點擊「Disconnect」進行斷線，否則「CM-530」會被它佔用，導致其它程式沒辦法使用「CM-530」。

## RoboPlus Task

打開「RoboPlus」程式，在中間的標籤頁中選擇「BIOLOID」，再點選「RoboPlus Task」即會開啟新的視窗。

[![](https://1.bp.blogspot.com/-NrjL7EmsBL8/YFwZQRNncuI/AAAAAAAAAfI/zlktxG81QqcmCJUA5UF1wDcGbjiUEg6GwCPcBGAsYHg/s16000/%25E6%2593%25B7%25E5%258F%2596.PNG)](https://1.bp.blogspot.com/-NrjL7EmsBL8/YFwZQRNncuI/AAAAAAAAAfI/zlktxG81QqcmCJUA5UF1wDcGbjiUEg6GwCPcBGAsYHg/s16000/%25E6%2593%25B7%25E5%258F%2596.PNG)
> ▲ RoboPlus 程式

於任意一行點擊兩下進行控制器選擇。上方的「Firmware Version」選擇 `1.0`，再於下方選擇「CM-530」。

[![](https://1.bp.blogspot.com/-su1GYBQGivQ/YF1piGrZh_I/AAAAAAAAAhY/IMOPP18ZvMY8tGLXTxZlEa_2Os0gx-iMwCPcBGAsYHg/s16000/Version.png)](https://1.bp.blogspot.com/-su1GYBQGivQ/YF1piGrZh_I/AAAAAAAAAhY/IMOPP18ZvMY8tGLXTxZlEa_2Os0gx-iMwCPcBGAsYHg/s16000/Version.png)
> ▲ 選擇控制器為 CM-530

選擇完控制器後就可以開始進行程式撰寫。在空白行點擊兩下即會跳出程式碼選單，需從中選擇需要的程式碼以進行插入。

[![](https://1.bp.blogspot.com/-XglEUmE-giU/YF1rnMYkdBI/AAAAAAAAAiI/j302mWALcugjGppKnY1myv58q--ltvoDQCPcBGAsYHg/s16000/%25E6%2593%25B7%25E5%258F%2596.PNG)](https://1.bp.blogspot.com/-XglEUmE-giU/YF1rnMYkdBI/AAAAAAAAAiI/j302mWALcugjGppKnY1myv58q--ltvoDQCPcBGAsYHg/s16000/%25E6%2593%25B7%25E5%258F%2596.PNG)
> ▲ 程式碼指令清單

其中幾個比較重要的程式碼指令功能如下：
- `START PROGRAM`：程式的起始點，必須要有。
- `ENDLESS LOOP`：無限迴圈，基本上也都要有。
- `? = ?`：指定狀態。
  - 例如點擊左邊的 `?` 並選擇「DYNAMIXEL」內的「DX/RX/AX Series」，在上方選擇目標的馬達 ID 及想要控制的馬達參數，再點擊右邊的 `?` 後即可設定數值。
- `IF`、`ELSE IF`、`ELSE`：程式中常見的基本「if-else」判斷式。
- `WAIT WHILE`：通常用來搭配「Timer」來當 Delay 使用。

以下示範一個簡單的程式。其功能為：
- 如果按下「CM-530」上的「U」按鈕，ID 為 `1` 的馬達就會以 `512` 的速度進行 CW（順時針）轉動。
- 如果沒有按下「CM-530」上的「U」按鈕，但是有按下「D」按鈕，ID 為 `1` 的馬達就會以 `512` 的速度進行 CCW（逆時針）轉動。
- 如果沒按下任何按鈕，ID 為 `1` 的馬達就會停止轉動（速度為 `0`）。

[![](https://1.bp.blogspot.com/-PqLOREtsteA/YF11KeTJklI/AAAAAAAAAjM/jm4EjYU0oiUArE4GGUVeX4QGnL7TFfCwACPcBGAsYHg/s16000/%25E6%2593%25B7%25E5%258F%2596-example.PNG)](https://1.bp.blogspot.com/-PqLOREtsteA/YF11KeTJklI/AAAAAAAAAjM/jm4EjYU0oiUArE4GGUVeX4QGnL7TFfCwACPcBGAsYHg/s16000/%25E6%2593%25B7%25E5%258F%2596-example.PNG)
> ▲ 範例程式碼

[![](https://1.bp.blogspot.com/-cxyDcKVqrlM/YF11KRAybII/AAAAAAAAAjM/lvRjWxbMvrk3xqPMiYBfFr9p34soQtVqgCPcBGAsYHg/w640-h102/%25E6%2593%25B7%25E5%258F%2596-delay.PNG)](https://1.bp.blogspot.com/-cxyDcKVqrlM/YF11KRAybII/AAAAAAAAAjM/lvRjWxbMvrk3xqPMiYBfFr9p34soQtVqgCPcBGAsYHg/w640-h102/%25E6%2593%25B7%25E5%258F%2596-delay.PNG)
> ▲ Delay 的寫法

點選上方的紅色勾勾（:heavy_check_mark:）檢查程式碼是否有語法錯誤；點擊上方的綠色向下箭頭（:arrow_down:）進行程式燒錄。燒錄時請確認「CM-530」沒被其它程式（如「RoboPlus Manager」）佔用。

燒錄完成後，連續按下「CM-530」上紅色的「MODE」按鈕，直到其左上方的「PC LINK」最下面的「PLAY」指示燈亮起紅色，再按下右方的「START」按鈕，等待數秒即會執行程式碼。

## 驗收-3：以 Robotis 套件控制機械手臂
使用 Robotis 套件來控制「驗收-2」所設計的機械手臂。要求僅需要進行簡單的動作控制，只要能看出可以控制馬達即可。