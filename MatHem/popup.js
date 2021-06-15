// Initialize butotn with users's prefered color
let changeColor = document.getElementById("getEstimate");

changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    var element = document.getElementsByTagName('h1');
    fetch('https://carbon-trace.sathvik.ml/predict', { method: 'POST',headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query:element[0].innerText
    })
  }).then(data => data.json())
    .then(data => {
      document.getElementsByClassName('quantity')[0].innerHTML = document.getElementsByClassName('quantity')[0].innerHTML + " - " + "[ CO2 eq em. " + data.result + "/kg]"
    });
  });
}
