const searchBtn2 = document.getElementById('submit-btn-2');
const searchInput2 = document.getElementById('search-field-2');
const formatSelection2 = document.getElementById("format-2");
const resultsSection = document.getElementById("results-section");

let formatOption = "";

searchBtn2.addEventListener('click', function(event){
    event.preventDefault();
    formatOption = formatSelection2.value;
    let searchText = searchInput2.value.trim();
    searchText = searchText.replaceAll(' ', '-');
    console.log(searchText);
    if(formatOption === "format-options"){
        search2(searchText);
    }
    else{
        formatSearch2(searchText);
    }
});

function search2(str){
    fetch("https://www.loc.gov/search/?q="+str+"&fo=json")
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        for (let i = 0; i < data.results.length; i++) {
            console.log(data.results[i].title);
            const infoCard = document.createElement('div');
            infoCard.classList.add("results","info-card");
            resultsSection.appendChild(infoCard);
            const infoTitle = document.createElement('h4');
            infoTitle.classList.add("results");
            infoTitle.textContent = data.results[i].title;
            infoCard.appendChild(infoTitle);
            const infoDesc = document.createElement('p');
            infoDesc.classList.add("results");
            infoDesc.textContent = data.results[i].description;
            infoCard.appendChild(infoDesc);
            const infoLink = document.createElement('a');
            infoLink.classList.add("results");
            infoLink.setAttribute('href',data.results[i].url);
            infoLink.textContent = "Item Link";
            infoCard.appendChild(infoLink);
        }
    })
}

function formatSearch2(str){
    fetch("https://www.loc.gov/"+formatOption+"/?q="+str+"&fo=json")
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        for (let i = 0; i < data.results.length; i++) {
            console.log(data.results[i].title);
            const infoCard = document.createElement('div');
            infoCard.classList.add("results","info-card");
            resultsSection.appendChild(infoCard);
            const infoTitle = document.createElement('h4');
            infoTitle.classList.add("results");
            infoTitle.textContent = data.results[i].title;
            infoCard.appendChild(infoTitle);
            const infoDesc = document.createElement('p');
            infoDesc.classList.add("results");
            infoDesc.textContent = data.results[i].description;
            infoCard.appendChild(infoDesc);
            const infoLink = document.createElement('a');
            infoLink.classList.add("results");
            infoLink.setAttribute('href',data.results[i].url);
            infoLink.textContent = "Item Link";
            infoCard.appendChild(infoLink);
        }
    })
}