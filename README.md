# What is this?

A jQuery plugin for simplifying chain operation.

## Installation

```sh
npm install jquery-plugin-chain --save
```

## Usage

### ES6 JavaScript

```js
import $ from "jquery";
import "jquery-plugin-chain";


$(".something, .someone")
.css({
    color: "black";
    backgroundColor: "pink"
})
.chain(function(){
    let count = this.length;
    if (count % 2 == 0) {
        this.attr("even", "even");
        return this;
    } else {
        return this.filter(".important-feature");
    }
})
.addClass("yeah")
;
```

### TypeScript

```ts
import $ from "jquery";
import "jquery-plugin-chain";


$(".something, .someone")
.css({
    color: "black";
    backgroundColor: "pink"
})
.chain(function(this: JQuery<HTMLElement>){
    let count = this.length;
    if (count % 2 == 0) {
        this.attr("even", "even");
        return this;
    } else {
        return this.filter(".important-feature");
    }
})
.addClass("yeah")
;
```