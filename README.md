# WebGL World using Three JS and PhoneGap

Illusion of 3 enviroments using WebGL (with Three JS) and PhoneGap.

![SS](screenshots/ss1.jpg)

## Getting Started

You'll need an Adobe account in order to build the application for mobile, however you can just run it in your web browser (Firefox and Chrome are recommended for this).

The application will be an illusion of an enviroment using an inverted skybox and an orbital camera, the libraries are already in the project js folder.

### Prerequisites

You'll need an Adobe account, and a way to run a server from tour machine as three.js run only in a server. Three JS already wrote an article about this here:

```
https://threejs.org/docs/#manual/en/introduction/How-to-run-things-locally
```

We are using skyboxes in a 6-texture format, so this website is perfect for adding more enviroments if you want to:

```
http://www.custommapmakers.org/skyboxes.php
```

![SS](screenshots/ss2.jpg)


### Installing

After the server is running, just go to the www folder in your localhost from your browser and the application will start runningthe index.html file.

```
http://localhost:8000/OpenWorld/www
```

It is recommended that you use Firefox or Chrome in order to run the application, but Edge should work fine too.

## Deployment

Compress the www folder into a ZIP file (www.zip).

Go to Adobe PhoneGap website (https://build.phonegap.com/) and log-in.

Open the Apps tab (PhoneGap will only allow one private application per free user, so use github if you have more than one private app).

Upload your zip.

Build for Android or iOS.

Install the apk or the ipa via xCode.


## Built With

* [Three JS](https://github.com/mrdoob/three.js/) - The WebGL library used
* [Orbit Controls](https://threejs.org/docs/#examples/en/controls/OrbitControls) - Camera movement
* [PhoneGap](https://build.phonegap.com/) - Used to compile the mobile apps.


## Authors

* **Ivan Pedrero** - *Initial work* - [IvanPedrero](https://github.com/IvanPedrero)


## Acknowledgments

Based on the 3D world tutorial by Red Stapler (https://www.youtube.com/watch?v=cp-H_6VODko).
