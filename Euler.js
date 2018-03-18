
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function generalisedHammingNumbers(n, k) {
    
    var total_number = [];
    // console.log(n);
    // console.log(k);
    
    for(var i = 1 ; i <= n ; i++){
        
        for(var j = 2; j <= k ; j++){
            if(i%j === 0){
                var div = (i/j);
                for(var z = 2; z<= k; z++){
                      if(div%z === 0 ){
                            total_number.push(i);
                            
                      }
                }break;
            }
        }
    }
    var unique = total_number.filter(function(elem, index, self) {
     return index === self.indexOf(elem);
           });
    
    console.log((unique.length)+4);
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    var result = generalisedHammingNumbers(n, k);
    process.stdout.write("" + result + "\n");

}
