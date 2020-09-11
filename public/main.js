let n = 0;

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");

  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        alert("请求失败");
      }
    }
  };

  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");

  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const script = document.createElement("script");
        script.innerHTML = request.response;
        document.body.appendChild(script);
      } else {
        alert("请求失败");
      }
    }
  };

  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");

  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
      } else {
        alert("请求失败");
      }
    }
  };

  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");

  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const div = document.createElement("div");
        const dom = request.responseXML;
        div.innerText = dom.getElementsByTagName("warning")[0].textContent;
        document.body.appendChild(div);
      } else {
        alert("请求失败");
      }
    }
  };

  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");

  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const div = document.createElement("div");
        user.textContent = JSON.parse(request.response)["name"];
      } else {
        alert("请求失败");
      }
    }
  };

  request.send();
};

getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);

  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        pageTitle.textContent = JSON.parse(request.response)["title"];
        pageContent.textContent = JSON.parse(request.response)["content"];
        n = (n + 1) % 3;
      } else {
        alert("请求失败");
      }
    }
  };

  request.send();
};
