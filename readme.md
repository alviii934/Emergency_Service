1. DOM Element Selection

getElementById is used to select one element using ID. If the ID is not found,
it returns null.

getElementsByClassName selects all elements with same class. It returns a live
collection, so if HTML changes, it updates automatically.

querySelector selects the first element that matches a CSS selector.

querySelectorAll selects all matching elements and returns a list.

2. Creating Elements

We can create a new element using document.createElement(). After that we can
add text using textContent or innerHTML. Then the element is added using
appendChild or similar methods.

3. Event Bubbling

When an event happens on an element, it goes upward to parent elements. This is
called event bubbling and it happens by default.

4. Event Delegation

Instead of adding many listeners, we add one listener to parent. Using
event.target, we can know which child was clicked. It makes code easier and
faster.

5. preventDefault vs stopPropagation

preventDefault() stops browser’s default action like form submit.

stopPropagation() stops the event from going to parent elements.
