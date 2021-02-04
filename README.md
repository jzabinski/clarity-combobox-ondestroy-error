# ClarityComboboxOndestroyBug

This demonstrates an issue where if the Clarity combobox has focus and Angular removes the combobox, the error 'ApplicationRef.tick is called recursively' can be thrown.

To reproduce:
1. Download this repository.
2. `npm install`
3. `ng serve`
4. In the combobox, click the right portion of the combobox to activate the dropdown. (The dropdown icon sometimes does not appear.)
5. Wait a second, and you should see a spinner appear.

The error 'ApplicationRef.tick is called recursively' can be seen in the console.
