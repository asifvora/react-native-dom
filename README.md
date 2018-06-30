# React-native-dom

An experimental, comprehensive port of React Native to the web.

* **Multithreaded by default:** Following the exact same architecture as React
  Native on mobile, all of your react components/app logic are run in web
  worker, leaving the main thread to entirely focus on rendering.
* **Same layout behavior as React Native on mobile:** Powered by custom bindings
  to Yoga and compiled to Web Assembly, avoid layout inconsistencies between
  your native and web projects.
* **Built with the same bundler used for existing React Native platforms:**
  Build both the "native" main and JS threads with the Metro Bundler along with
  all the developer experience features it provides.
* **Ecosystem compatible escape hatch to the DOM:** Using the same native module
  bridge, expose DOM-specific APIs in a more generic way that can easily be made
  into a cross-platform module.

## Getting Started

For help getting started with React-native, view online
[documentation](https://facebook.github.io/react-native/).

#### 1. [Setup React-native](https://facebook.github.io/react-native/docs/getting-started.html)

#### 2. Clone the repository

```sh
$ https://github.com/asifvora/react-native-dom-example.git
$ cd react-native-dom-example.git/
```

#### 3. Install dependency

```sh
$ npm install
```

#### 4. Run the app

```sh
$ react-native start
$ http://localhost:8081/dom/
```

## View Demo

[Demo](https://lazy-loading-react-js.netlify.com/)

## Questions?🤔 
  

Hit me on [![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/007_dark_shadow)
[![Medium](https://img.shields.io/badge/Medium-asifvora-brightgreen.svg)](https://medium.com/@asifvora)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-asifvora-blue.svg)](https://www.linkedin.com/in/asif-vora/) 
[![Instagram](https://img.shields.io/badge/Instagram-Asif%20Vora-green.svg)](https://www.instagram.com/007_dark_shadow/) 


## License

Copyright (c) Asif Vora

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
