# Backtrack: An open source project in progress

## About
Creating a playlist? Look up any track in Spotify's catalog for more info on how much danceability, energy, and moodiness to add to your mix. Backtrack is a remix of Spotify Developer Advocate Arielle Vaniderstine's Audio Features project on Glitch under the [MIT License](https://choosealicense.com/licenses/mit/) and an open source project collaboration between Ashley Kang ([@kangashley](https://github.com/kangashley)) and Jazmin Esqueda ([@jazesq](https://github.com/jazesq)) for "Software Development with Open Source Systems" (Fall 2018).

## Guiding questions
- Remember the days we listened to tracks on Windows Media Player? How might we make music listening more visual and more in tune with what we're doing and where we're at in our lives?
- How might we analyze data about sounds to make visible all the people and work behind making sounds?
- What kind of decisions are made with data? How do those decisions shape a Spotify user's experience?

## Features
- Server: Node.js 10.14.1 with Express 4.16.4, Spotify Web API via [Node.js wrapper](https://github.com/thelinmichael/spotify-web-api-node) 4.0.0 and [Client Credentials App Authorization Flow](https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow)
- Data: JSON from Spotify Web API [Get Several Tracks](https://developer.spotify.com/documentation/web-api/reference/tracks/get-several-tracks/) and [Get Audio Features for a Track](https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-features/) endpoints
- Client: HTML, CSS, JavaScript with jQuery 3.3.1, Google Fonts
- Visualization: Chart.js 2.7.3 and p5.js * libraries
> **Danceability** describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 
1.0 is most danceable. **Energy** is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset 
rate, and general entropy. **Valence** is a measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).

## Contributor's guide
We welcome constructive feedback and contributions in the form of design, code, documentation, accessibility practices, etc. Please open an issue to submit a pull request or remix the project in Glitch and share your work with us!

### Getting started
- New to open source? Start at [First Timers Only](https://www.firsttimersonly.com/), check out [Mozilla Pulse](https://www.mozillapulse.org/featured) to learn about projects for an open and healthy internet, and consider participating in GitHub's [24 Pull Requests](https://24pullrequests.com/)! 🎁 More soon on our thoughts about open source.
- Explore the [Spotify Web API Reference](https://developer.spotify.com/documentation/web-api/reference/).
- Study the audio feature values of tracks from 4 umbrella genres (ambient/electronic, hip hop, pop, jazz/R&B/soul). Here's a [playlist](https://open.spotify.com/playlist/5Cox7Zd2wTFFIOO1KOwpAW) of the songs we studied.
- Follow the [code (and comments!) in Glitch](https://glitch.com/~backtrack).

### How to contribute
- #TODO
  - Seamlessly access and manipulate API data in p5 client
  - Test for accessibility
  - Debug lag in displaying track results from search
- Some nice-to-have features we've discussed:
  - After searching a track, add it to a playlist in your library
  - Display [Song Credits](https://www.theverge.com/2018/8/14/17689230/spotify-songwriter-producer-credits-display) info front and center (once Spotify releases an API endpoint for that)
  - Explore other ways of visualizing and animating the audio features data

## Check-ins
_December 6_
  - Ashley: Refactored server.js using async/await to see in the console (browser debugger) how Backtrack is interacting with the API. This involved upgrading Node.js from version 6.10.x to 10.14.1. `server.js` now returns just the 3 audio features we're interested in: danceability, energy, and valence.
  - Jazmin: Added label to each audio feature panel. Working on translating the audio feature values (0.0-1.0) to animation speed, etc. Refining animation for each audio feature. Friends wish they had something like this while making a playlist for their wedding and activities with youth!
  - #TODO: Connect data from `server.js` to `client.js`. Prepare .zip of source code. Export project from Glitch to GitHub (there's a button for this!). Add contributor guide to documentation.

_December 1_
  - Ashley: Considering a design in which you can search for a track on a left panel, then see a stack of audio feature visualizations on the right. Exploring meaningful visuals (ex: 💃🏽🕺🏽 emoji, [humaaans](https://www.humaaans.com/) in .png), animation patterns (ex: waves), and color schemes for each audio feature. Refactoring server.js using async/await so we can actually see the API data (in JSON) in the console when looking up and selecting a track!
 -Jazmin: Began trying to deifine how the values given by the Spotify API would translate to annimations. Decided to multuply values by 10 to get an accurate speed. Talked about color schemes and began talking about different animations to accuretly represent values from API in a visual setting. 

_November 15_
  - Ashley: Working over at [Backtrack on Glitch](https://backtrack.glitch.me/). Thinking about how the movement of a visual form can be determined by a range based on an audio feature value. Bringing in [p5.js script](https://p5js.org/download/). Exploring [song credits info](https://www.discogs.com/help/creditslist) thanks to [Discogs API](https://www.discogs.com/developers/#page:database,header:database-artist) and fetching multiple APIs using async and await in JavaScript.
  -Jazmin: Finished working on bouncing ball animation with P5js. Worked with one main panel. Tried to make random directions but was unsuccessful. 
TODO: Add diffrerent panels above main panels to allow seperation of info from Spotify API. 
  
_November 8_
  - Ashley: Studying audio features "danceability", "energy", and "valence" from Spotify Web API's [Get Audio Features for a Track](https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-features/). Navigating authorization stuff in Spotify. Looking into "remixing" a project in Glitch that sets up Spotify API requests with NodeJS.
  - Jazmin: Figuring out the direction and speed of a bouncing ball animation in p5.js. A similar exploration was done in Java, but p5.js takes care of things that were previously written from scratch (like the canvas size) and is a web-friendly open source library based on Processing, which is based on Java!

## Research
- Building a tool
  - 🔍 [Coördinator](https://spotify.github.io/coordinator/), ["Introducing Coördinator"](https://labs.spotify.com/2018/03/02/introducing-coordinator-a-new-open-source-project-made-at-spotify-to-inject-some-whimsy-into-data-visualizations/) (Aliza Aufrichtig)
  - [Artist Explorer](https://github.com/fsahin/artist-explorer) (Faruk Emre Sahin)
  - [Creatability](https://experiments.withgoogle.com/collection/creatability)
  - 🔍 [Spotify Audio Features](https://audio-features.glitch.me/) (Arielle Vaniderstine)
- Visualizing sound data
  - 🔍 [10x18](http://10x18.co/) (Eric R. Mortensen, Richard Perez, Jen DeRosa)
  - 🔍 [Algorithmic Music Composition](https://junshern.github.io/algorithmic-music-tutorial/) (Chan Jun Shern)
  - [Party Mode](https://preziotte.com/partymode/) (Mathew Preziotte)
  - 🔍 [Music ideas on Glitch](https://glitch.com/music)
  - [fftvisualize](https://glitch.com/~fftvisualize) (Hector Urtubia)
- Technology stack
  - [ES7 Async/Await](http://rossboucher.com/await/) (Ross Boucher)
  - 🔍 [Using Async Await in Express with Node 9](https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016)
  - [You Don't Know JS: Async & Performance](https://github.com/getify/You-Dont-Know-JS/tree/master/async%20%26%20performance)
  - 🔍 [Async/Await Will Make Your Code Simpler](https://blog.patricktriest.com/what-is-async-await-why-should-you-care/)
  - [Essential Electron](http://jlord.us/essential-electron/) (Jessica Lord)
  - 🔍 [p5.js Reference](https://p5js.org/reference/)
  - [p5.jsound Library](https://p5js.org/reference/#/libraries/p5.sound)
  - 🔍 [Spotify Web API Reference](https://developer.spotify.com/documentation/web-api/reference/)
  - 🔍 [Spotify for Developers](https://developer.spotify.com/discover/)
  - 🔍 [Arielle Vaniderstine (@a) on Glitch](https://glitch.com/@a)
  - 🔍 [Introduction to Data and APIs in JavaScript - p5.js Tutorial](https://www.youtube.com/watch?v=rJaXOFfwGVw) (Daniel Shiffman)
- Documentation
  - [Final Project Proposal Template](https://github.com/Open-Source-Studio-at-ITP/Final-Projects/blob/source/proposal-template.md) ("Open Source Studio" at NYU ITP)
  - [Contribute your story to Episode 1: How the Internet Saved My Life](https://intersectto.gitbook.io/community/our-digital-selves/episode-1-how-the-internet-saved-my-life) (IntersectTO)
- Open source license
  - [Spotify Developer Terms of Service](https://developer.spotify.com/terms/)
- On the shelf
  - [Processing tutorial / Sound](https://processing.org/tutorials/sound/) (R. Luke DuBois, Wilm Thoben)
  - [ofBook / Image Processing and Computer Vision](https://openframeworks.cc/ofBook/chapters/image_processing_computer_vision.html) (Golan Levin, ed. Brannon Dorsey)
  - [How to Think Like a Computer Scientist / 8.10. 2-Dimensional Iteration: Image Processing](http://interactivepython.org/courselib/static/thinkcspy/MoreAboutIteration/2DimensionalIterationImageProcessing.html) (Brad Miller, David Ranum)
  - [Visualizing Music with p5.js](https://therewasaguy.github.io/p5-music-viz/) (Jason Sigal)
  - [Sound as Data Workshop](https://github.com/mariuswatz/ITP2013Parametric/tree/master/ITP-workshops/20131111-ITP-Sound-As-Data) (Marius Watz)
  - [Web Audio School](http://mmckegg.github.io/web-audio-school/) (Matt McKegg)
  - [Spotify Web API Java](https://github.com/thelinmichael/spotify-web-api-java) (Michael Thelin)
  - ["Communicating Between Java Applets and Javascript"](http://dillonbuchanan.com/programming/communicating-between-java-applets-and-javascript/) (Dillon Buchanan)
  - [SoundCloud HTTP API Guide](https://developers.soundcloud.com/docs/api/guide)
  
## Project requirements

- [x] Are we using a Linux-based system, a command-line interface, and Computer-Assisted Software Engineering (CASE) tools (ex: version control systems, documentation tools, issue trackers) to manage this project and develop software?
  - Operating system:
    - Ashley: MacBook Pro (Mid 2012, 64-bit), Ubuntu 18.04.1 LTS, macOS High Sierra
    - Jazmin: MacBook Air (Early 2015, 64-bit), Linux Mint 19 "Tara", macOS Mojave
  - Version control: git with GitHub, Glitch Rewind
  - Project management: [GitHub Kanban project board](https://github.com/kangashley/254-project/projects/1)
- [x] Are we communicating effectively?
  - Weekly check-ins and temperature checks on how we feel about our tasks and workloads have been helpful.
- [x] Are we contributing to a code base to (a) solve a problem we've identified, (b) facilitate the performance of a difficult task, _or_ (c) provide functionalities that are missing in other applications?
  - Our project's features explore questions we've had from the start, including: How might we improve our music listening experiences? How might we interact with data as music listeners and developers?
- [x] Are we designing code that can adapt to changes in code dependencies?
  - Refactoring `server.js` involved updating the Node.js version in order to use new JavaScript features (async/await, destructuring). After an alert about a low severity vulnerability due to a DDoS on a dependency, Spotify Web API Node was updated from 2.3.6 to 4.0.0 and Express 4.15.2 to 4.16.4. On the client side, jQuery was updated from 2.2.1 to 3.3.1. Using Glitch as our development playground enabled us to simply update `package.json` (instead of manually running commands with a package manager) and see the fruits of those updates instantly.
- [x] Are we documenting code that the open source community can easily understand and use?
  - Making code more readable and data less invisible regardless of expertise have motivated our efforts to refactor code like JavaScript "callback hell", include comments with links to references, and utilize debugging tools like `console.log()`. We've also included in this README a work-in-progress contributor's guide to making contributions in code and other forms.
- [x] Are we using an appropriate [open source license](https://choosealicense.com/licenses/) based on the libraries we've used and how we want our project to be used?
  - Backtrack is a remix of a project under the [MIT License](https://choosealicense.com/licenses/mit/) and respects the preservation of the original copyright and license notices.
