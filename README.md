# React Assignment Overview

Please carefully read the instructions below and complete.  

- You must create a simple React.js based app that displays data return from a JSON API.  
- Start by downloading or forking this repository
- Included is an empty React.JS application that was created using the npx create-react-app command.
- When you are done share your forked repo or send up a zipped up version of your app

## Notes
- You may use any libraries you want to complete the following requirements.  
- Unless specifically stated otherwise you may style this app and its components in any way you like
- Any details not specified in the requirements can be decided by you

## Requirements
- Make an API request to GET the data from the following endpoint: http://img.staging.medscape.com/pi/iphone/testassets/sampleData.json
- Display the title fields as a group of selectable list items
- On Desktop clicking on one of these list items will display the "data" object in a master detail view
- On mobile clicking on the title fields in the list item should redirect the user to a detail page (this page should have a means of navigating back)
- Not all items in the JSON result will have all fields, fields that are empty should be hidden in the details
- Items without a "title" should not be shown at all
- If there is an image associate with an item, display it at the top of the details
- Use css to create some basic styling, how it looks is entirely up to you

## Optional
- Include any tests you deem appropriate 
- Included any steps needed to start / build / deploy / run-tests etc. in this README file
