//http-server -p 8000 in bash terminal to initiate a temporary local server


// Fetch and instantiate the WebAssembly module
var memory = new WebAssembly.Memory({initial:1024});

var imports = {
    'env': {
        'memory': memory
    }
};

fetch('calculator.wasm').then(response => 
  
  response.arrayBuffer()

).then(bytes => 
  
  WebAssembly.instantiate(bytes, imports)

).then(results => {
    
    // initialize the address pointer to the beginning of the array
    var p=0;
    const { main } = results.instance.exports;
    const wasmInstance = results.instance;

    memory.grow(10000);

    
  // function that takes the input, turns it into an array of ascii numbers
  function parse(input,pointer) {
      let asciiCode = new Uint32Array(memory.buffer,pointer,input.length);
      for (let i=0;i<input.length;i++) {
        asciiCode[i]=input.charCodeAt(i);
      }
      console.log(main(pointer,input.length));
    }

    // window.run makes the function visible to the html onclick event
    // function that retrieves the input value from the html file at the onclick event and passes it to the previous function
    window.run = function run() {
      const calc = document.getElementById('calc').value;
      parse(calc,p);
    }
}).catch(err => {
    console.error("Error loading WebAssembly module:", err);});
