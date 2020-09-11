console.group('Module ES6')
console.log(this)
console.log(globalThis)
console.log(window)

;(() => {
    const window = {}
    console.log(window)
    console.log(this)
    console.log(globalThis)
})()

console.groupEnd('Module ES6')