const drinks = [
  { category: "原葉鮮萃茶", name: "鮮萃大麥紅茶", prices: { L: 40 } },
  { category: "原葉鮮萃茶", name: "海神", prices: { L: 45 } },
  { category: "原葉鮮萃茶", name: "玩火", prices: { L: 40 } },
  { category: "原葉鮮萃茶", name: "碧螺春", prices: { L: 40 } },
  { category: "原葉鮮萃茶", name: "四季春", prices: { L: 40 } },
  { category: "原葉鮮萃茶", name: "玫瑰普洱", prices: { L: 40 } },
  { category: "原葉鮮萃茶", name: "烏龍綠茶", prices: { L: 40 } },
  { category: "原葉鮮萃茶", name: "茉莉烏龍", prices: { L: 40 } },
  { category: "原葉鮮萃茶", name: "斯里蘭卡烏瓦紅茶", prices: { L: 40 } },
  { category: "原葉鮮萃茶", name: "金萱茶", prices: { L: 40 } },
  { category: "原葉鮮萃茶", name: "熟滄觀音", prices: { L: 40 } },
  { category: "原葉鮮萃茶", name: "文山包種", prices: { L: 50 } },
  { category: "原葉鮮萃茶", name: "東方美人", prices: { L: 50 } },
  { category: "原葉鮮萃茶", name: "白桃蜜烏龍", prices: { L: 50 } },
  { category: "原葉鮮萃茶", name: "洛神蜜香紅茶", prices: { L: 50 } },
  { category: "原葉鮮萃茶", name: "桂花四季春", prices: { L: 50 } },
  { category: "鮮萃茶拿鐵", name: "紅茶拿鐵", prices: { M: 60, L: 65 } },
  { category: "鮮萃茶拿鐵", name: "烏龍拿鐵", prices: { L: 65 } },
  { category: "鮮萃茶拿鐵", name: "金萱拿鐵", prices: { L: 65 } },
  { category: "鮮萃茶拿鐵", name: "觀音拿鐵", prices: { L: 65 } },
  { category: "門市限定", name: "特調咖啡", prices: { M: 45, L: 50 } },
  { category: "門市限定", name: "經典美式咖啡", prices: { M: 55, L: 55 } },
  { category: "門市限定", name: "精品招牌咖啡", prices: { M: 60, L: 60 } },
  { category: "門市限定", name: "莊園拿鐵", prices: { M: 70, L: 70 } },
  { category: "門市限定", name: "咖啡冰沙", prices: { L: 60 } },
  { category: "鮮調果茶", name: "錫蘭紅茶", prices: { M: 25, L: 30 } },
  { category: "鮮調果茶", name: "茉莉綠茶", prices: { M: 25, L: 30 } },
  { category: "鮮調果茶", name: "蜂蜜紅/綠茶", prices: { M: 45, L: 50 } },
  { category: "鮮調果茶", name: "玉荷冰綠", prices: { L: 50 } },
  { category: "鮮調果茶", name: "檸檬冰茶", prices: { M: 50, L: 55 } },
  { category: "鮮調果茶", name: "梅果茶", prices: { M: 50, L: 55 } },
  { category: "鮮調果茶", name: "喜樂多綠茶", prices: { M: 50, L: 55 } },
  { category: "鮮調果茶", name: "百香搖果樂", prices: { M: 55, L: 60 } },
  { category: "鮮調果茶", name: "蘋果冰茶", prices: { M: 55, L: 60 } },
  { category: "鮮調果茶", name: "鳳梨冰茶", prices: { L: 65 } },
  { category: "鮮調果茶", name: "芭樂檸檬綠", prices: { L: 65 } },
  { category: "果然系列", name: "超怕霸氣飲", prices: { L: 50 } },
  { category: "果然系列", name: "蜂蜜蘆薈", prices: { M: 45, L: 50 } },
  { category: "果然系列", name: "金桔檸檬", prices: { M: 50, L: 55 } },
  { category: "果然系列", name: "荔枝玉露", prices: { M: 50, L: 55 } },
  { category: "果然系列", name: "纖美小紫蘇", prices: { M: 50, L: 65 } },
  { category: "果然系列", name: "芭樂多多", prices: { M: 65, L: 85 } },
  { category: "夏季限定", name: "檸檬愛玉風味飲", prices: { L: 55 } },
  { category: "夏季限定", name: "百香果冰沙", prices: { L: 55 } },
  { category: "夏季限定", name: "金芒果優酪", prices: { L: 65 } },
  { category: "夏季限定", name: "葡萄柚綠茶", prices: { L: 65 } },
  { category: "夏季限定", name: "七巧歐蕾", prices: { L: 70 } },
  { category: "夏季限定", name: "青檸香柚QQ", prices: { L: 75 } },
  { category: "奶茶/特調", name: "雙Q奶茶1號", prices: { M: 55, L: 60 } },
  { category: "奶茶/特調", name: "雙Q奶茶2號", prices: { M: 55, L: 60 } },
  { category: "奶茶/特調", name: "招牌奶茶", prices: { M: 45, L: 50 } },
  { category: "奶茶/特調", name: "黃金奶綠", prices: { M: 45, L: 50 } },
  { category: "奶茶/特調", name: "珍珠奶茶", prices: { M: 50, L: 55 } },
  { category: "奶茶/特調", name: "鮮萃大麥奶茶", prices: { L: 60 } },
  { category: "奶茶/特調", name: "海神奶茶", prices: { L: 65 } },
  { category: "奶茶/特調", name: "玩火奶茶", prices: { L: 60 } },
  { category: "奶茶/特調", name: "玫瑰普洱奶茶", prices: { L: 60 } },
  { category: "奶茶/特調", name: "粉條奶茶", prices: { M: 55, L: 60 } },
  { category: "奶茶/特調", name: "仙草凍奶茶", prices: { L: 65 } },
  { category: "奶茶/特調", name: "桂花奶綠", prices: { M: 60, L: 65 } },
  { category: "奶茶/特調", name: "港式厚奶", prices: { L: 70 } },
  { category: "奶茶/特調", name: "觀音厚奶", prices: { L: 70 } },
  { category: "奶茶/特調", name: "經典可可", prices: { M: 50, L: 55 } },
  { category: "奶茶/特調", name: "宇治抹茶", prices: { M: 60, L: 60 } },
  { category: "奶茶/特調", name: "抹茶拿鐵", prices: { L: 80 } },
  { category: "冬季限定", name: "桂圓紅棗", prices: { M: 50 } },
  { category: "冬季限定", name: "暖薑茶", prices: { M: 50 } },
  { category: "冬季限定", name: "暖薑奶茶", prices: { L: 60 } },
  { category: "冬季限定", name: "熱檸茶", prices: { M: 50, L: 55 } },
  { category: "冬季限定", name: "熱桔茶", prices: { M: 50, L: 55 } },
  { category: "冬季限定", name: "紫米奶茶", prices: { M: 60, L: 65 } },
  { category: "冬季限定", name: "紫米可可", prices: { M: 65, L: 70 } },
  { category: "冬季限定", name: "黑糖薑汁可可", prices: { M: 65, L: 70 } },
];

