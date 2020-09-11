console.group('Regular JS file')
console.log(this)
console.log(globalThis) 
console.log(window)

;(() => {
    const window = {}
    console.log(window)
    console.log(this)
    console.log(globalThis)
})()

console.groupEnd('Regular JS file')