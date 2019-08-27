document.addEventListener("DOMContentLoaded", function(event) {
    $.getJSON("data/TableOfContents.json", function(data) {
        console.log("data", data);
        data.forEach((datum) => {
            console.log("datum", datum);
        });
    });
});
