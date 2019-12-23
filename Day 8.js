// Create a Button

// button.css
```
#btn {
    width: 96px;
    height: 48px;
    font-size: 24px;
}
```

// button.js
let count = 0;

incr = () => {
    count ++;
    document.getElementById('btn').innerHTML = count;
}

// index.html
```
<!-- Enter your HTML code here -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Button</title>
        <link rel="stylesheet" href="css/button.css" type="text/css">
    </head>
    <body>
        <script src="js/button.js" type="text/javascript"></script>
        
        <button id="btn" onclick="incr()">0</button>
    </body>
</html>
```

// ------------------------------------------------------------------------------------------------

// Buttons Container

// buttonsGrid.css
```
#btns {
    width: 75%;
}

.btn {
    display: inline-block;
    width: 30%;
    height: 48px;
    font-size: 24px;
}
```

// buttonsGrid.js
var countArr = [1, 2, 3, 6, 9, 8, 7, 4];

rotate = () => {
  countArr.unshift(countArr.pop());
  
  document.getElementById('btn1').innerHTML = countArr[0];
  document.getElementById('btn2').innerHTML = countArr[1];
  document.getElementById('btn3').innerHTML = countArr[2];
  document.getElementById('btn6').innerHTML = countArr[3];
  document.getElementById('btn9').innerHTML = countArr[4];
  document.getElementById('btn8').innerHTML = countArr[5];
  document.getElementById('btn7').innerHTML = countArr[6];
  document.getElementById('btn4').innerHTML = countArr[7];
}

// index.html
```
<!-- Enter your HTML code here -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Buttons Grid</title>
        <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">
    </head>
    <body>
        <script src="js/buttonsGrid.js" type="text/javascript"></script>
      <div id="btns">
        <button class="btn" id="btn1">1</button>
        <button class="btn" id="btn2">2</button>
        <button class="btn" id="btn3">3</button>
        <button class="btn" id="btn4">4</button>
        <button class="btn" id="btn5" onclick="rotate()">5</button>
        <button class="btn" id="btn6">6</button>
        <button class="btn" id="btn7">7</button>
        <button class="btn" id="btn8">8</button>
        <button class="btn" id="btn9">9</button>
      </div>
    </body>
</html>
```
