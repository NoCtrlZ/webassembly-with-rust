const js = import("./node_modules/@sexydynamite/rust-as-backend");
js.then(js => {
  js.greet("WebAssembly");
});