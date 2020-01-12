let YEARS = []
let DESCRIPTIONS = {}
let TOMIDNIGHTS = {}

$(document).ready(function() {
    DB.forEach(function(entry) {
        YEARS.push(entry.year)
        DESCRIPTIONS[entry.year] = entry.description
        TOMIDNIGHTS[entry.year] = entry.tomidnight
    })
    
    $("#prev").on("click", function (event) {
        clock(getPrev(parseInt($("#year").val())))
    })
    $("#next").on("click", function (event) {
        clock(getNext(parseInt($("#year").val())))
    })
    $(document).on("keyup", function (event) {
        if (event.keyCode === 37) {
            clock(getPrev(parseInt($("#year").val())))
        }
        if (event.keyCode == 39) {
            clock(getNext(parseInt($("#year").val())))
        }
    })

    clock(YEARS[YEARS.length -1])
})

function clock(year) {
    $("#year").val(year)
    $("#description").text(DESCRIPTIONS[year])
    let deg = TOMIDNIGHTS[year] * -6
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

