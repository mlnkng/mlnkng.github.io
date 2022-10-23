function showNav() {
    var iconDisplay = window.getComputedStyle(document.getElementById('nav-icon')).getPropertyValue('display');
    var dropdownDisplay = window.getComputedStyle(document.getElementById('nav-dropdown')).getPropertyValue('display');

    if (iconDisplay == "block" && dropdownDisplay == "none") {
        document.getElementById('nav-icon').style.display = "none";
        document.getElementById('nav-dropdown').style.display = "contents";
    }
    }

    function hideNav() {
    var iconDisplay = window.getComputedStyle(document.getElementById('nav-icon')).getPropertyValue('display');
    var dropdownDisplay = window.getComputedStyle(document.getElementById('nav-dropdown')).getPropertyValue('display');

    if (iconDisplay == "none" && dropdownDisplay == "contents") {
        document.getElementById('nav-icon').style.display = "block";
        document.getElementById('nav-dropdown').style.display = "none";
    }
}

function showContacts() {
    var contactBtn = document.getElementById('contact-btn');
    var contactSpan = document.getElementById('contact-span');
    var contactLinkGh = document.getElementById('contact-link-gh');
    var contactLinkLi = document.getElementById('contact-link-li');
    var contactLinkFb = document.getElementById('contact-link-fb');

    contactBtn.style.cssText = `
        transform: scale(1.1);
        border: 0.8px solid #e9ecef;
        box-shadow: 0px 0px 5px 5px #e9ecef;
        background-color: #d7c1ff;
        transition: all 2s ease-in-out;
    `;

    contactSpan.style.cssText = `
        transform: translateX(-100%);
        transition: all 2s ease-in-out;
    `;

    contactLinkGh.style.cssText = `
        opacity: 1;
        transform: translateX(0);
        transition: all 2s ease-in-out;
    `;

    contactLinkLi.style.cssText = `
        opacity: 1;
        transform: translateX(0);
        transition: all 2s ease-in-out;
    `;

    contactLinkFb.style.cssText = `
        opacity: 1;
        transform: translateX(0);
        transition: all 2s ease-in-out;
    `;
}

function hideContacts() {
    var contactBtn = document.getElementById('contact-btn');
    var contactSpan = document.getElementById('contact-span');
    var contactLinkGh = document.getElementById('contact-link-gh');
    var contactLinkLi = document.getElementById('contact-link-li');
    var contactLinkFb = document.getElementById('contact-link-fb');

    contactBtn.style.cssText = `
        width: 280px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        cursor: pointer;
    `;

    contactSpan.style.cssText = `
        @include gradient-rev;
        position: absolute;
        width: 100%;
        text-align: center;
        line-height: 80px;
        font-weight: 600;
        font-size: 2rem;
        transition: 0.4s linear;
    `;

    contactLinkGh.style.cssText = `
        flex: 1;
        font-size: 26px;
        text-align: center;
        transform: translateX(-100%);
        opacity: 0;
        transition: 0.3s linear;
        color: #e9ecef;
    `;

    contactLinkLi.style.cssText = `
        flex: 1;
        font-size: 26px;
        text-align: center;
        transform: translateX(-100%);
        opacity: 0;
        transition: 0.3s linear;
        color: #e9ecef;
    `;

    contactLinkFb.style.cssText = `
        flex: 1;
        font-size: 26px;
        text-align: center;
        transform: translateX(-100%);
        opacity: 0;
        transition: 0.3s linear;
        color: #e9ecef;
    `;
}

function showAbout(group) {
    var ul = document.getElementById(group + "-ul");
    var text = document.getElementById(group + "-text");

    if (ul) {
        ul.style.display = "block";
    }

    if (text) {
        text.style.cssText = `
            display: block;
            color: #e9ecef;
            position: relative;
            padding-left: 10px;
        `;
    }

    document.getElementById(group + "-card").style.width = "175%";
    document.getElementById(group + "-title").style.display = "none";

    document.getElementById(group + "-icon").style.cssText = `
        width: 40px;
        height: 40px;
        transition: all 0.1s ease;
        display: flex;
        justify-content: center;
        align-items: center;
    `;
}

function hideAbout(group) {
    var ul = document.getElementById(group + "-ul");
    var text = document.getElementById(group + "-text");

    if (ul) {
        ul.style.display = "none";
    }

    if (text) {
        text.style.display = "none";
    }

    document.getElementById(group + "-card").style.width = "100%";
    document.getElementById(group + "-title").style.display = "block";

    document.getElementById(group + "-icon").style.cssText = `
        margin: 0 auto;
        width: 100%;
        height: 80px;
        max-width: 80px;
        background: linear-gradient(90deg, #bcacff 0%,  #af9aff 40%, rgba(0, 0, 0, 0.28) 60%);
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        transition: all 1s ease;
        background-position: 0px;
        background-size: 200px;
    `;
}

function showCoopExp() {
    var expTitle = document.getElementById('exp-title');
    var title = document.getElementById('title');  
    var textBox = document.getElementById('textbox');  
    var coopText = "MAY 2021 - DEC 2021 [CO-OP]<br/><ul><li><i class='bi bi-caret-right-fill'></i>deploy & upgrade client servers</li><li><i class='bi bi-caret-right-fill'></i>troubleshooting</li><li><i class='bi bi-caret-right-fill'></i>domain names configuration</li></ul>";      

    expTitle.style.display = "none";
    textBox.style.display = "inline-block";
    title.innerHTML = "DEPLOYMENT & TECHNICAL SUPPORT | Artefactual Systems Inc."
    title.style.cssText = `
        text-transform: capitalize;
        font-size: 2rem;
        display: inline-block;
        width: 130%;
    `
    textBox.innerHTML = coopText;
}

function showWorkExp() {
    var expTitle = document.getElementById('exp-title');
    var title = document.getElementById('title');  
    var textBox = document.getElementById('textbox');
    var workText = "JAN 2022 - PRESENT<br/><ul><li><i class='bi bi-caret-right-fill'></i>front-end web development</li><li><i class='bi bi-caret-right-fill'></i>data migration</li><li><i class='bi bi-caret-right-fill'></i>bug fixes</li></ul>";

    expTitle.style.display = "none";
    textBox.style.display = "inline-block";
    title.innerHTML = "JR DEVELOPER | Artefactual Systems Inc.";
    title.style.cssText = `
        text-transform: capitalize;
        font-size: 2rem;
        display: inline-block;
        width: 130%;
    `
    
    textBox.innerHTML = workText;
}

function hideExp() {
    var expTitle = document.getElementById('exp-title');
    var title = document.getElementById('title')
    var textBox = document.getElementById('textbox');

    expTitle.style.display = "inline-block";
    title.style.display = "none";
    textBox.style.display = "none";
}