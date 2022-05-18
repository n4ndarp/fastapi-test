const badnum = "NUMBERBad";
if(typeof(Storage) !== "undefined"){
    if(localStorage.getItem(badnum) === "undefined"){
        localStorage.setItem(badnum, 0);
    }
    const badbol = document.querySelector("#badbol");
    badbol.addEventListener('click', function(event){
        let bad = localStorage.getItem(badnum);
        if(bad === '1'){
            bad = 0;
            badbol.style.backgroundColor = "#ffffff";
        }
        else{
            bad = 1;
            badbol.style.backgroundColor = "#d92b31";
        }
        localStorage.setItem(badnum, bad);
    });
}

const goodnum = "NUMBERGood";
if(typeof(Storage) !== "undefined"){
    if(localStorage.getItem(goodnum) === "undefined"){
        localStorage.setItem(goodnum, 0);
    }
    const goodbol = document.querySelector("#goodbol");
    goodbol.addEventListener('click', function(event){
        let good = localStorage.getItem(goodnum);
        if(good === '1'){
            good = 0;
            goodbol.style.backgroundColor = "#ffffff";
        }
        else{
            good = 1;
            goodbol.style.backgroundColor = "#56d636";
        }
        localStorage.setItem(goodnum, good);
    });
}