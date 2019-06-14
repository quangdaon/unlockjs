# UnlockJS

Documentation: [https://docs.quangdao.com/unlockjs/](https://docs.quangdao.com/unlockjs/)

[![Build Status](https://travis-ci.org/quangdaon/unlockjs.svg?branch=version-2)](https://travis-ci.org/quangdaon/unlockjs)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/698acb80de9a47529903498ec0f3f050)](https://www.codacy.com/app/quangdaon/unlockjs?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=quangdaon/unlockjs&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/698acb80de9a47529903498ec0f3f050)](https://www.codacy.com/app/quangdaon/unlockjs?utm_source=github.com&utm_medium=referral&utm_content=quangdaon/unlockjs&utm_campaign=Badge_Coverage)

[![NPM Install](https://nodei.co/npm/unlockjs.png?mini=true)](https://www.npmjs.com/package/unlockjs)

UnlockJS is a JavaScript library to activate cheat codes and keyboard shortcuts in your project.

## Installation

This library is available through npm.

```
npm i unlockjs -S
```

### jsDelivr

Alternatively, you can use [jsDelivr](https://www.jsdelivr.com/package/npm/unlockjs):

```html
<script src="https://cdn.jsdelivr.net/npm/unlockjs/dist/unlock.min.js"></script>
```

<sub><b>Note:</b> I'm just picky about the `.js` at the end. You can also use `<script src="https://cdn.jsdelivr.net/npm/unlockjs"></script>`</sub>

<!--
### Pika

UnlockJS is now available through [Pika](https://www.pika.dev/packages/unlockjs), a new modern JS CDN! [Learn more about Pika here.](https://www.pika.dev/about/)

```javascript
import Unlock from 'https://cdn.pika.dev/unlockjs/'
```-->

## Usage

### Getting Started

By default, UnlockJS creates a global function in the browser, but is exported as a UMD module so you can probably import using your setup ;)

To get started, initialize a new Unlock object using:

```javascript
var unlocker = new Unlock({ /*** options ***/ });
```

#### Options

When creating a new Unlock object, you can pass in the following parameters:

**timeout (number)**

This sets the amount of time in ms before a cheat code times out. This is 500 by default.

**resetOnMatch (bool)**

If true, when you successfully match a cheatcode, the timer is reset. For example, this allows chaining cheats one after another. False by default.

### Cheat Codes

```javascript
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'];

unlocker.addCheat({
	name: 'konami',
	code: konamiCode,
	callback: function() {
		alert('Cheater!');
	}
});
```

The `.addCheat` method accepts three parameters: a name, code array, and callback function. The name is just an identifier and has no use other than to find the cheat later on, but it should be descriptive enough for other developers to identify. Currently, UnlockJS has only been testing and verified as working on a traditional US keyboard layout.

There are two ways of passing in the parameters. The preferred method, as seen above, is by passing them in as an object. Alternatively, you can pass in parameters in the order of name, code, and callback:

```javascript
unlocker.addCheat('konami', konamiCode, function () {
	alert('Cheater!');
});
```

When passing the parameters as an object, the code property also accepts a string of individual characters. For example, the cheat code above can be rewritten as `code: 'UUDDLRLRba>'`. Below is a list of key codes, as used in an array and the single character counterpart. Special key symbols are loosely based off of [AutoHotkey](https://autohotkey.com/docs/Hotkeys.htm#Symbols).

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

#### Enabling/Disabling Cheats

Cheats can be enabled or disabled on command:

```javascript
unlocker.disable() // Disables all cheats.
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

The cheat object contains the same enabling methods as the Unlock object, but is specific to itself (meaning you can use `konami.disable()` to disable that specific cheat). Furthermore, you can set the hotkey and callback using by assigning new values to them:

```javascript
konami.callback = function() {
	gainLives(30);
};

konami.code = 'UUDDLRLRba';

```

Please Note: The name property used to be read-only and is now changeable as UnlockJS no longer emphasizes restricting the things you do. However, if you do decide to manually set the name, you're a moron. No offense.

#### Presets

UnlockJS comes with several presets for common cheat codes.

```javascript
konami.code = Unlock.presets.KONAMI;

```

Users of ES Modules can also import the presets like so:

```javascript
import { KONAMI } from 'unlockjs/src/utils/presets';

konami.code = KONAMI;

```

| Preset   | Code                                            |
|:---------|:------------------------------------------------|
| KONAMI   | Up Up Down Down Left Right Left Right B A Enter |
| MK_BLOOD | A B A C A B B                                   |
| GOD_MODE | I D D Q D                                       |

### Shortcuts

Shortcuts are added in pretty much the same way as cheatcodes:

```javascript
unlocker.addShortcut({
	hotkey: '^z',
	selector: '.selector',
	callback: function() {
		alert('Undo!');
	}
});

unlocker.addShortcut('^z', '.selector', function() {
	alert('Undo!');
});
```

The `.addShortcut` function accepts three parameters, `hotkey`, `selector`, and `callback`. Like cheat codes, they can be passed as an object. When passed as individual parameters, the selector is optional. Providing a selector, which accepts either a string selector or an actual DOM element, binds the shortcut to that element so it does not hotkey outside of it.

#### The Hotkey Parameter

The hotkey is what activates the callback and must be in the following format:

```
'^+a'
```

- Zero or more modifier key character (^, +, !, or #).
- Exactly one hotkey (Any non-modifier key character).

The supported characters match the [character chart above](#character-chart). The initial behavior of a shortcut is not disabled by default (i.e. Ctrl+S still opens a save dialog). To prevent the default behavior, prepend your hotkey string with a hyphen. For example, `^s` (Ctrl+S) should be replaced with `-^s`.

#### Modifying Shortcuts

Like cheat codes, shortcut parameters can be modified by assigning them a new value.

## ES Modules

At its core, the Unlock module is actually a wrapper around two separate submodules, providing extra functionality for managing both cheatcodes and shortcuts. As such, it may carry additional load that's not relevant to your project. Therefore, if you are using a build system that support modules, it is recommended that you instead import the components you need.

```javascript
import CheatCode from 'unlockjs/src/cheatcode';
import Shortcut from 'unlockjs/src/shortcut';
```

Usage is mostly the same. Behind the scenes, `unlocker.addCheat([args])` is calling `new CheatCode([args])` using the same parameters you passed in and returns the CheatCode instance that was created. Therefore, anything in the documentation for CheatCodes above that's not specific to the Unlock class will apply here as well. Likewise, `unlocker.addShortcut([args])` creates and returns an instance of `new Shortcut([args])`

## Contribution

This project uses Webpack to build the distribution files and tests. Please make sure to have npm and Webpack installed. The scripts are in package.json for your leisurely use.

## License

[MIT License](https://github.com/quangdaon/unlockjs/blob/master/LICENSE)
