



function aparecer(){
    var herois = document.getElementById('herois')
    var hanzo = document.getElementById('Hanzo')
    var genji = document.getElementById('Genji')
    var mcree = document.getElementById('Mcree')
    var widow = document.getElementById('Widow')
    var corpoo = document.getElementById('corpo')


    if(herois.value == 'Hanzo'){
        hanzo.style.display = "block"
        genji.style.display = "none"
        mcree.style.display = "none"
        widow.style.display = "none"
        corpoo.style.backgroundImage = "url(img/wallpaperhanzo.png)"



    }

    else if(herois.value == 'Genji'){
        genji.style.display = "block"
        hanzo.style.display = "none"
        mcree.style.display = "none"
        widow.style.display = "none"
        corpoo.style.backgroundImage = 'url(img/wallpapergenji.jpg)'

    }

    else if(herois.value == 'Mcree'){
        mcree.style.display = "Block"
        hanzo.style.display = "none"
        genji.style.display = "none"
        widow.style.display = "none"
        corpoo.style.backgroundImage = 'url(img/wallpapermcree.png)'



    }

    else if(herois.value == 'Widow'){
        widow.style.display = "Block"
        hanzo.style.display = "none"
        genji.style.display = "none"
        mcree.style.display = "none"
        corpoo.style.backgroundImage = 'url(img/wallpaperwidow.jpg)'

    }



}

// function ult(){
//     var ult = document.getElementById('ult')
    
//     ult.style.display = "block"
// }

// function ult2(){
//     var ult = document.getElementById('ult')

//     ult.style.display = "none"

// }