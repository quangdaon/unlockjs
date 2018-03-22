## From v. 0.0.2 (Alpha)

For the most part, the api should functionally be the same as the previous versions, but there were a few breaking changes.

- The "delay" option on Unlock has been renamed to "timeout".
- "Hotkey" and all references have been renamed to "shortcut".
    - The "Hotkey" keyword now replaces "trigger" in reference to the textual combination.
- `.kill()` method on cheatcode and shortcut instances have been removed. Use `.disable()` instead.
- The ability to toggle cheatcode state by name has been removed (ie. `unlock.disable('konami')`). Use `unlock.find('cheatcode').disable()` instead.
- `CheatCode.set()` (Previously deprecated) has been removed.
- Previous functionality of `Unlock.reset()` has been removed. This now resets the cheat code tracker.
- `Unlock.settings` has been removed. Settings are now on the root object.