Modern To-Do Application
Overview
This is a modern React Native to-do application designed for an assignment. It provides users with the ability to manage their tasks efficiently through a simple and intuitive interface. The application supports login functionality, and users can perform CRUD (Create, Read, Update, Delete) operations on their to-dos. The app utilizes Redux for state management to ensure a smooth and consistent user experience.

Features
User Authentication: Users can log in using a predefined password (login123).
CRUD Operations: Users can add, update, and delete to-dos.
State Management: All to-dos are stored and managed using Redux, ensuring data persistence and consistency.
Cross-Platform Support: The application can be run on Android devices.
Installation
To get started with the application, follow these steps:

Clone the Repository:

bash
Copy code
git clone https://github.com/sasinduSilva/MainRrameAssignment2.git
Navigate to the Project Directory:

bash
Copy code
cd MainRrameAssignment2
Install Dependencies:

Ensure you have Node.js installed. Then, install the required dependencies using npm or yarn:

bash
Copy code
npm install
# or
yarn install
Run the Metro Bundler:

Start the Metro Bundler, which will compile and serve your JavaScript code:

bash
Copy code
npx react-native start
Run the Application on an Android Device:

Open a new terminal window and run the following command to launch the application on an Android device or emulator:

bash
Copy code
npx react-native run-android
Make sure you have an Android emulator running or an Android device connected to your computer.

Usage
Login:

On the login screen, enter login123 as the password to gain access to the application.
Manage To-Dos:

Add To-Do: Click on the "Add" button to create a new to-do item. Enter the task details and save it.
Update To-Do: Select an existing to-do item to edit its details. Save changes to update the to-do.
Delete To-Do: Swipe or click on a to-do item to delete it.
Folder Structure
src: folder where all source code included.
src/assets : all assets files are included here.
src/components : all reusable ui components are stored here.
src/navigations : all navigators are stored here.
src/screens : all UI screens are stored here.
src/store : all redux stores and reducers are defined here.

Technologies Used
React Native: Framework for building native mobile apps using JavaScript and React.
Redux: State management library for managing application state.
React Navigation: Library for routing and navigation in React Native apps.
React Native Gesture Handler: Library for handling gestures in React Native.
Contributing
Contributions are welcome! Please fork the repository, make your changes, and submit a pull request. Ensure that your code follows the project's coding standards and includes tests where applicable.



Contact
For any questions or inquiries, please reach out to:

Your Name: sinharaavishka@gmail.com
GitHub: sasinduSilva
