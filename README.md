# 待退的小夥伴們想請大家的餐點

這是一個靜態網頁版點餐系統，直接開 `index.html` 就能使用。

## Google Sheet 同步設定

1. 到 [Google Apps Script](https://script.google.com/) 建立新專案。
2. 將 `google-apps-script/Code.gs` 的內容貼到 Apps Script 編輯器。
3. 按「部署」→「新增部署作業」。
4. 類型選「網頁應用程式」。
5. 執行身分選「我」，存取權限選「任何人」或公司網域內可用的對象。
6. 授權後複製部署得到的 `/exec` 網址。
7. 回到網頁，貼到「Google Apps Script Web App URL」並按儲存。

第一次收到訂單時，Apps Script 會用你的 Google 帳戶建立一份名為「待退小夥伴點餐紀錄」的 Google Sheet，之後每筆訂單都會追加到同一份表。

## Render 部署提醒

這個專案是靜態網站，Render 建議設定：

- Type：Static Site
- Build Command：留空，或填 `echo static`
- Publish Directory：`.`

請確認 `assets/drink-menu.jpg` 和 `assets/fried-menu.jpg` 有一起 commit 並推到 GitHub。若 Render 發布後菜單圖片不見，通常是 `assets` 資料夾沒有進 repo，或 Publish Directory 沒有設為專案根目錄。

## 檔案

- `index.html`：點餐頁面
- `styles.css`：版面樣式
- `script.js`：菜單資料、互動、同步邏輯
- `assets/drink-menu.jpg`：飲料原始菜單
- `assets/fried-menu.jpg`：炸物原始菜單
- `google-apps-script/Code.gs`：Google Sheet 寫入端
