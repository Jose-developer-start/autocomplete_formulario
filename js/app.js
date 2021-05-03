
$(document).ready(() => {
    $.get("./json/paises.json", (data)=>{
        var country = [] // Objt save country
        data.forEach(element => {
            var data = element.name;
            country.push({"pais": data}) //We convert to objt notation
        });
        $("#country").fuzzyComplete(country)
    })
    $.get("./json/estados.json", (data)=>{
        var states = [] // Objt save state
        data.forEach(element => {
            var data = element.name;
            states.push({"state": data}) //We convert to objt notation
        });
        $("#states").fuzzyComplete(states)
    })
    //Redirect
    $("button").click((event)=>{
        event.preventDefault();
        window.open("https://www.youtube.com/channel/UC8P_vuVnu5QM25onibFCG6A","_target");
    })
})
