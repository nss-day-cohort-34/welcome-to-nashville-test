// Reference to dom element
// event listener
// Get data
// Html Representation
// Render to dom


const resultsContainer = document.querySelector("#resultsContainer")

document.querySelector("#parksBtn").addEventListener("click", evt =>{
    const userInput = document.querySelector("#parksInput").value
    getParks(userInput)
    .then( parksArray=> {
        parksArray.forEach(parkObj => {
            const parkHtml = htmlRep(parkObj)
            renderToDom(resultsContainer, parkHtml)
        });
    })

})