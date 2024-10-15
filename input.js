// Initialize window.entries to store the API calls
        window.entries = [];

        // Function to log API calls into window.entries
        function logApiCall(apiName) {
            const timestamp = new Date().getTime();
            window.entries.push([apiName, 1]);  // Store the API name and count 1 per call
        }

        // Make and log the API calls

        // 1. Using document.getElementById
        const header = document.getElementById('main-header');
        logApiCall('document.getElementById');

        // 2. Using document.getElementsByTagName
        const paragraphs = document.getElementsByTagName('p');
        logApiCall('document.getElementsByTagName');

        // 3. Using document.getElementsByClassName
        const classElements = document.getElementsByClassName('my-class');
        logApiCall('document.getElementsByClassName');