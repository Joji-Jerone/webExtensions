const main = () => {
  let btn = document.getElementById("change-color-button");

  btn.addEventListener("click", () => {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      console.log("tabs", tabs);
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { msg: "remove" });
    });
  });
};

main();
