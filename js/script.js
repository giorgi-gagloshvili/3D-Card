const card = document.getElementById('card')

document.addEventListener('mousemove', (e) => {
    if(e.target.id === 'card' || card.contains(e.target)) {
        const cardWidth = card.clientWidth
        const cardHeight = card.clientHeight

        const cardWidthHalf = cardWidth / 2
        const cardHeightHalf = cardHeight / 2
        
        const offsetWidth = (e.clientX - card.offsetLeft) - cardWidthHalf
        const offsetHeight = (e.clientY - card.offsetTop) - cardHeightHalf
        
        let degX = -(offsetHeight * 0.1)
        let degY = offsetWidth * 0.05

        card.style.transform = `rotateX(${degX}deg) rotateY(${degY}deg)`
    } else {
        card.style.transform = `rotateX(0) rotateY(0)`
    }
})