const toppings = [
  { name: "珍珠", price: 10 },
  { name: "雙Q1號", price: 10 },
  { name: "雙Q2號", price: 10 },
  { name: "小芋圓", price: 10 },
  { name: "搖果樂", price: 10 },
  { name: "寒天晶球", price: 10 },
  { name: "小紫蘇", price: 10 },
  { name: "椰果", price: 10 },
  { name: "粉條", price: 10 },
  { name: "愛玉風味凍", price: 10 },
  { name: "蘆薈", price: 10 },
  { name: "荔枝凍", price: 10 },
  { name: "仙草凍", price: 15 },
  { name: "布丁", price: 15 },
  { name: "紫米", price: 15 },
];

const friedItems = [
  { category: "單點", name: "脆皮雞排", price: 85 },
  { category: "單點", name: "深海魷魚", price: 65 },
  { category: "單點", name: "無骨鹽酥雞", price: 65 },
  { category: "單點", name: "雞軟骨", price: 65 },
  { category: "單點", name: "雞蛋豆腐", price: 60 },
  { category: "單點", name: "甘梅地瓜(小)", price: 30 },
  { category: "單點", name: "甘梅地瓜(大)", price: 50 },
  { category: "單點", name: "雞皮", price: 50 },
  { category: "單點", name: "玉米筍", price: 45 },
  { category: "單點", name: "月亮蝦餅", price: 40 },
  { category: "單點", name: "起司條(3條)", price: 40 },
  { category: "單點", name: "煉乳銀絲卷", price: 35 },
  { category: "單點", name: "脆薯", price: 40 },
  { category: "單點", name: "柳葉魚", price: 50 },
  { category: "單點", name: "甜不辣", price: 30 },
  { category: "單點", name: "花枝丸", price: 30 },
  { category: "單點", name: "四季豆", price: 35 },
  { category: "單點", name: "脆皮麻糬", price: 35 },
  { category: "單點", name: "玉米布丁酥(4個)", price: 35 },
  { category: "單點", name: "脆皮雞翅(1支)", price: 30 },
  { category: "單點", name: "脆皮雞翅(4支)", price: 100 },
  { category: "單點", name: "雞屁股", price: 30 },
  { category: "單點", name: "蘿蔔糕(二片)", price: 30 },
  { category: "單點", name: "蛋蛋芋丸(4個)", price: 30 },
  { category: "單點", name: "撈心湯圓", price: 30 },
  { category: "單點", name: "芋巧(鹹)", price: 20 },
  { category: "單點", name: "洋蔥圈(4個)", price: 30 },
  { category: "單點", name: "脆皮米腸", price: 25 },
  { category: "單點", name: "養生杏鮑菇", price: 25 },
  { category: "單點", name: "黑輪", price: 20 },
  { category: "單點", name: "百頁豆腐", price: 25 },
  { category: "單點", name: "脆皮糯米椒", price: 25 },
  { category: "單點", name: "脆皮梅瓜", price: 25 },
  { category: "單點", name: "熱狗", price: 20 },
  { category: "單點", name: "小熱狗", price: 35 },
  { category: "單點", name: "美式薯餅", price: 20 },
  { category: "單點", name: "五香豆干", price: 15 },
  { category: "單點", name: "米血糕", price: 15 },
  { category: "單點", name: "芋粿", price: 15 },
  { category: "飲料", name: "可樂350cc", price: 25 },
  { category: "飲料", name: "可樂600cc", price: 35 },
  { category: "優惠套餐", name: "鹽酥雞+脆薯+可樂350cc", price: 120 },
  { category: "優惠套餐", name: "雞排+甘梅地瓜", price: 110 },
  { category: "優惠套餐", name: "雞排+熱狗", price: 100 },
  { category: "優惠套餐", name: "深海魷魚+豆干", price: 75 },
  { category: "優惠套餐", name: "無骨鹽酥雞+豆干", price: 75 },
  { category: "優惠套餐", name: "雞排+黑輪", price: 100 },
  { category: "優惠套餐", name: "雞排+深海魷魚", price: 100 },
  { category: "優惠套餐", name: "雞排+杏鮑菇+可樂600cc", price: 135 },
];

