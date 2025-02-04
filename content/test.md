---
title: test
---
 
test body
 
<!--more-->


画像
![avatar](/img/ci.png)

コードハイライト
```javascript
function HelloWorld() {
  console.log("HelloWorld");
}
```

::card
Card Component で表示できる
::

::hero
Default slot text

#description
This will be rendered inside the `description` slot.
::

::hero
  :::card
    A nested card
    ::card
      A super nested card
    ::
  :::
::

::the-title
A [rich text](/) will be **rendered** by the component.
::

# Title

:banner