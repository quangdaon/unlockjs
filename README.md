# UnlockJS

UnlockJS is a JavaScript library to activate cheat codes and keyboard shortcuts in your project.

_Note: This project is in an early stage of development. Usage and functionality may be changed without warning._

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

The `.addCheat` method accepts three parameters: a name, code array, and callback function. The name is just an identifier and has no use other than to find the cheat later on, but it should be descriptive enough for other developers to identify. Currently, UnlockJS uses the standard American keyboard for mapping. Therefore, it recognizes keys such as 'ctrl' and 'alt', but not something like 'cmd' or 'option'. There are two ways of passing in the parameters. The first, as seen above, is by passing them in as normal. This accepts them in any order. Alternatively, they can be passed as an object:

```javascript
unlocker.addCheat({
	name: 'konami',
	code: ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'],
	callback: function() {
		alert('Cheater!');
	}
});
```
When passing the parameters as an object, the code property also accepts a string of individual characters. For example, the cheat code above can be rewritten as `code: 'UUDDLRLRba>'`. Below is a list of key codes, as used in an array and the single character counterpart. Special key symbols are loosely based off of [AutoHotKey](https://autohotkey.com/docs/Hotkeys.htm#Symbols).

###### Character Chart

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
var unlocker = new Unlock({
	delay: 1000
});

unlocker.settings({
	delay: 800
});
```

#### Enabling/Disabling Cheats

Cheats can be enabled or disabled on command:

```javascript
unlocker.disable() // Disables all cheats.
unlocker.disable('konami') // Specifically disables cheat created above.
```

`unlocker.enable` and `unlocker.toggle` can be used in the same way.

#### Modifying Cheats

Newly created cheats return themselves, and can be passed by reference to a variable. Alternatively, you can use `unlocker.find(name)` to obtain the cheat using the name used to create it.

```javascript
var konami = unlocker.addCheat({
	name: 'konami',
	code: ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'],
	callback: function() {
		alert('Cheater!');
	}
});

// is the same as:

var konami = unlocker.find('konami');
```

The cheat object contains the same enabling methods as the Unlock object, but is specific to itself (meaning you can use `konami.disabled()` to disabled that specific cheat). Furthermore, you can set the trigger and callback using by assigning new values to them:

```javascript
konami.callback = function() {
	gainLives(30);
};

konami.code = 'UUDDLRLRba';

```

Please Note: The name property is read-only and will fail silently.

### Hotkeys\*

Hotkeys are added in pretty much the same way as cheatcodes:

```
unlocker.addHotkey('^z', '.selector', function() {
	alert('Undo!');
});

unlocker.addHotkey({
	trigger: '^z',
	selector: '.selector',
	callback: function() {
		alert('Undo!');
	}
})
```

The `.addHotkey` function accepts three parameters, `trigger`, `selector`, and `callback`. Like cheat codes, they can be passed as an object. Unlike cheat codes, the must be passed (individually) in that order; however, the selector can be skipped completely. Providing a selector, which accepts either a string selector or an actual DOM element, binds the hotkey to that element so it does not trigger outside of it.

#### The Trigger Parameter

The trigger is what activates the callback and must be in the following format:

```
'^+a'
```

- One or more modifier key character (^, +, !, or #).
- Exactly one trigger key (Any non-modifier key character).

The supported characters match the [character chart above](#character-chart).

#### Modifying Hotkeys

Like cheat codes, hotkey parameters can be modified by assigning them a new value.

\* Please note that hotkeys are still in a young stage and has not been thoroughly tested. Use at your own risk.

## ToDo

- [X] Add keyboard shortcuts.
- [X] Make Cheat prototype readonly.
- [X] Add intuitive way to update cheat callback and code.
- [ ] Support for multiple trigger in hotkey.
- [ ] Fix issue allowing Ctrl+Shift+A to match Ctrl+A and etc.
- [ ] Make proper example/demo.
- [ ] Host official docs.

## Contribution

This project uses Gulp to build the distribution files and tests. Please make sure to have npm and Gulp installed. You can use `gulp concurrent` or `npm run dev` to start both the test and demo servers, or `gulp test` and `gulp demo` to serve each one separately. Make sure to compile the distribution files using `npm run build` before committing.

## License

[MIT License](https://github.com/quangdaon/unlockjs/blob/master/LICENSE)