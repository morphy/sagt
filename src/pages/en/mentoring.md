---
title: "Mentoring"
layout: "@layouts/Page.astro"
---

# EN

# Dupa dupa DUPA!

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
vero eos et accusam et justo duo dolores et ea rebum.

Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
amet.

## Sranie w banie

```js
function Bogosort(arr) {
  var isSorted = function (arr) {
    for (var i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        return false;
      }
    }
    return true;
  };

  function shuffle(arr) {
    var count = arr.length,
      temp,
      index;

    while (count > 0) {
      index = Math.floor(Math.random() * count);
      count--;

      temp = arr[count];
      arr[count] = arr[index];
      arr[index] = temp;
    }

    return arr;
  }

  function sort(arr) {
    var sorted = false;
    while (!sorted) {
      arr = shuffle(arr);
      sorted = isSorted(arr);
    }
    return arr;
  }

  return sort(arr);
}
```

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
no sea takimata sanctus est Lorem ipsum dolor sit amet.
