const js = import("./node_modules/@kajirikajiri/hello-wasm/hello_wasm.js");
console.log(js)
js.then(js => {
    js.greet("WebAssembly");
});
