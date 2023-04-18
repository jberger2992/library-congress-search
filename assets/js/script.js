const searchBtn = document.getElementById('submit-btn');
const searchInput = document.getElementById('search-field');

searchBtn.addEventListener('click', function(event){
    event.preventDefault();
    let searchText = searchInput.value.trim();
    searchText = searchText.replaceAll(' ', '-');
    console.log(searchText);
    search(searchText);
});

function search(str){
    fetch("https://www.loc.gov/search/?q="+str+"&fo=json")
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        for (let i = 0; i < data.results.length; i++) {
            console.log(data.results[i].title);
        }
    })
}