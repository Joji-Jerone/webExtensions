document.getElementById("login").addEventListener("click", () => {
  chrome.tabs.create({ url: "https://github.com/login" });
});
