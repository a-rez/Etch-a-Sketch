var button = document.createElement('button');
button.textContent = "Click here to set the number of rows and columns for your square etch-a-sketch";

button.addEventListener("click", function() {

    let toBeCleared = document.querySelectorAll(".divs, .container_divs");

    for (let i = toBeCleared.length-1;i >= 0;i--) {
        toBeCleared[i].remove();
    }

    squareCount = prompt("How many rows and columns would you like?");

    // in order to change the size of the child divs based on the number of them-
    // make as many subcontainer divs as rows, then add the same amount of child divs to it 
    for (let i = 0; i < squareCount; i++) {
        let container_div = document.createElement('div');
        container_div.className = "container_divs";
        container_div.id = "container_div"+i
        document.getElementById("container").appendChild(container_div);
        for (let n = 0; n < squareCount; n++) {
            
            var div = document.createElement('div');
            div.className = "divs";
            container_div.appendChild(div);

        }
                
    }
    var small_divs = document.getElementsByClassName("divs");

    // for the child divs to change color on hover
    for (let a = small_divs.length-1;a >= 0;a--) {
        let v = small_divs[a];

        
        v.addEventListener("mousemove", function() { 

            if (!v.className.includes("hover", 0)) {
            v.className += " hover"; 
            }
        });
    }
})



var buttondiv = document.createElement('div');
buttondiv.className = "buttondiv"
buttondiv.appendChild(button);
document.body.appendChild(buttondiv);

var container = document.createElement('div');
container.id = "container";
document.body.appendChild(container);

