window.addEventListener(
  "DOMContentLoaded",
  (event) => {
    const background = chrome.extension.getBackgroundPage()

    Object.keys(background.magnets).forEach(function (url) {
      const div = document.createElement("div");
      div.innerHTML = `<a href="${url}">${background.magnets[url]}</a>\n`;
      document.body.appendChild(div);
    });
  },
  false
);
