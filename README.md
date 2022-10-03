# Phoneer

React App and REST API to display phones' information.

### Main features:
1. REST API, implemented in NodeJS, provides phones' information correctly with GET endpoint "/phones". 
2. React App' homepage displays the list of phones obtained from REST API with images.
3. Placeholder component created and displayed while the REST API request is ongoing. 
4. When "info" icon is clicked, phone details display on Phone component. Initial view can be restored by clicking the "back" icon that appears in the same position "info" icon was before. 
5. Implemented some animations and effects to improve the look and feel of the app. 
6. Responsive app view, so the phones can be displayed correctly even in mobile-sized viewport. 
7. Dockerized both REST API and React App and orchestrated in Docker-Compose. 

### How to run?

- Download Docker (and WSL if working on Windows). 
- Download docker-compose file located in proyect's root. 
- Open terminal where file was downloaded and execute the following command:
```console
docker-compose up
```
- Wait until Docker pulls images and runs the app. 
- Open a browser and type in "localhost:3000".
- Enjoy!

### Images and examples of above main features. 

2. React App' homepage displays the list of phones obtained from REST API with images:

![image](https://user-images.githubusercontent.com/60218308/193592061-4603c61b-3d37-43df-87d4-c55cd93bfb30.png)


3. Placeholder component created and displayed while the REST API request is ongoing:

![Placeholders](https://user-images.githubusercontent.com/60218308/193593987-d8588127-2aa5-4306-85bb-c46043140548.gif)


4. When "info" icon is clicked, phone details display on Phone component. Initial view can be restored by clicking the "back" icon that appears in the same position "info" icon was before:

![Display](https://user-images.githubusercontent.com/60218308/193594748-83fba7f7-3d53-4f71-b791-90e02a008ce3.gif)


6. Responsive app view, so the phones can be displayed correctly even in mobile-sized viewport:

![Responsive](https://user-images.githubusercontent.com/60218308/193595886-63c4a3ab-e267-40db-a337-462842e2cb1e.gif)


