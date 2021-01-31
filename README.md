# use-deep-effect 🕵️‍♂️

React `useEffect` is built to work with primitive values in the dependencies array.

It could happen that in your reach application you need to run side effect on complex objects (`Object`s, `Array`s, `Set`s, `Map`s).

In all this cases, you can use `useDeepEffect`.

## Installation 

```shell
npm i use-deep-effect
```

## Usage

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import useDeepEffect from 'use-deep-effect'

const MyComponent = ({ listOfComments }) => {
  useDeepEffect(() => {
    /* side effect */
  }, 
  /*  listOfComments is an array of objects */
  [listOfComments])

  return </>
}
```

## Custom comparison function

By default, `useDeepEffect` uses [fast-deep-equal](https://github.com/epoberezkin/fast-deep-equal) as comparison function, but you can use your custom function by passing it as third argument.

```jsx
useDeepEffect(fn, dependencies, comparisonFunction)
```

## Why `useEffect` only works with primitive values?

`useEffect` uses referencial equality under the hood. This makes it perfectly working with primitive values (number, string, boolean), bot not with complex types (array, object, set, map).

For instance, this equality check returns false even if the two objects own the same keys and values:

```js
const aFoo = { foo: 'foo' };
const bFoo = { foo: 'foo' };
aFoo === bFoo
false
```

You can use `useDeepEffect`, but remember that it comes with a performance cost (often negligible).


