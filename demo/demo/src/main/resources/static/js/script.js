console.log("Before fetch");

// Make AJAX request to the backend
fetch(`http://localhost:8080/calculateRWL?loadConstant=${loadConstant}&horizontalMultiplier=${horizontalMultiplier}&verticalMultiplier=${verticalMultiplier}&distanceMultiplier=${distanceMultiplier}&asymmetricMultiplier=${asymmetricMultiplier}&frequencyMultiplier=${frequencyMultiplier}&couplingMultiplier=${couplingMultiplier}`)
    .then(response => response.json())
    .then(data => {
        // Display the result
        console.log("Result received:", data);
        
        const formattedResult = data.toExponential(4); // Adjust the argument for the desired decimal places  , this part of the code makes easier to read the number 
        document.getElementById('result').innerText = `Result: ${formattedResult}`;
    })
    .catch(error => {
        console.error('Error:', error);
    })
    .finally(() => {
        console.log("After fetch");
    });

