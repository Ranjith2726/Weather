fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data); // Add this line to log the response

        if (data.cod === 200) {
            // Handle the successful response here
        } else {
            alert("Location not found!");
        }
    })
    .catch(error => {
        console.error('Error:', error); // Log any errors to the console
        alert("Error fetching data. Please try again.");
    });
