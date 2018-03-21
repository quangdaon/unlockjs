## From v. 0.0.2 (Alpha)

For the most part, the api should functionally be the same as the previous versions, but there were a few breaking changes.

- The "delay" option on Unlock has been renamed to "timeout".
- "Hotkey" and all references have been renamed to "shortcut".
    - The "Hotkey" keyword now replaces "trigger" in reference to the textual combination.
- .kill() method on cheatcode and shortcut instances have been removed. Use .disable() instead.