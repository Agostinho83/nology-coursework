# Hello :wave:,

Chrome has slightly chnaged the output you get when you are logging a HTML element to the console. 
You will not get the same output if you log the element the same way as the video.

:x:
```js
const itemIWantToLog = document.querySelector("#item");
console.log(itemIWantToLog);
```

To get the same response to the console in the next video you have two opions which are listed below.

## 1 A Different Console Method
You can use console.dir(). This displays an interactive list of the properties of the specified JavaScript object.
To use it place the item you want to log in the parenthesis.

:heavy_check_mark:
```js
const itemIWantToLog = document.querySelector("#item");
console.dir(itemIWantToLog);
```

## 2 Wrapping the Element Inside { }
Inside the console.log() you can place the item inside {}. This will do the same thing as console.dir().

:heavy_check_mark:
```js
const itemIWantToLog = document.querySelector("#item");
console.log({itemIWantToLog});
```

### Problems?
Any problems feel free to give a coach a message.