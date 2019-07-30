const getParks = userInput => {
  return fetch(
    `https://data.nashville.gov/resource/74d7-b74t.json?${userInput}=Yes`
  )
    .then(data => data.json())
}

