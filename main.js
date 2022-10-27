
function setActive(element, pagename) {
    if(document.querySelector('.active')) 
        document.querySelector('.active').removeAttribute('class')
    
    element.setAttribute('class', 'active')
    
    for(let section of document.getElementsByClassName('section'))
        section.setAttribute('class', 'section hide')
    
    document.getElementById(pagename).setAttribute('class', 'section')
}

// disable the submit function
document.getElementById('contact-form').onsubmit = e => {
    e.preventDefault()
}