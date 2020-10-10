const vPoints = document.getElementById("dead");
const lPoints = document.getElementById("lost");

getHole = (index) => document.getElementById("hole" + index);

for (let i = 1; i < 10; i++) {
    getHole(i).onclick = () => {
        
        if ( getHole(i).className == "hole hole_has-mole" )
            vPoints.textContent = +vPoints.textContent + 1;
        else
            lPoints.textContent = +lPoints.textContent + 1;

        if (vPoints.textContent == 10) {
            vPoints.textContent = 0; lPoints.textContent = 0;
            alert('Выигрыш');
        }
        else if (lPoints.textContent == 5) {
            vPoints.textContent = 0; lPoints.textContent = 0;
            alert('Проигрыш');
        }
    }
}

