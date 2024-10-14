# Automated PDF Delivery for School A/L Applicants

This Node.js script automates the process of sending application PDFs to school A/L applicants. Each applicant receives their application in PDF format, which they need to print and bring to their interview. The script reads applicant data from a `data.json` file and makes API requests to send the PDFs for each application.

## Features

- Automatically processes a list of applicants from a JSON file.
- Sends each applicant's PDF to the provided API endpoint.
- Logs successful deliveries and reports errors.
- Stops on error to prevent issues with the remaining applications.

## How It Works

The script:
1. Loads applicant data from a JSON file (`data.json`).
2. For each applicant, it makes a request to the API (`/api/<indexNumber>/pdf`) to generate and send the PDF.
3. Logs success or error messages for each applicant.
4. If an error occurs, the script stops and logs the last successfully processed application.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `data.json` file in the project root. The file should contain an array of objects, each with an `olindexno` property (representing the applicant's index number). Example:

    ```json
    [
      {
        "olindexno": "12345"
      },
      {
        "olindexno": "67890"
      }
    ]
    ```

## Usage

1. Ensure the API endpoint (`BASE_API_ENDPOINT` in the script) is configured correctly.
2. Run the script:

    ```bash
    node your-script-name.js
    ```

3. The script will process each applicant's index number and attempt to send the PDF. Successful and failed deliveries will be logged in the console.

## API Endpoint

The script assumes your API is running locally at `http://localhost:3000/api`. It sends GET requests to the endpoint `/api/<indexNumber>/pdf` to retrieve and deliver each applicant's PDF.

## Error Handling

- If an error occurs while processing an applicant, the script logs the error and stops further processing.
- The last successfully processed index number will be logged to help troubleshoot issues.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
