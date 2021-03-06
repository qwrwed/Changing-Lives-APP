# User Manual - Changing Lives App

## Features of the application

- **Login**. This will only be shown in online mode, and only if a server request fails and the user chooses to retry instead of enabling offline mode.

- **Home screen**. This is the main menu and entrypoint of the app. In online mode, the options on this screen will not be shown until the user is logged in. Has links to screens **Resources**, **Forum** and **Settings**.

- **Resources**. This is a list of sections corresponding to those on the management website/server. In online mode, the list of sections, and the section text for each one, will be updated every time this screen is accessed. Has links to screen **View section**.

- **View section**. This will show the most recent text information for the section accessed. In online mode, it will also show the list of resource links for that section. Clicking one of the links will open the resource in the phone's PDF viewer, which will usually have an option to save the file. Has link(s) to online PDF files.

- **Forum**. This is a list of posted topics, ordered from most recent to least recent. Each will have the topic title and the first line of the topic comment shown. Has links to screens **View Topic** and **Create Topic**.

- **View Topic**. Accessed by pressing any topic. The topic title, topic comment and any reply comments will be shown, and the user will have the option to submit a new comment. Replies will be formatted differently depending on the role of the person who made it: pink for staff, purple for non-staff topic creator, blue otherwise.

- **Create topic**. Accessed by pressing the button in the top right corner. The user may type a topic title and a topic comment, then press the button in the top right corner again to submit it.

- **Search topics**. A search bar at the top allows users to search the forums for certain topics. The search displays any posts with the searched term in the title.

- **Delete topics**. A topic can be deleted by holding down on the topic button. An option will then appear to allow the user to confirm whether they want to delete the topic or not. Users may only delete topics they themselves have created, whereas staff may delete any topic.

- **Delete comments**. Same functionality as the delete topics, holding down will give the users the option to delete.

- **Settings**. Contains buttons for the following options:

  - **Enable/disable offline mode**. Toggle button. Forums will be inaccessible, resource text information will not be updated, resource links will not be shown.

  - **Logout**. This button will clear the authentication token, prompting the user to log in next time they visit the home screen (in online mode).

<br/><br/><br/><br/><br/><br/><br/><br/><br/>
## Technical Information
### How to install the built .apk (Android)
1. Download the application to your mobile device.
2. Use a file manager on your mobile device to navigate to the download location.
3. Click the downloaded .apk (the logo and name will reference Changing Lives) to begin the installation process.
4. Complete the installation process as directed by your device.

### How to set up the development environment
On your mobile device: 

1. Download the Expo Android/iOS app at <https://expo.io/learn> to your test mobile device.

On your development machine:

2. Ensure the development machine is discoverable by other devices on the network (e.g. by setting the connection type to "Private" on Windows).
3. Download and install Node.js at <https://nodejs.org/en/download/>.
4. Globally install _expo-cli_ by running `npm install -g expo-cli`.
5. Clone this repository onto your system and navigate to it.
6. Run `npm install` to set up the node modules.
7. In the _.env_ file, replace the `http://0.0.0.0:3000` after `API_BASEROUTE` with the IP or web address that the server is program running on. Every time this is changed, the cache must be cleared before testing. This is enabled by default; to disable it, change `"start": "expo start -c"` to `"start": "expo start"` in _package.json_. Note that it must be re-enabled every time the address is changed.

At this point the app should be ready to test by running `npm start`. Run this command and follow the instructions in the terminal. If this crashes due to an error referencing an "invalid regular expression", run the attached Python script. If this fails to resolve the issue:

8. In all instances of `metro-config/src/defaults/blacklist.js` within `node_modules` (some may be nested), change the line:

    ```
      /node_modules[/\\]react[/\\]dist[/\\].*/,
    ```
    to:
    ```
      /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
    ```
    

### How to build the application
1. In the _.env_ file, replace the `http://0.0.0.0:3000` after `API_BASEROUTE` with the IP and port, or web address, that the server program is running on.
2. Follow Expo's instructions at <https://docs.expo.io/versions/latest/distribution/building-standalone-apps/>, but before running `expo build`, you must open another terminal window in this directory and run `npm start`. It may be necessary to clear the cache beforehand (see step 7 of _How to set up the development environment_).

