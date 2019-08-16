****************** LOCAL TESTING SETUP ******************

Prerequisites:
> Node JS: https://nodejs.org/en/
> Angular CLI: https://cli.angular.io/ 
> VS Code is recommended IDE

1. open a cmd window and cd into this directory (external-requests-app)

2. run command: 'npm install' (installs all js dependencies)  **note: this is only a first time thing, you don't need to run this again moving forward**

3. run command: 'ng serve'

4. open up a second cmd window in this same space and run command: 'npm run serve'

5. follow in-cmd instructions to connect to the appropriate sp site (https://cityholdings.sharepoint.com/sites/SPApps/NgExReq)

5. the app will be served to localhost:http://localhost:4200


****************** DEPLOYING TO SHAREPOINT ******************

This is still a fairly manual process, but I'm hoping to figure out a way to improve/automate it at some stage.

1. open cmd window in this directory (or use the terminal built into vs code)

2. run command: ng build --prod --output-hashing none

3. navigate to the /dist directory - notice some js and css files.

4. upload these files into the Site Assets library: https://cityholdings.sharepoint.com/sites/SPApps/NgExReq/SiteAssets/ 

//todo: figure out how to use hashing correctly so the application will update straight away after uploading new content.;