const els = {
  form: document.querySelector("#orderForm"),
  customerName: document.querySelector("#customerName"),
  drinkSearch: document.querySelector("#drinkSearch"),
  drinkItems: document.querySelector("#drinkItems"),
  addDrink: document.querySelector("#addDrink"),
  friedSearch: document.querySelector("#friedSearch"),
  friedItems: document.querySelector("#friedItems"),
  addFried: document.querySelector("#addFried"),
  summary: document.querySelector("#summary"),
  totalPrice: document.querySelector("#totalPrice"),
  statusMessage: document.querySelector("#statusMessage"),
  recordsBody: document.querySelector("#recordsBody"),
  sheetEndpoint: document.querySelector("#sheetEndpoint"),
  saveEndpoint: document.querySelector("#saveEndpoint"),
  clearRecords: document.querySelector("#clearRecords"),
};

const STORAGE_KEYS = {
  records: "farewell-orders-records",
  endpoint: "farewell-orders-sheet-endpoint",
};

const DEFAULT_SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfycbyuPFMhZm9cV4ME32ps1GfpRUa32U9aaTn5Jqwbl-e8iWYibvDBdKRsr02-0z5oLLCq-Q/exec";
const SUGAR_OPTIONS = ["無糖", "微糖", "少糖", "全糖(勇者台南人)"];
const ICE_OPTIONS = ["標準冰", "少冰", "微冰", "去冰", "熱飲"];

