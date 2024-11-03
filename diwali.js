document.getElementById("celebrateBtn").addEventListener("click", function() {
    const fireworks = document.getElementById("fireworks");
    const rightfire = document.getElementById("rightfire");
    const diya = document.getElementById("diya");

    
    
    const interval = setInterval(() => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generate random color
        document.body.style.backgroundColor = randomColor;
    }, 200);

    
    setTimeout(() => {
        clearInterval(interval);
    }, 10000);

    fireworks.style.display = "block"; 
    rightfire.style.display = "block"; 
    diya.style.display = "block"; 

    diya.innerHTML = '🪔'; 
    diya.style.opacity = 1; 
    diya.style.fontSize = '80px'; 

    setTimeout(() => {
        fireworks.style.display = "none"; 
        rightfire.style.display = "none"; 
        diya.style.opacity = "none"; 
    }, 10000); 
    
    const crackerCount = 20; 
    for (let i = 0; i < crackerCount; i++) {
        const cracker = document.createElement('span');
        
        cracker.style.position = 'absolute';
        cracker.style.left = Math.random() * 100 + 'vw'; 
        cracker.style.fontSize = Math.random() * 30 + 20 + 'px'; 
        cracker.style.opacity = 1; 
        document.getElementById('rightfire').appendChild(cracker);
        
        
        setTimeout(() => {
            cracker.style.opacity = 1;
            cracker.style.transform = `translateY(50px)`
            cracker.style.transform = `translateY(-20px)`; 
        }, 100);
    }
});
