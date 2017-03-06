# UnlockJS

UnlockJS is a JavaScript library to activate cheat codes and keyboard shortcuts\* in your project.

\*Keyboard shortcuts are coming soon.

## Installation

This library is available through npm and bower.

```
npm i unlockjs -S
```

```
bower i unlockjs -S
```

### Manual Installation

This repo can be cloned using `git clone https://github.com/quangdaon/unlockjs.git`. If you'd just like to install the file itself, simply download the `unlock.min.js` file from the `dist` folder. UnlockJS is currently not available through a CDN.

## Usage

### Getting Started

By default, UnlockJS creates a global function in the browser, but it also supports CommonJS and AMD.

### Cheat Codes

To get started, initialize a new Unlock object using:

```javascript
var unlocker = new Unlock;
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'];

unlocker.addCheat('konami', konamiCode, function () {
	alert('Cheater!');
});
```

The `.addCheat` method accepts three parameters: a name, code array, and callback function. The name is just an identifier and has no use other than to find the cheat later on, but it should be descriptive enough for other developers to identify. Currently, UnlockJS uses the standard American keyboard for mapping. Therefore, it recognizes keys such as 'ctrl' and 'alt', but not something like 'cmd' or 'option'. There are two ways of passing in the parameters. The first, as seen above, as by passing them in as normal. This accepts them in any order. Alternatively, they can be passed as an object:

```javascript
unlocker.addCheat({
	name: 'konami',
	code: ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'],
	callback: function() {
		alert('Cheater!');
	}
})
```
When passing the parameters as an object, the code property also accepts a string of individual characters. For example, the cheatcode above can be rewritten as `code: 'UUDDLRLRba>'`. Below is a list of key codes, as used in an array and the single character counterpart. Special key symbols are loosely based off of [AutoHotKey](https://autohotkey.com/docs/Hotkeys.htm#Symbols).

| Key             | Array Item (case insensitive) | Character (match case) |
|:----------------|:------------------------------|:-----------------------|
| A-Z             | a-z                           | a-z                    |
| 0-9             | 0-9                           | 0-9                    |
| NumPad 0-9      | pad0-pad9                     | Unsupported            |
| Up Arrow Key    | up                            | U                      |
| Down Arrow Key  | down                          | D                      |
| Left Arrow Key  | left                          | L                      |
| Right Arrow Key | right                         | R                      |
| Tab             | tab                           | \_                     |
| Esc             | esc                           | X                      |
| Ctrl            | ctrl                          | ^                      |
| Shift           | shift                         | +                      |
| Alt             | alt                           | !                      |
| Backspace       | backspace                     | <                      |
| Enter           | enter                         | >                      |
| Windows         | win                           | #                      |
| Caps Lock       | capsLock                      | Unsupported            |

#### Options

UnlockJS currently accepts one global `delay` setting that determines how long the timeout is, in milliseconds, before the keys list is reset. This can be set by passing in an object upon initializing or by using the `.settings()` method. It defaults to 500.

```javascript
var unlock = new Unlock({
	delay: 1000
});

unlocker.settings({
	delay: 800
});
```

#### Enabling/Disabling Cheats

Cheats can be enabled or disabled on command:

```javascript
unlock.disable() // Disables all cheats.
unlock.disable('konami') // Specifically disables cheat created above.
```

`unlocker.enable` and `unlocker.toggle` can be used in the same way.

## ToDo

- Add keyboard shortcuts.
- Add intuitive way to update cheat callback and code.

## Contribution

This project uses Gulp to build the distribution files and tests. Please make sure to have npm and Gulp installed. You can use `gulp concurrent` or `npm run dev` to start both the test and demo servers, or `gulp test` and `gulp demo` to serve each one separately. Make sure to compile the distribution files using `npm run build` before committing.

## License

MIT License

Copyright (c) 2017 Quangdao Nguyen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
