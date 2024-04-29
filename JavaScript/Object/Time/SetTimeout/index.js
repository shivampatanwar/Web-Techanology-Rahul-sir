
function abc() {
    console.log("ABC Function");
}


setTimeout(() => {
    console.log("setTimeout Function");
}, 3000);

setTimeout(() => {
    console.log("setTimeout 2 Function");
});

abc()

