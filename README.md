# Google Clone

Google Clone is a web application built using Next.js and the Google API, designed to replicate the functionality and appearance of the Google search engine. This project serves as a demonstration of integrating Google API with a Next.js application.

## Features

- **Search:** Users can input queries and receive search results similar to Google's search engine.
- **Search Results:** Displays search results with titles, URLs, and snippets.
- **Pagination:** Supports pagination for navigating through multiple pages of search results.
- **Responsive Design:** The application is responsive and works seamlessly across different devices and screen sizes.

## Technologies Used

- **Next.js:** A React framework for building server-rendered and statically-generated web applications.
- **Google API:** Utilized Google's Search API to fetch search results.
- **React:** A JavaScript library for building user interfaces.
- **CSS:** Styled components or CSS modules for styling the components.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/google-clone.git
    ```

2. Navigate to the project directory:

    ```bash
    cd google-clone
    ```

3. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

4. Set up Google API Key:
   
   - Obtain a Google API key from the Google Developer Console.
   - Add the API key to the environment variables or configuration file (e.g., `.env.local`).
   
5. Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

6. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Configuration

To successfully run the application, you need to set up your Google API key. Follow these steps:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing project.
3. Enable the Google Custom Search JSON API for your project.
4. Generate an API key from the Credentials section.
5. Add the API key to your project's environment variables or configuration file.

Example `.env.local` file:

```plaintext
GOOGLE_API_KEY=your-api-key
```

## Deployment

To deploy the application, you can use platforms like Vercel, Netlify, or deploy it manually to your preferred hosting service.
