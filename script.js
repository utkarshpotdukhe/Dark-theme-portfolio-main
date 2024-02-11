$('.portfolio-button').mousedown(function(){
    timeout = setInterval(function(){
        window.scrollBy(0,-1); // May need to be -1 to go down
    }, 0); // Play around with this number. May go too fast

    return false;
});

function openProjectDetails(url) {
    // Open the new page in a new tab/window
    window.open(url, '_blank');
}


function openGitHubPage() {
    window.open('https://github.com/utkarshpotdukhe', '_blank');
}

function openLinkedInPage() {
    window.open('https://www.linkedin.com/in/utkarsh-potdukhe', '_blank');
}