function priceLabel(prices) {
  return Object.entries(prices)
    .map(([size, price]) => `${size === "M" ? "中" : "大"} $${price}`)
    .join(" / ");
}

function groupOptions(select, items, formatter, selectedValue = "") {
  const groups = new Map();
  items.forEach((item) => {
    if (!groups.has(item.category)) groups.set(item.category, []);
    groups.get(item.category).push(item);
  });

  select.innerHTML = "";
  if (!items.length) {
    const option = document.createElement("option");
    option.textContent = "找不到符合的品項";
    option.disabled = true;
    option.selected = true;
    select.append(option);
    return;
  }

  groups.forEach((groupItems, category) => {
    const group = document.createElement("optgroup");
    group.label = category;
    groupItems.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.originalIndex;
      option.textContent = formatter(item);
      option.selected = String(item.originalIndex) === String(selectedValue);
      group.append(option);
    });
    select.append(group);
  });
}

function optionItems(items, keyword, selectedValue) {
  const normalizedKeyword = keyword.trim().toLowerCase();
  const mapped = items.map((item, index) => ({ ...item, originalIndex: index }));
  const filtered = mapped.filter((item) => `${item.category} ${item.name}`.toLowerCase().includes(normalizedKeyword));
  if (selectedValue !== "" && !filtered.some((item) => String(item.originalIndex) === String(selectedValue))) {
    const selected = mapped[Number(selectedValue)];
    if (selected) filtered.unshift(selected);
  }
  return filtered;
}

function renderDrinkOptions() {
  document.querySelectorAll(".drink-row").forEach((row) => {
    const select = row.querySelector(".drink-select");
    const selectedValue = select.value;
    groupOptions(select, optionItems(drinks, els.drinkSearch.value, selectedValue), (item) => `${item.name} - ${priceLabel(item.prices)}`, selectedValue);
    updateDrinkSizeOptions(row);
  });
  updateSummary();
}

function renderFriedOptions() {
  document.querySelectorAll(".fried-row").forEach((row) => {
    const select = row.querySelector(".fried-select");
    const selectedValue = select.value;
    groupOptions(select, optionItems(friedItems, els.friedSearch.value, selectedValue), (item) => `${item.name} - $${item.price}`, selectedValue);
  });
  updateSummary();
}

function toppingHTML() {
  return toppings
    .map((item, index) => `
      <label class="chip">
        <input type="checkbox" class="topping-select" value="${index}">
        <span>${item.name} +$${item.price}</span>
      </label>
    `)
    .join("");
}

function selectHTML(options, className) {
  return `
    <select class="${className}" required>
      ${options.map((option) => `<option value="${option}">${option}</option>`).join("")}
    </select>
  `;
}

function updateDrinkSizeOptions(row) {
  const drink = drinks[Number(row.querySelector(".drink-select").value)] || drinks[0];
  const sizeSelect = row.querySelector(".drink-size");
  const current = sizeSelect.value;
  const options = Object.keys(drink.prices);
  sizeSelect.innerHTML = options
    .map((size) => `<option value="${size}">${size === "M" ? "中杯" : "大杯"} - $${drink.prices[size]}</option>`)
    .join("");
  sizeSelect.value = options.includes(current) ? current : options[0];
}

function renumberRows(container, label) {
  container.querySelectorAll(".item-row").forEach((row, index) => {
    row.querySelector(".item-row-title").textContent = `${label} ${index + 1}`;
    const removeButton = row.querySelector(".remove-item");
    removeButton.disabled = container.querySelectorAll(".item-row").length === 1;
  });
}

function addDrinkRow() {
  const row = document.createElement("div");
  row.className = "item-row drink-row";
  row.innerHTML = `
    <div class="item-row-head">
      <span class="item-row-title">飲料</span>
      <button class="remove-item" type="button" aria-label="刪除此飲料">-</button>
    </div>
    <div class="item-controls">
      <div class="wide">
        <label>飲料品項</label>
        <select class="drink-select" required></select>
      </div>
      <div>
        <label>杯型</label>
        <select class="drink-size" required></select>
      </div>
      <div>
        <label>糖度</label>
        ${selectHTML(SUGAR_OPTIONS, "sugar-select")}
      </div>
      <div>
        <label>冰量</label>
        ${selectHTML(ICE_OPTIONS, "ice-select")}
      </div>
      <div class="wide">
        <label>加料</label>
        <div class="chips">${toppingHTML()}</div>
      </div>
    </div>
  `;
  els.drinkItems.append(row);
  renderDrinkOptions();
  renumberRows(els.drinkItems, "飲料");
  updateSummary();
}

