# class_ObjectObserver
class ObjectObserver provides a deep observation of a changes performed on an object/array.

## Example
```
const person = {}; // alternate window.ObjectObserver({})
person = window.ObjectObserver(person);

person.observe((key, value) => {
  console.log(`Person changed value from '${key}' to '${value}'`)
})

person.username = 'Tom'; // As a consequence of this action, the handler will be called
```
