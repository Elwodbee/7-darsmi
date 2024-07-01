const numbers = [25, 100, 12, 43, 83, 98, 67, 49, 50, 77, 1000,56];

numbers.forEach(item => {
    let newText = document.createElement("h1");
    newText.textContent = item;
    
    if (item <= 50) {
        newText.style.backgroundColor = "red";
        newText.style.color = "white";
        newText.style.textAlign = "center"
    }else{item => 50
    newText.style.backgroundColor = "green"
    newText.style.color = "white"
    newText.style.textAlign = "Center"}

    document.body.append(newText);
});