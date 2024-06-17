chrome.action.onClicked.addListener(function() {
  chrome.tabs.create({
      url: "index.html"
  });
});

chrome.runtime.onMessage.addListener(function(request, _sender, _sendResponse) {
  console.log(request);
  if (request.type === "showPopup") {
    chrome.action.setPopup({ popup: "popup.html" });
  }
});

// 全局查找包含价格的元素，先不做了
// chrome.runtime.onInstalled.addListener(() => {
//   chrome.contextMenus.create({
//       id: "currencyHelper",
//       title: "显示转换的价格",
//       contexts: ["all"]
//   });
// });

// chrome.contextMenus.onClicked.addListener((info, tab) => {
//   if (info.menuItemId === 'currencyHelper') {
//       chrome.scripting.executeScript({
//           target: {
//               tabId: tab.id
//           },
//           func: () => {
//               console.log('ok');
//           },
//       })
//   }
// });

// 
// function insertCustomFont() {

//   // 查找页面上所有的span元素
//   const spans = document.querySelectorAll('span');

//   // 使用filter方法和正则表达式筛选出包含"원"的元素
//   const targetSpans = Array.from(spans).filter(span => /\$/.test(span.textContent));
//   debugger;

//   // 遍历每个匹配的span元素
//   targetSpans.forEach(span => {
//       // 获取当前span元素的父节点
//       const parentNode = span.parentNode;

//       // 检查父节点中是否包含数字
//       if (!/\d/.test(parentNode.textContent)) {
//           // 如果不包含数字，则不做任何操作
//           return;
//       }

//       // 提取父节点中的数字，包括逗号
//       const numberTextWithComma = parentNode.textContent.match(/[\d,]+/g)[0];
//       // 去除逗号，提取纯数字部分
//       const numberText = numberTextWithComma.replaceAll(',', '');

//       // 创建外层font元素
//       const outerFont = document.createElement('font');
//       // 设置外层font元素的类名
//       outerFont.className = 'cur-help-wrapper';

//       // 创建内层font元素
//       const innerFont = document.createElement('font');
//       // 设置内层font元素的类名
//       innerFont.className = 'cur-help-inside-content';
//       // 将数字设置为内层font元素的内容
//       innerFont.textContent = " " + numberText * 7.2343 + "元";

//       // 将内层font元素插入到外层font元素中
//       outerFont.appendChild(innerFont);

//       // 将外层font元素插入到父节点的相应位置
//       parentNode.insertAdjacentElement('afterend', outerFont);

//       span.style.border = "1px solid black";
//   });
// }