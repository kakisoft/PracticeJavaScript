document.getElementById('omikuji').addEventListener('click', function() {
    var options = ["大吉", "小吉", "凶"];
    var result = options[Math.floor(Math.random() * options.length)];
    if (result = "大吉") {
        result += "!!!!!";
    }
    document.getElementById('result').innerHTML = result;
});