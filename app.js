document.body.addEventListener('click', setBG)

/*function setBG(e) {
    if (e.target.id === 'red') {
        document.body.style.backgroundColor = 'red'
    } else if (e.target.id === 'orange') {
        document.body.style.backgroundColor = 'orange'
    } else if (e.target.id === 'yellow') {
        document.body.style.backgroundColor = 'yellow'
    } else if (e.target.id === 'green') {
        document.body.style.backgroundColor = 'green'
    } else if (e.target.id === 'blue') {
        document.body.style.backgroundColor = 'blue'
    } else if (e.target.id === 'purple') {
        document.body.style.backgroundColor = 'purple'
    } else {
        document.body.style.backgroundColor = '#fff'
    }
}*/
function setBG(e) {
    document.body.style.backgroundColor = e.target.id;
}
