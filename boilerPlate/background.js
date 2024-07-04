console.log("hello from background");

chrome.runtime.onInstalled.addListener((details) => {
  const { reason } = details;
  if (reason === "install") {
    console.log("install");
    let userId = "123";
    chrome.storage.local.set({ userId });
  } else if (reason === "update") {
    console.log("update");
  }
});
