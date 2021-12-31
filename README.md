Reproduction of the issue with SystemJS dynamic import.

SystemJS.import is used to load two almost-identical modules that export a function. Only the first one was loaded. 

index.html:
```html
  <head>
    ...
    <script src="https://cdn.jsdelivr.net/npm/systemjs/dist/system.js"></script>
    <script>
      System.import("/module1.js").then(m => (document.getElementById("mod1").innerText = m.default()));
      System.import("/module2.js").then(m => (document.getElementById("mod2").innerText = m.default()));
    </script>
  </head>
  <body>
    <div id="mod1"></div>
    <div id="mod2"></div>
  </body>
```

Expected output:

MODULE 1<br/>
MODULE 2

Actual:

MODULE1

The second module did not get loaded, although no error was thrown by SystemJS.   
