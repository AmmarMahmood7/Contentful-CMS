#### Pre requistes

Create a contentfull account and follow the steps to create new content type and entries

#### Space ID and Access Token for Contentful CMS

- Space-ID : 6tviu0ymh2va
- Access-token : r7QclnDTVUTqAGMGCVR0vNtq8QB8rMsxV1W35s89HGQ;

#### Steps to Integrate Contentful CMS with this app

- npm install contentful

##### Get Entries

import { createClient } from "contentful";

const client = createClient({
space: "6tviu0ymh2va",
environment: "master", // optional field default is 'master'
accessToken: import.meta.env.VITE_API_KEY,
});

//either use .then or async/await
client
.getEntries({ content_type: "projects" })//name of the content type you created in contentful
.then((response) => console.log(response.items))
.catch(console.error);

##### Create a Custom Hook

Encouraged to create a custom hook to separate out the logic to fetch data from Contentful into its own file so it can be reused throughout your application.

##### Parse Data and export to required file

After getting the entries store it in a state variable and return it from the custom hook
Render the content to on the UI as required
