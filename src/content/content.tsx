function getCursorPosition() {
    
}

function checkTextSelection() {
    const selectedObject = window.getSelection();
    if (selectedObject) {
        const selectedText = selectedObject.toString();
        const dollarNumRegex = /\$\d+/;
        const match = dollarNumRegex.exec(selectedText);
    
        if (match) {
            const price = match[0];
            console.log("price is: " + price);
    
            chrome.runtime.sendMessage(
                "foo",
                function (response) {
                    console.log(response);
                }
            );
        }
    }
}

document.addEventListener("mouseup", checkTextSelection);