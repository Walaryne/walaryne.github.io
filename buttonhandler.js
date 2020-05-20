
function solve() {
    let n = document.getElementById("n").value;
    let t = document.getElementById("t").value;

    arguments_.push(n, t);
    console.log(arguments_);
    document.getElementById("result").value = "";
    Module.callMain(arguments_);
    arguments_ = [];
}