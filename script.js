function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.opacity = "0";
        // Use a timeout to allow the fade-out animation to complete before hiding the content
        setTimeout(function(content) {
            content.style.display = "none";
        }, 500, tabcontent[i]);
    }

    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Use a timeout to allow the fade-out animation to complete before showing the new content
    setTimeout(function() {
        var newTab = document.getElementById(tabName);
        newTab.style.display = "block";
        // Use another timeout to allow the display property to be set before starting the fade-in animation
        setTimeout(function() {
            newTab.style.opacity = "1";
        }, 10);
    }, 500);

    evt.currentTarget.className += " active";
}
