// chrome.runtime.onMessage.addListener((message) => {
//   if (message.type === "change-color") {
//     document.body.style.backgroundColor = "red";
//   }
// });

console.log("hello from content script");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.msg === "remove") {
    document.querySelector(".lnXdpd").remove();
  }
});

const main = () => {};

main();