function addFriedRow() {
  const row = document.createElement("div");
  row.className = "item-row fried-row";
  row.innerHTML = `
    <div class="item-row-head">
      <span class="item-row-title">炸物</span>
      <button class="remove-item" type="button" aria-label="刪除此炸物">-</button>
    </div>
    <div class="item-controls">
      <div class="wide">
        <label>炸物品項</label>
        <select class="fried-select" required></select>
      </div>
    </div>
  `;
  els.friedItems.append(row);
  renderFriedOptions();
  renumberRows(els.friedItems, "炸物");
  updateSummary();
}

function selectedDrinkItems() {
  return [...document.querySelectorAll(".drink-row")].map((row, index) => {
    const drink = drinks[Number(row.querySelector(".drink-select").value)] || drinks[0];
    const size = row.querySelector(".drink-size").value;
    const toppingList = [...row.querySelectorAll(".topping-select:checked")].map((input) => toppings[Number(input.value)]);
    const toppingTotal = toppingList.reduce((sum, item) => sum + item.price, 0);
    const drinkPrice = drink.prices[size] || 0;

    return {
      line: index + 1,
      category: drink.category,
      name: drink.name,
      size: size === "M" ? "中杯" : "大杯",
      sugar: row.querySelector(".sugar-select").value,
      ice: row.querySelector(".ice-select").value,
      toppings: toppingList.map((item) => item.name).join("、") || "無",
      drinkPrice,
      toppingTotal,
      total: drinkPrice + toppingTotal,
    };
  });
}

function selectedFriedItems() {
  return [...document.querySelectorAll(".fried-row")].map((row, index) => {
    const item = friedItems[Number(row.querySelector(".fried-select").value)] || friedItems[0];
    return {
      line: index + 1,
      category: item.category,
      name: item.name,
      price: item.price,
    };
  });
}

function drinkSummary(item) {
  return `${item.name} / ${item.size} / ${item.sugar} / ${item.ice} / 加料：${item.toppings} ($${item.total})`;
}

function friedSummary(item) {
  return `${item.name} ($${item.price})`;
}

function buildOrder() {
  const drinkItems = selectedDrinkItems();
  const friedSelections = selectedFriedItems();
  const drinkPrice = drinkItems.reduce((sum, item) => sum + item.drinkPrice, 0);
  const toppingTotal = drinkItems.reduce((sum, item) => sum + item.toppingTotal, 0);
  const friedPrice = friedSelections.reduce((sum, item) => sum + item.price, 0);
  const total = drinkPrice + toppingTotal + friedPrice;

  return {
    orderedAt: new Date().toLocaleString("zh-TW", { hour12: false }),
    customerName: els.customerName.value.trim(),
    drinkItems,
    friedItems: friedSelections,
    drinkCategory: drinkItems.map((item) => item.category).join("、"),
    drinkName: drinkItems.map(drinkSummary).join("\n"),
    drinkSize: drinkItems.map((item) => item.size).join("、"),
    sugar: drinkItems.map((item) => item.sugar).join("、"),
    ice: drinkItems.map((item) => item.ice).join("、"),
    toppings: drinkItems.map((item) => item.toppings).join(" / "),
    friedCategory: friedSelections.map((item) => item.category).join("、"),
    friedName: friedSelections.map(friedSummary).join("\n"),
    drinkPrice,
    toppingTotal,
    friedPrice,
    total,
  };
}

function updateSummary() {
  const order = buildOrder();
  const name = order.customerName || "尚未填寫";
  els.summary.innerHTML = `
    <div><dt>點餐人</dt><dd>${name}</dd></div>
    <div><dt>飲料</dt><dd>${order.drinkName.replaceAll("\n", "<br>") || "尚未選擇"}</dd></div>
    <div><dt>炸物</dt><dd>${order.friedName.replaceAll("\n", "<br>") || "尚未選擇"}</dd></div>
  `;
  els.totalPrice.textContent = `$${order.total}`;
}

