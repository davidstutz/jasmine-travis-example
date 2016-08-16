# Jasmine and Travis Example

This repository contains a minimal working example for continuous integration using Jasmine, GitHub and Travis CI. The following guide will briefly explain how to reproduce this example. While the guide is based on Windows as operating system, the steps can easily be applied in Linux or Mac OS X.

References:

* [Setting up automated testing for a small client-side Javascript project](http://www.bryanbraun.com/2015/05/17/setting-up-automated-testing-for-a-small-client-side-javascript-project)
* [Karma Configuration](http://karma-runner.github.io/0.12/intro/configuration.html)* [How to install PhantomJS on Windows](https://www.joecolantonio.com/2014/10/14/how-to-install-phantomjs/)
* [How to install Node.js and NPM on Windows](http://blog.teamtreehouse.com/install-node-js-npm-windows)
* [Jasmine Documentation](http://jasmine.github.io/2.4/introduction.html)

## Installing PhantomJS

For installing PhantomJS on Windows:

* Download PhantomJS from [here](http://phantomjs.org/download.html) (e.g. `phantomjs-x.x.x-windows.zip`).
* Create a folder to hold the binary, e.g. `C:\PhantomJs`.
* Extract the contents into the created folder.
* Add `C:\PhantomJs\bin\` to the path environment variable (through System Settings > System > Advanced System Settings).

The directory structure should look as follows:

    C:\PhantomJs\
    |- bin\
       |- phantomjs.exe
    |- examples\
    |- README.md
    |- ...

Try running `phantomjs.exe` through the console (i.e. Ctrl + R and enter `cmd`):

    C:\Users\David>phantomjs --version
    2.1.1

## Installing NodeJS

For installing NodsJS and NPM: Download the install from [here](https://nodejs.org/en/) and follow the instructions.

Run

    C:\Users\David>node -v
    v4.5.0
    C:\Users\David>npm -v
    2.15.9

to see whether the installation was successful.

## Installing Karma

Open `cmd` and navigate to the directory:

    C:\Windows\system32>npm install --save-dev karma karma-cli karma-jasmine karma-p
    hantomjs-launcher
    npm WARN peerDependencies The peer dependency jasmine-core@* included from karma
    -jasmine will no
    npm WARN peerDependencies longer be automatically installed to fulfill the peerD
    ependency
    npm WARN peerDependencies in npm 3+. Your application will need to depend on it
    explicitly.
    npm WARN optional dep failed, continuing fsevents@1.0.14
    |
    > phantomjs-prebuilt@2.1.12 install C:\Windows\system32\node_modules\karma-phant
    omjs-launcher\node_modules\phantomjs-prebuilt
    > node install.js

    Considering PhantomJS found at C:\PhantomJs\bin\phantomjs.EXE
    Found PhantomJS at C:\PhantomJs\bin\phantomjs.EXE ...verifying
    Writing location.js file
    PhantomJS is already installed on PATH at C:\PhantomJs\bin\phantomjs.EXE
    jasmine-core@2.4.1 node_modules\jasmine-core

    karma-jasmine@1.0.2 node_modules\karma-jasmine

    karma-cli@1.0.1 node_modules\karma-cli
    └── resolve@1.1.7

    karma-phantomjs-launcher@1.0.1 node_modules\karma-phantomjs-launcher
    ├── phantomjs-prebuilt@2.1.12 (progress@1.1.8, kew@0.7.0, es6-promise@3.2.1, whi
    ch@1.2.10, request-progress@2.0.1, hasha@2.2.0, extract-zip@1.5.0, fs-extra@0.30
    .0, request@2.74.0)
    └── lodash@4.15.0

    karma@1.2.0 node_modules\karma
    ├── isbinaryfile@3.0.1
    ├── di@0.0.1
    ├── graceful-fs@4.1.5
    ├── rimraf@2.5.4
    ├── qjobs@1.1.4
    ├── mime@1.3.4
    ├── colors@1.1.2
    ├── source-map@0.5.6
    ├── http-proxy@1.14.0 (eventemitter3@1.2.0, requires-port@1.0.0)
    ├── dom-serialize@2.2.1 (extend@3.0.0, custom-event@1.0.0, void-elements@2.0.1,
    ent@2.2.0)
    ├── tmp@0.0.28 (os-tmpdir@1.0.1)
    ├── minimatch@3.0.3 (brace-expansion@1.1.6)
    ├── useragent@2.1.9 (lru-cache@2.2.4)
    ├── glob@7.0.5 (path-is-absolute@1.0.0, inherits@2.0.1, fs.realpath@1.0.0, once@
    1.3.3, inflight@1.0.5)
    ├── bluebird@3.4.1
    ├── connect@3.4.1 (utils-merge@1.0.0, parseurl@1.3.1, debug@2.2.0, finalhandler@
    0.4.1)
    ├── optimist@0.6.1 (wordwrap@0.0.3, minimist@0.0.10)
    ├── body-parser@1.15.2 (content-type@1.0.2, bytes@2.4.0, depd@1.1.0, qs@6.2.0, r
    aw-body@2.1.7, on-finished@2.3.0, debug@2.2.0, http-errors@1.5.0, iconv-lite@0.4
    .13, type-is@1.6.13)
    ├── expand-braces@0.1.2 (array-unique@0.2.1, array-slice@0.2.3, braces@0.1.5)
    ├── socket.io@1.4.7 (debug@2.2.0, has-binary@0.1.7, socket.io-parser@2.2.6, sock
    et.io-adapter@0.4.0, engine.io@1.6.10, socket.io-client@1.4.6)
    ├── log4js@0.6.38 (semver@4.3.6, readable-stream@1.0.34)
    ├── chokidar@1.6.0 (path-is-absolute@1.0.0, inherits@2.0.1, glob-parent@2.0.0, a
    sync-each@1.0.0, is-glob@2.0.1, is-binary-path@1.0.1, readdirp@2.1.0, anymatch@1
    .3.0)
    ├── lodash@3.10.1
    ├── combine-lists@1.0.0 (lodash@4.15.0)
    └── core-js@2.4.1

Make sure that afterwards Karma is installed, i.e.

    C:\Users\David\Desktop\jasmine-travis-example>karma
    Command not specified.
    Karma - Spectacular Test Runner for JavaScript.

    Usage:
    C:\Program Files\nodejs\node.exe C:\Users\David\AppData\Roaming\npm\node_modul
    es\karma-cli\bin\karma <command>

    Commands:
    start [<configFile>] [<options>] Start the server / do single run.
    init [<configFile>] Initialize a config file.
    run [<options>] [ -- <clientArgs>] Trigger a test run.
    completion Shell completion for karma.

    Run --help with particular command to see its description and available options.


    Options:
    --help     Print usage and options.
    --version  Print current version.

Create a test directory to contain the tests, i.e. `tests/` and change to this directory to run:

    C:\Users\David\Desktop\jasmine-travis-example\tests>karma init

Follow the instructions to create `tests/karma.conf.js`. In the instructions, point to `*.js` when asked for the location of the test files.

## Writing and Running Tests

The following dummy test is saved to `tests/tests.js`:

    describe("A suite", function() {
      it("contains spec with an expectation", function() {
        expect(true).toBe(true);
      });
    });

And the corresponding spec runner in `tests/SpecRunner.html`:

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <title>Document</title>

    <link rel="shortcut icon" type="image/png" href="../node_modules/jasmine-core/lib/jasmine-core/jasmine_favicon.png">
    <link rel="stylesheet" href="../node_modules/jasmine-core/lib/jasmine-core/jasmine.css">

    <script src="../node_modules/jasmine-core/lib/jasmine-core/jasmine.js"></script>
    <script src="../node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js"></script>
    <script src="../node_modules/jasmine-core/lib/jasmine-core/boot.js"></script>

    <!-- include the library you want to test here... -->
    <script src="../anchor.js"></script>

    <!-- include your test files here... -->
    <script src="tests.js"></script>
    </head>
    <body>
    </body>
    </html>

Finally, create the `package.json` file and put it to the repository's root:

    {
      "name": "jasmine-travis-example",
      "description": "Continuous Integration with Jasmine, GitHub and Travis CI.",
      "version": "1.0.0",
      "scripts": {
        "test": "karma start tests/karma.conf.js --single-run"
      },
      "devDependencies": {
        "jasmine-core": "*",
        "karma": "*",
        "karma-cli": "*",
        "karma-jasmine": "*",
        "karma-phantomjs-launcher": "*"
      }
    }

To test whether the setup works, open `cmd`, navigate to the root of the repository and run `npm test`. Several browser windows should open depending on the Karma configuration. **Note that the briwsers need to be installed**.

## Using Travis CI

Go to [Travis CI](https://travis-ci.org/) and sign in with the GitHub account. Select the repository to test.

Create `.travis.yml` in the root of the repository:

    language: node_js
    node_js:
    - "node"
    branches:
    only:
    - master

## License

Most of the parts are taken from the above references, but for what it's worth:

Copyright (c) 2016 David Stutz All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
* Neither the name of David Stutz nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
