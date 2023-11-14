# niosh-software-demo-with-java-spring
https://gulsumergin.github.io/niosh-software-demo-with-java-spring/demo/demo/src/main/resources/static/index.html
Project Overview:
The NIOSH RWL (Recommended Weight Limit) Calculator is a web application designed to calculate the Recommended Weight Limit for a manual lifting task based on various factors. The calculation is performed using the NIOSH (National Institute for Occupational Safety and Health) RWL equation, which considers different multipliers such as horizontal, vertical, distance, asymmetric, frequency, and coupling multipliers.

-----------------------------------------------------
Components:

HTML Page (index.html):

The main user interface is defined in HTML.
Input fields are provided for the user to enter values for load constant, horizontal multiplier, vertical multiplier, distance multiplier, asymmetric multiplier, frequency multiplier, and coupling multiplier.
A button triggers the calculation using JavaScript.

JavaScript (script.js):

The JavaScript code handles user input, triggers an AJAX (Asynchronous JavaScript and XML) request to the backend, and updates the UI with the calculated result.
The calculateRWL function gathers input values and sends them to the backend via a fetch request.
The result is then displayed on the HTML page.

Spring Boot Backend (RWLController.java):

The backend is implemented using Spring Boot in Java.
It exposes a REST endpoint (/calculateRWL) that receives the input parameters and performs the NIOSH RWL calculation.
The calculated result is sent back to the frontend.

-----------------------------------------------------
Workflow:
The user enters values into the input fields on the web page.
When the "Calculate RWL" button is clicked, the JavaScript code collects these values and sends them to the backend using a fetch request.
The Spring Boot backend receives these values through the /calculateRWL endpoint.
The backend performs the NIOSH RWL calculation using the provided parameters.
The result is sent back to the frontend, and the UI is updated to display the calculated RWL.
Bootstrap Integration (if applicable):
If you're using Bootstrap, it's likely included in your project for enhanced styling and UI components. Ensure that Bootstrap is properly linked in your HTML file (index.html), and you can utilize Bootstrap classes to improve the visual appeal of your web page.




