let peopleItem = document.querySelectorAll('.people__item')

function scaleUpDownEnter(up, down) {
    return function() {
        peopleItem[up].style.transform = 'scale(1.1)'
        peopleItem[down].style.transform = 'scale(0.9)'
    }
}
function scaleUpDownLeave() {
    peopleItem.forEach(element => {
        element.style.transform = 'scale(1)'
    })
}

peopleItem[0].addEventListener('mouseenter', scaleUpDownEnter(0,1))
peopleItem[1].addEventListener('mouseenter', scaleUpDownEnter(1,0))
peopleItem[0].addEventListener('mouseleave', scaleUpDownLeave)
peopleItem[1].addEventListener('mouseleave', scaleUpDownLeave)
