fetch("./components/Header.html")
.then((response)=> response.text())
.then((data)=> document.querySelector("Header").innerHTML = data )