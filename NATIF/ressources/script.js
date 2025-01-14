function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

document.querySelectorAll('#leftskill').forEach((e) => { 
    e.addEventListener('mouseover', () => {
    document.getElementsByClassName('skill-section')[0].style.backgroundImage = 'url(images/skelleton-color-left.svg)'
    })
}) 


document.querySelectorAll('#leftskill').forEach((e) => { 
    e.addEventListener('mouseout', () => {
        document.getElementsByClassName('skill-section')[0].style.background = 'url(images/skelleton-no-color.svg)'
        document.getElementsByClassName('skill-section')[0].style.backgroundSize = 'cover'
        document.getElementsByClassName('skill-section')[0].style.backgroundRepeat = 'no-repeat' 
    })
})

document.querySelectorAll('#rightskill').forEach((e) => { 
    e.addEventListener('mouseover', () => {
    document.getElementsByClassName('skill-section')[0].style.backgroundImage = 'url(images/skelleton-color-right.svg)'
    })
}) 


document.querySelectorAll('#rightskill').forEach((e) => { 
    e.addEventListener('mouseout', () => {
        document.getElementsByClassName('skill-section')[0].style.background = 'url(images/skelleton-no-color.svg)'
        document.getElementsByClassName('skill-section')[0].style.backgroundSize = 'cover'
        document.getElementsByClassName('skill-section')[0].style.backgroundRepeat = 'no-repeat' 
    })
}) 
