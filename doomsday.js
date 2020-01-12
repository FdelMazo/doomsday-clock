let YEARS = []

$(document).ready(function() {
    Object.keys(DB).forEach(function(key) {
        YEARS.push(key)
    })
    
    $("#prev").on("click", function (event) {
        clock(getPrev($("#year").val()))
    })
    $("#next").on("click", function (event) {
        clock(getNext($("#year").val()))
    })
    $(document).on("keyup", function (event) {
        if (event.keyCode === 37) {
            clock(getPrev($("#year").val()))
        }
        if (event.keyCode == 39) {
            clock(getNext($("#year").val()))
        }
    })

    clock(YEARS[YEARS.length -1])
})

function clock(year) {
    year = parseInt(year)
    $("#year").val(year)
    $("#description").text(DB[year].description)
    let deg = DB[year].tomidnight * -6
    $(".clock .minute").css('transform', 'rotateZ(calc('+deg+'deg)');
}

function getNext(year){
    let index = YEARS.indexOf(year)
    if (index == YEARS.length-1) return YEARS[0]
    return YEARS[index+1]
}

function getPrev(year) {
    let index = YEARS.indexOf(year)
    if (index == 0) return YEARS[YEARS.length -1]
    return YEARS[index-1]
}

