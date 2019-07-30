const htmlRep = parkObj => {

    const addressObj = JSON.parse(
      parkObj.mapped_location.human_address
    )
    console.log(niceLookingAddress)
    return `
    <section>
        <h3>${parkObj.park_name}</h3>
        <p>${addressObj.address}</p>
    </section>
    `
}