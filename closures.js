
function grandParent(){
    let z=30
    function outer() {
        let a = 10;
        function inner() {
          // var a = 20;
          // return a;
          console.log(a,z);
        }
        a = 100; //it reference to memory, not value.
        return inner;
        // inner();
      }
      
      const output = outer();
      console.log("output function:", output);
      
      output();
}

grandParent();