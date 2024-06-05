#### calendar

```html
<script src="/calendar.js"></script>
...
<body>
  <div class="target-container"></div>
</body>
```

```js
document.addEventListener("DOMContentLoaded", () => {
  const targetContainer = document.querySelector(".target-container");
  createCalendar(targetContainer);
});
```
