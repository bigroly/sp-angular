# LOCAL TESTING SETUP #

##Prerequisites:##
- Node JS: https://nodejs.org/en/
- Angular CLI: https://cli.angular.io/ 
- VS Code is recommended IDE

1. open a cmd window and cd into this directory (external-requests-app)

2. run command: 'npm install' (installs all js dependencies)  
**note: step 2 is only a first time thing, you don't need to run this again moving forward**

3. run command: 'ng serve'

4. open up a second cmd window in this same space and run command: 'npm run serve'

5. follow in-cmd instructions to connect to the appropriate sp site (https://cityholdings.sharepoint.com/sites/SPApps/NgExReq)

6. you can then open the app in your browser by going to:http://localhost:4200


# DEPLOYING TO SHAREPOINT #

This is still a fairly manual process, but I'm hoping to figure out a way to improve/automate it at some stage.

1. make sure the 'spUrl' in your environment variables (/environments/environment.prod.ts) is set up to point to the site you're deploying to.

2. open cmd window in this directory (or use the terminal built into vs code)

3. run command: ng build --prod --output-hashing none

4. navigate to the /dist directory - notice some js and css files created.. magic!

5. upload these files into the Site Assets library. Create a new page with a script editor web part and reference those files. (use the index.html file generated in dist folder as reference for order, etc). 

6. save page and watch the magic happen! a SPA should be rendered in the content area.
