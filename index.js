document.queryselector("container")
    .addEventListener("click", function(container) {    
        setTimeout(() => { 
            console.log("Received!");
        }, 3000);
});

