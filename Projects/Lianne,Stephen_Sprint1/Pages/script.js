// Script that enables Click function on button to load information from comment.js


    let loadBtn = document.querySelector("#loadButton")

    loadBtn.onclick = function (e) {
        let ul = document.createElement("ul");
        custcomments.forEach((cmts)=> {
            let li = document.createElement("li");
            li.innerText = cmts;
            ul.appendChild(li);
        });
        document.querySelector("#more").appendChild(ul);
    };
