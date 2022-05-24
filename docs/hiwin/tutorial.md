---
sidebar_position: 1
title: 相關教學
---

## 機械手臂使用指南
### 各裝置名稱
|名稱|型號|圖片|
|-|-|-|
|關節式機器手臂（以下稱「手臂」）|RT605-710-GB|[![](https://1.bp.blogspot.com/-1vYJ_BSNFzQ/YEIEqnIb9aI/AAAAAAAAAGA/-NLk58wh78cxh2eY7B2UNUohCVvJ6sTcACPcBGAsYHg/s150/rt605_710_gb_b.jpg)](https://1.bp.blogspot.com/-1vYJ_BSNFzQ/YEIEqnIb9aI/AAAAAAAAAGA/-NLk58wh78cxh2eY7B2UNUohCVvJ6sTcACPcBGAsYHg/s150/rt605_710_gb_b.jpg)|
|機器手臂控制器（以下稱「控制箱」）|RTC605-710-GB|[![](https://1.bp.blogspot.com/-HIKC_lc6gnI/YEIEqmm7bDI/AAAAAAAAAGA/PapbPf9fExUv0VzsgyaqdmYYGZbJH_1-wCPcBGAsYHg/s150/RCT605-710-GB.jpg)](https://1.bp.blogspot.com/-HIKC_lc6gnI/YEIEqmm7bDI/AAAAAAAAAGA/PapbPf9fExUv0VzsgyaqdmYYGZbJH_1-wCPcBGAsYHg/s150/RCT605-710-GB.jpg)|
|教導器|TP02|[![](https://1.bp.blogspot.com/-z7rLn2X9myo/YEIEqiwpunI/AAAAAAAAAGA/9u8uI128UqY6lS7uWiopcmPQdKu9NojkgCPcBGAsYHg/s150/HIWIN-TP02.png)](https://1.bp.blogspot.com/-z7rLn2X9myo/YEIEqiwpunI/AAAAAAAAAGA/9u8uI128UqY6lS7uWiopcmPQdKu9NojkgCPcBGAsYHg/s150/HIWIN-TP02.png)|

### 開機與關機
|步驟|說明|圖片|
|:-:|:-|:-:|
|1|將控制箱的電源開關向上扳動至「1」，即可進行開機。|[![](https://1.bp.blogspot.com/-Z82YAr6zbrk/YFn82gePy5I/AAAAAAAAAYs/IXnwPu2sUgoIz5Oyf6JIjlrF5QgaVspFACPcBGAsYHg/w400-h348/%25E6%258E%25A7%25E5%2588%25B6%25E7%25AE%25B1-%25E9%259B%25BB%25E6%25BA%2590_%25E9%2596%258B_result.jpg)](https://1.bp.blogspot.com/-Z82YAr6zbrk/YFn82gePy5I/AAAAAAAAAYs/IXnwPu2sUgoIz5Oyf6JIjlrF5QgaVspFACPcBGAsYHg/w400-h348/%25E6%258E%25A7%25E5%2588%25B6%25E7%25AE%25B1-%25E9%259B%25BB%25E6%25BA%2590_%25E9%2596%258B_result.jpg)|
|2|等待教導器顯示控制畫面，即完成開機。||
|3|點擊教導器 `主選單（左上角手臂圖樣） > shutdown（關機）`，即可進行關機。進行此步驟前請先確認手臂已經停止動作。||
|4|等待控制箱的運作聲停止後***等待至少 5 秒***，才可以將控制箱的電源開關向下扳動至「0」，完成關機。|[![](https://1.bp.blogspot.com/-IOskaSgm3f8/YFn82h_DZaI/AAAAAAAAAYs/0jikOF8d1esQE5AWpXRLYYKcLXZ1aBzDACPcBGAsYHg/w400-h339/%25E6%258E%25A7%25E5%2588%25B6%25E7%25AE%25B1-%25E9%259B%25BB%25E6%25BA%2590_%25E9%2597%259C_result.jpg)](https://1.bp.blogspot.com/-IOskaSgm3f8/YFn82h_DZaI/AAAAAAAAAYs/0jikOF8d1esQE5AWpXRLYYKcLXZ1aBzDACPcBGAsYHg/w400-h339/%25E6%258E%25A7%25E5%2588%25B6%25E7%25AE%25B1-%25E9%259B%25BB%25E6%25BA%2590_%25E9%2597%259C_result.jpg)|
|5|關閉電源完成關機後，若想要重新開機，需在完成關機後***等待至少 30 秒***，才可以再次開機。||

### 連線
|步驟|說明|圖片|
|:-:|:-|:-:|
|1|使用 RJ-45 網路線連接電腦主機與控制箱。控制箱有兩個 RJ-45 網路孔，應先嘗試 LAN 2（上面的），並確認燈號。|[![](https://1.bp.blogspot.com/-elOivsHWe7U/YEIEqj3pG5I/AAAAAAAAAGA/XYY_fmE9pxceQQGnPPXTdHQSAKTGh4EQwCPcBGAsYHg/s300/%25E6%258E%25A7%25E5%2588%25B6%25E7%25AE%25B1-RJ45%25E7%25B6%25B2%25E8%25B7%25AF%25E5%25AD%2594_result.jpg)](https://1.bp.blogspot.com/-elOivsHWe7U/YEIEqj3pG5I/AAAAAAAAAGA/XYY_fmE9pxceQQGnPPXTdHQSAKTGh4EQwCPcBGAsYHg/s300/%25E6%258E%25A7%25E5%2588%25B6%25E7%25AE%25B1-RJ45%25E7%25B6%25B2%25E8%25B7%25AF%25E5%25AD%2594_result.jpg)|
|2|在教導器上依序點擊 `主選單（左上角手臂圖樣）> 顯示資訊 > 用戶組`。|[![](https://1.bp.blogspot.com/-gsKab2T_R_0/YEIEqmRnNJI/AAAAAAAAAGA/1VewMuujYLkJUrjUdyBD3oPSCK78h2ZXwCPcBGAsYHg/s799/HRSS-%25E5%2588%2587%25E6%258F%259B%25E7%2594%25A8%25E6%2588%25B61_result.jpg)](https://1.bp.blogspot.com/-gsKab2T_R_0/YEIEqmRnNJI/AAAAAAAAAGA/1VewMuujYLkJUrjUdyBD3oPSCK78h2ZXwCPcBGAsYHg/s799/HRSS-%25E5%2588%2587%25E6%258F%259B%25E7%2594%25A8%25E6%2588%25B61_result.jpg)|
|3|選擇「Expert」按下「登入」並輸入密碼 `hiwin`。完成後會顯示用戶組爲「Expert」。|[![](https://1.bp.blogspot.com/-zY3syaWgO4c/YEIEqrn8mvI/AAAAAAAAAGA/iHqbfsOJXSEe_NtiE96ECHaO91BKg4S6wCPcBGAsYHg/s800/HRSS-%25E5%2588%2587%25E6%258F%259B%25E7%2594%25A8%25E6%2588%25B62_result.jpg)](https://1.bp.blogspot.com/-zY3syaWgO4c/YEIEqrn8mvI/AAAAAAAAAGA/iHqbfsOJXSEe_NtiE96ECHaO91BKg4S6wCPcBGAsYHg/s800/HRSS-%25E5%2588%2587%25E6%258F%259B%25E7%2594%25A8%25E6%2588%25B62_result.jpg)|
|4|在教導器上依序點擊 `主選單 > 啓動設定 > 網路連接設定`。|[![](https://1.bp.blogspot.com/-YBuEk6RLods/YEIEqmJC1vI/AAAAAAAAAGA/Zk-0wLnfp98keZJLGmvICVXUOGl2MLR7wCPcBGAsYHg/s799/HRSS-%25E7%25B6%25B2%25E8%25B7%25AF%25E9%2580%25A3%25E6%258E%25A5%25E8%25A8%25AD%25E5%25AE%259A1_result.jpg)](https://1.bp.blogspot.com/-YBuEk6RLods/YEIEqmJC1vI/AAAAAAAAAGA/Zk-0wLnfp98keZJLGmvICVXUOGl2MLR7wCPcBGAsYHg/s799/HRSS-%25E7%25B6%25B2%25E8%25B7%25AF%25E9%2580%25A3%25E6%258E%25A5%25E8%25A8%25AD%25E5%25AE%259A1_result.jpg)|
|5|下方會顯示此手臂 IP 位置，通常設爲 `192.168.0.3`。|[![](https://1.bp.blogspot.com/-3BiMKlNZjEY/YEIEqtC7fVI/AAAAAAAAAGA/nuCvz2ESQBk0PjcVpKtWBb9roK2ZpbW0ACPcBGAsYHg/s800/HRSS-%25E7%25B6%25B2%25E8%25B7%25AF%25E9%2580%25A3%25E6%258E%25A5%25E8%25A8%25AD%25E5%25AE%259A2_result.jpg)](https://1.bp.blogspot.com/-3BiMKlNZjEY/YEIEqtC7fVI/AAAAAAAAAGA/nuCvz2ESQBk0PjcVpKtWBb9roK2ZpbW0ACPcBGAsYHg/s800/HRSS-%25E7%25B6%25B2%25E8%25B7%25AF%25E9%2580%25A3%25E6%258E%25A5%25E8%25A8%25AD%25E5%25AE%259A2_result.jpg)|
|6|將教導器右上角的鑰匙轉至「Auto.」模式。|[![](https://1.bp.blogspot.com/-bH0bdIBfxRs/YEIEqgmJB2I/AAAAAAAAAGA/iLpl7L6T55kyhcH6PTuuRJR-cmfpzG9mgCPcBGAsYHg/s800/HRSS-Auto%25E6%25A8%25A1%25E5%25BC%258F_result.jpg)](https://1.bp.blogspot.com/-bH0bdIBfxRs/YEIEqgmJB2I/AAAAAAAAAGA/iLpl7L6T55kyhcH6PTuuRJR-cmfpzG9mgCPcBGAsYHg/s800/HRSS-Auto%25E6%25A8%25A1%25E5%25BC%258F_result.jpg)|
|7|在教導器上點選「EXT」。|[![](https://1.bp.blogspot.com/-vBwwi7KOB4A/YEIEqpUtigI/AAAAAAAAAGA/Ik0yLbkIyig0hu907Qaxbs3RF8u8ex87gCPcBGAsYHg/s180/HRSS-%25E9%2581%25B8%25E6%2593%2587EXT.JPG)](https://1.bp.blogspot.com/-vBwwi7KOB4A/YEIEqpUtigI/AAAAAAAAAGA/Ik0yLbkIyig0hu907Qaxbs3RF8u8ex87gCPcBGAsYHg/s180/HRSS-%25E9%2581%25B8%25E6%2593%2587EXT.JPG)|
|8|確認教導器螢幕右上角顯示爲「EXT」模式。|[![](https://1.bp.blogspot.com/-k6krFqtpVxg/YEIEqtaV-qI/AAAAAAAAAGA/C55h8eWygh48eDco6HQx0_G6wrStI887gCPcBGAsYHg/s800/HRSS-%25E7%25A2%25BA%25E8%25AA%258D%25E7%2588%25B2EXT_result.jpg)](https://1.bp.blogspot.com/-k6krFqtpVxg/YEIEqtaV-qI/AAAAAAAAAGA/C55h8eWygh48eDco6HQx0_G6wrStI887gCPcBGAsYHg/s800/HRSS-%25E7%25A2%25BA%25E8%25AA%258D%25E7%2588%25B2EXT_result.jpg)|
|9|在 Windows 中打開 `控制台 > 網路和網際網路 > 網路連線`。右鍵點擊 `目標網路介面卡 > 內容 > 網際網路通訊協定第4版(TCP/IPv4) > 內容`。<br/><br/>手動設定電腦 IP 位址爲 `192.168.0.100`、子網路遮罩爲 `255.255.255.0`，其餘可空白不填。<br/><br/>若有問題，可以嘗試將除手臂用的網路介面卡外的其他所有網路介面卡（如 Wi-Fi）都禁用。|[![](https://1.bp.blogspot.com/--S6kK2kQPOc/YEIEqgy3kCI/AAAAAAAAAGA/Aw-Jaeq9I6wA8qOs3_1aUijDZ2JrdzKowCPcBGAsYHg/s826/Win-%25E7%25B6%25B2%25E8%25B7%25AF%25E5%258D%25A1%25E8%25A8%25AD%25E5%25AE%259A_result.jpg)](https://1.bp.blogspot.com/--S6kK2kQPOc/YEIEqgy3kCI/AAAAAAAAAGA/Aw-Jaeq9I6wA8qOs3_1aUijDZ2JrdzKowCPcBGAsYHg/s826/Win-%25E7%25B6%25B2%25E8%25B7%25AF%25E5%258D%25A1%25E8%25A8%25AD%25E5%25AE%259A_result.jpg)|
|10|在 Windows 打開命令提示字元，使用 `ping` 指令檢測。使用方式爲 `ping 手臂IP`，例如 `ping 192.168.0.3`。<br/><br/>若成功（可以接收到手臂端回傳之封包）則表示網路相關設定應沒問題，可以使用程式與手臂進行連線。|[![](https://1.bp.blogspot.com/-I6ogoTnAIDE/YEIEqqFA5_I/AAAAAAAAAGA/eJVm5y73h-Y_r8IBPpYNXKAq5uVHbb7XwCPcBGAsYHg/s677/CMD-ping_s.JPG)](https://1.bp.blogspot.com/-I6ogoTnAIDE/YEIEqqFA5_I/AAAAAAAAAGA/eJVm5y73h-Y_r8IBPpYNXKAq5uVHbb7XwCPcBGAsYHg/s677/CMD-ping_s.JPG)|
|11|若網路相關設定有誤或手臂 IP 不對，會顯示「目的地主機無法連線」。|[![](https://1.bp.blogspot.com/-4I4G3bfN4aA/YEIEqmxIlnI/AAAAAAAAAGA/Uu54psC0xKI_DpxE7AoIBy6nmnzfmhHTwCPcBGAsYHg/s677/CMD-ping_f.JPG)](https://1.bp.blogspot.com/-4I4G3bfN4aA/YEIEqmxIlnI/AAAAAAAAAGA/Uu54psC0xKI_DpxE7AoIBy6nmnzfmhHTwCPcBGAsYHg/s677/CMD-ping_f.JPG)|

常見問題：
- HRSS 版本與 HRSDK 版本有對應關係，如有更新任一方，應向上銀確定，否則可能會造成手臂無法連線。
- 除非有需求，不然保險起見，應將除了手臂連線用的網路介面卡外的所有網路介面卡都禁用。
- IP 位置 `127.0.0.1` 代表的是該電腦自己本身（localhost），是測試的時候才會用到的，實際使用上不應出現或使用此 IP。
- HRSDK 都應有隨附上銀所提供的 SampleCode 範例程式，可作爲手臂測試用。

> 編輯此章節時的 HRSS 版本 `3.3.11.7492`，HRSDK 版本 `2.2.9_7492`。

### 以教導器控制

> 詳細待補。

## 工作流程 Workflow
工作流程大致上與 GitHub-Flow 一樣，請先去瞭解其運作，並善用 [nfu-irs-lab/test](https://github.com/nfu-irs-lab/test) 進行練習。

在此每個 repo 會有兩個 Branch：`main` 和 `develop`。其中 `develop` Branch 的功能就是 GitHub-Flow 中的 `main` 或 `master` Branch，而我們真正的 `main` Branch 只作為發行用，只由管理員負責管理，一般人不需要也不允許操作組織上的 `main` Branch（除了 Pull 和 Fetch）。

[![圖解實驗室Git工作流程](https://blogger.googleusercontent.com/img/a/AVvXsEi9XXwN2iT9xNVgni3hEfa8hDz8kYFu8Iyg5cbEGGDUGp1HBlMdU4as92GV0WiCexA4TYHBfhXqFHbUBV2Ug52aYeG4_kAFADdLO2dOwgQ81upMpQZDyP5KMb-htXe2fcU-MjL9N1ku_InXLcLCmcqJGg4mFU54MXBRCw-MwO8al1bVziXi3e6c6ZcU=s16000)](https://blogger.googleusercontent.com/img/a/AVvXsEi9XXwN2iT9xNVgni3hEfa8hDz8kYFu8Iyg5cbEGGDUGp1HBlMdU4as92GV0WiCexA4TYHBfhXqFHbUBV2Ug52aYeG4_kAFADdLO2dOwgQ81upMpQZDyP5KMb-htXe2fcU-MjL9N1ku_InXLcLCmcqJGg4mFU54MXBRCw-MwO8al1bVziXi3e6c6ZcU=s16000)
> ▲ 實驗室 Git 工作流程

### 一般成員
#### 首次使用
1. 登入網頁版 GitHub。
2. 進入目標的「組織 Remote repo」，點選「Fork」按鈕，將其 `Fork` 進自己的 GitHub 帳號，它會變成「個人 Remote repo」。
    - 例如將 [nfu-irs-lab/test](https://github.com/nfu-irs-lab/test)  `Fork` 進自己的 GitHub，會產生一個「YOUR_NAME/test」的 repo。
4. 將「個人 Remote repo」`Clone` 到個人電腦上。此時電腦上的就是「個人 Local repo」。
5. 將「組織 Remote repo」添加到「個人 Local repo」作為新的 Remote repo。
6. 確認此時的「個人 Local repo」應該有 2 個 Remote repo，分別為：「個人 Remote repo (origin)」和「組織 Remote repo」。
7. 完成。

#### 一般作業
1. `Checkout` 到「個人 Local repo」上的 `develop` Branch，並且 `Pull`「組織 Remote repo」的 `develop` Branch。
    - 此步驟的目的是確保「個人 Local repo」已經更新到最新的狀態。
2. 在「個人 Local repo」上從 `develop` Branch 中新增一個新 Branch，並命名為 `GOAL`，其中 `GOAL` 是本次目標要做的事情，並確認已經 `Checkout` 到 `GOAL` Branch 上。
    - Branch 的命名可以使用「iss + issue編號」，例如：命名爲「iss3」代表此 Branch 要處理 [Issue #3](https://github.com/nfu-irs-lab/docs/issues/3) 。
    - 圖中以 `feature_1` 與 `feature_2` 爲例。
3. 在 `GOAL` Branch 上進行作業、送 `Commit`。
4. 當本次目標要做的事都已經完成、`Commit` 都送完後，`Checkout` 到「個人 Local repo」上的 `develop` Branch。
5. 將「個人 Local repo」上的 `GOAL` Branch `Merge` 到「個人 Local repo」上的 `develop` Branch。
    - `Checkout` 到 `develop` 後，`Merge` `GOAL` into `develop`。
6. 將「組織 Remote repo」上的 `develop` Branch `Pull` 到「個人 Local repo」上的 `develop` Branch。
7. 若發生衝突，與其它人討論後解決衝突。
    - 如果你在 `GOAL` Branch 上進行作業時，「組織 Remote repo」上有其它人的更新，也就是同一個檔案有多個人修改，就會發生衝突，請討論後決定要保留誰的修改版本。
8. 將「個人 Local repo」上的 `develop` Branch `Push` 到「個人 Remote repo」上的 `develop` Branch。
9. 發起 `Pull Request (PR)`。方向為「*base:* 組織 Remote repo/develop 」←「*compare:* 個人 Remote repo/develop」。
10. 等待發起的 `PR` 被管理員審查。
11. 若 `PR` 被要求修改，請在「個人 Local repo」上的 `GOAL` Branch 繼續修改、送 `Commit`，如同步驟 3 ~ 8。完成步驟 8 後，步驟 9 發起的 `PR` 會自動更新，不用再發起新的 `PR`。
12. 若 `PR` 被接受、已經被 `Merge` 或 `Rebase` 並標記爲「Closed」，將「組織 Remote repo」上的 `develop` Branch `Pull` 到「個人 Local repo」上的 `develop` Branch。
    - 此步驟的目的是確保「個人 Local repo」已經更新到最新的狀態。
13. 為了保持整潔，可以刪除「個人 Local repo」上的 `GOAL` Branch，因為它的工作已經結束了。
14. 完成。

### 管理員

> 未完成。

## 手臂控制程式架構

[![](/img/robotic-arm-control-panel-architecture.svg)](/img/robotic-arm-control-panel-architecture.svg)
> ▲ 手臂控制程式概略架構圖