function getRecords() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.records) || "[]");
  } catch {
    return [];
  }
}

function saveRecords(records) {
  localStorage.setItem(STORAGE_KEYS.records, JSON.stringify(records));
}

function renderRecords() {
  const records = getRecords();
  els.recordsBody.innerHTML = records.length
    ? records.map((order) => `
      <tr>
        <td>${order.orderedAt}</td>
        <td>${order.customerName}</td>
        <td>${String(order.drinkName).replaceAll("\n", "<br>")}</td>
        <td>${String(order.friedName).replaceAll("\n", "<br>")}</td>
        <td>$${order.total}</td>
      </tr>
    `).join("")
    : `<tr><td colspan="5">還沒有點餐紀錄。</td></tr>`;
}

async function syncToSheet(order) {
  const endpoint = els.sheetEndpoint.value.trim();
  if (!endpoint) return "本機已儲存。貼上 Apps Script URL 後即可同步 Google Sheet。";

  await fetch(endpoint, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(order),
  });
  return "已送出並嘗試同步 Google Sheet。";
}

function setStatus(message, isError = false) {
  els.statusMessage.textContent = message;
  els.statusMessage.classList.toggle("error", isError);
}

els.form.addEventListener("input", updateSummary);
els.drinkSearch.addEventListener("input", renderDrinkOptions);
els.friedSearch.addEventListener("input", renderFriedOptions);
els.addDrink.addEventListener("click", addDrinkRow);
els.addFried.addEventListener("click", addFriedRow);
els.drinkItems.addEventListener("change", (event) => {
  const row = event.target.closest(".drink-row");
  if (event.target.classList.contains("drink-select") && row) updateDrinkSizeOptions(row);
  updateSummary();
});
els.drinkItems.addEventListener("click", (event) => {
  if (!event.target.classList.contains("remove-item")) return;
  event.target.closest(".drink-row").remove();
  if (!els.drinkItems.querySelector(".drink-row")) addDrinkRow();
  renumberRows(els.drinkItems, "飲料");
  updateSummary();
});
els.friedItems.addEventListener("change", updateSummary);
els.friedItems.addEventListener("click", (event) => {
  if (!event.target.classList.contains("remove-item")) return;
  event.target.closest(".fried-row").remove();
  if (!els.friedItems.querySelector(".fried-row")) addFriedRow();
  renumberRows(els.friedItems, "炸物");
  updateSummary();
});

els.saveEndpoint.addEventListener("click", () => {
  localStorage.setItem(STORAGE_KEYS.endpoint, els.sheetEndpoint.value.trim());
  setStatus("Google Sheet 同步網址已儲存。");
});

els.clearRecords.addEventListener("click", () => {
  if (!confirm("確定清除這台電腦上的點餐紀錄嗎？")) return;
  saveRecords([]);
  renderRecords();
});

els.form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const order = buildOrder();
  if (!order.customerName) {
    setStatus("請先填姓名或綽號。", true);
    els.customerName.focus();
    return;
  }

  const records = getRecords();
  records.unshift(order);
  saveRecords(records);
  renderRecords();

  try {
    const message = await syncToSheet(order);
    setStatus(message);
    els.form.reset();
    els.sheetEndpoint.value = localStorage.getItem(STORAGE_KEYS.endpoint) || DEFAULT_SHEET_ENDPOINT;
    els.drinkItems.innerHTML = "";
    els.friedItems.innerHTML = "";
    addDrinkRow();
    addFriedRow();
  } catch (error) {
    setStatus(`本機已儲存，但同步失敗：${error.message}`, true);
  }
});

document.querySelectorAll(".menu-gallery img").forEach((image) => {
  image.addEventListener("error", () => {
    const fallback = document.createElement("div");
    fallback.className = "image-fallback";
    fallback.textContent = "菜單圖片載入失敗，請確認 GitHub repo 有包含 assets 資料夾，且 Render 的 Publish Directory 設為專案根目錄。";
    image.replaceWith(fallback);
  });
});

els.sheetEndpoint.value = localStorage.getItem(STORAGE_KEYS.endpoint) || DEFAULT_SHEET_ENDPOINT;
addDrinkRow();
addFriedRow();
renderRecords();
updateSummary();
