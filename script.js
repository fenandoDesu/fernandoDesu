
document.addEventListener('DOMContentLoaded', (event) => {

    const cellArray = document.querySelectorAll('[data-cell]');

    let celltaken = [];

    let verifier;

    let compmoveverifier;

    const xcounter = document.getElementById("playerXScore");
    let xwins = 0;

    const ocounter = document.getElementById("playerOScore");
    let owins = 0;

    function cellOnClick(cellnumber){
        verifier = 0;
        celltaken.forEach(element=>{
            if(element == cellnumber){
                verifier++;
            }
        })
        if(verifier == 0){
            cellArray[cellnumber].classList.add("x");
            celltaken.push(cellnumber);
            
        }
        
        //computer move
        let computermove;
        if(celltaken.length == 9){
            return -1;
        }
        function computerMove(computermove){
            compmoveverifier = 0;
            celltaken.forEach(element=>{
                if(element == computermove){
                    compmoveverifier++;
                    //console.log("there's already " + computermove+ " in the array");
                }
            })
            if(compmoveverifier == 0){
                return compmoveverifier;
            }
        }

        do{
            computermove = Math.floor(Math.random() * 9);
            
        }while(computerMove(computermove) != 0);
        
        cellArray[computermove].classList.add("o");
        celltaken.push(computermove);

        // first win case
        if(cellArray[0].classList.contains("x") && 
            cellArray[1].classList.contains("x") && 
            cellArray[2].classList.contains("x")){
                xwins++;
                xcounter.textContent = xwins;
                restart();
        }else if(cellArray[3].classList.contains("x") && 
                cellArray[4].classList.contains("x") && 
                cellArray[5].classList.contains("x")){
                    xwins++;
                    xcounter.textContent = xwins;
                    restart();
        }else if(cellArray[6].classList.contains("x") && 
                cellArray[7].classList.contains("x") && 
                cellArray[8].classList.contains("x")){
                    xwins++;
                    xcounter.textContent = xwins;
                    restart();
        }

        // first win case for computer
        if(cellArray[0].classList.contains("o") && 
            cellArray[1].classList.contains("o") && 
            cellArray[2].classList.contains("o")){
                owins++;
                ocounter.textContent = owins;
                restart();
        }else if(cellArray[3].classList.contains("o") && 
                cellArray[4].classList.contains("o") && 
                cellArray[5].classList.contains("o")){
                    owins++;
                    ocounter.textContent = owins;
                    restart();
        }else if(cellArray[6].classList.contains("o") && 
                cellArray[7].classList.contains("o") && 
                cellArray[8].classList.contains("o")){
                    owins++;
                    ocounter.textContent = owins;
                    restart();
        }

        // second win case
        if(cellArray[0].classList.contains("x") && 
            cellArray[3].classList.contains("x") && 
            cellArray[6].classList.contains("x")){
                xwins++;
                xcounter.textContent = xwins;
                restart();
        }else if(cellArray[1].classList.contains("x") && 
                cellArray[4].classList.contains("x") && 
                cellArray[7].classList.contains("x")){
                    xwins++;
                    xcounter.textContent = xwins;
                    restart();
        }else if(cellArray[2].classList.contains("x") && 
                cellArray[5].classList.contains("x") && 
                cellArray[8].classList.contains("x")){
                    xwins++;
                    xcounter.textContent = xwins;
                    restart();
        }

        // second win case for computer
        if(cellArray[0].classList.contains("o") && 
            cellArray[3].classList.contains("o") && 
            cellArray[6].classList.contains("o")){
                owins++;
                ocounter.textContent = owins;
                restart();
        }else if(cellArray[1].classList.contains("o") && 
                cellArray[4].classList.contains("o") && 
                cellArray[7].classList.contains("o")){
                    owins++;
                    ocounter.textContent = owins;
                    restart();
        }else if(cellArray[2].classList.contains("o") && 
                cellArray[5].classList.contains("o") && 
                cellArray[8].classList.contains("o")){
                    owins++;
                    ocounter.textContent = owins;
                    restart();
        }

        // third win case
        if(cellArray[0].classList.contains("x") && 
            cellArray[4].classList.contains("x") && 
            cellArray[8].classList.contains("x")){
                xwins++;
                xcounter.textContent = xwins;
                restart();
        }else if(cellArray[2].classList.contains("x") && 
                cellArray[4].classList.contains("x") && 
                cellArray[6].classList.contains("x")){
                    xwins++;
                    xcounter.textContent = xwins;
                    restart();
        }

        // third win case for computer
        if(cellArray[0].classList.contains("o") && 
            cellArray[4].classList.contains("o") && 
            cellArray[8].classList.contains("o")){
                owins++;
                ocounter.textContent = owins;
                restart();
        }else if(cellArray[2].classList.contains("o") && 
                cellArray[4].classList.contains("o") && 
                cellArray[6].classList.contains("o")){
                    owins++;
                    ocounter.textContent = owins;
                    restart();
        }
    }

    function restart(){
        while(celltaken.length > 0){
            celltaken.pop();
        }
        cellArray.forEach(element=>{
            element.classList.remove("x");
            element.classList.remove("o");
        });
    }

    function restartScore(){
        owins = 0;
        xwins = 0;
        ocounter.textContent = owins;
        xcounter.textContent = xwins;
    }

    function darkMode(){
        
    }
    
    window.cellOnClick = cellOnClick;
    window.restart = restart;
    window.restartScore = restartScore;
    window.darkMode = darkMode;
    
    
});
