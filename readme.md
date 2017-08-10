# Motili Job Chat Bot
Nick Pleis, npleis@gmail.com, 303-519-4547

This is an implementation of the Motili Developer Challenge. As I've been looking for an excuse to dig into it, this is written in react-native using expo as the build environment. The implementation is fairly complete at this point missing only the "profile" section.

## Running

To run the app install the `expo` app on your phone. Then use the QR Code below to load it up and take a look.

![QR Code](https://github.com/nickpleis/nick-motili-developer/blob/master/assets/QRCode.png)

## General Thoughts

At this point I'm pretty happy with the overall design and functionality. There are still a few issues and 

* I'm using a `FlatList` to render the actual conversation. The scrolling behavior is..uhm..janky to say the least. I've given up on having the conversation positioned on the bottom as I can't figure out how to make the child window take on the full screen size without completely breaking the `AvoidingKeyboardView` functionality. I suspect that with some time digging into the code I might be able to make sense out of this.

* The chat avatars are EXTREMELY slow to load. They seem to load every time a new chat bubble is created. Sometimes they don't load at all.

* I was able to generalize the process of rendering the actual content into something that's pretty automatic. This makes adding new responses super fast. However, I think taking another look at the abstraction would be worthwhile. Right now the rendering process takes a "left side" renderer and a "right side" renderer which are used as the tree is navigated to render things. This works well for things in the style `label: <some string or icon>`. However what if I wanted to render things as hashtags instead? So when an item is: `myitem: true` maybe I want to render that not as two parts, but just one big `#myitem` or ~~`#myitem`~~ 

## To Do's

* Refactor the rendering system as noted above
* Figure out why FlatList is so janky. Maybe switch to a vanilla ScrollView? Or some third party list?
* Animations! Wouldn't it be cool if the responses didn't happen RIGHT away? Adding some kind of "thinking" animation and then nicely animating the responses in would be fun.
* Make it more conversational. Have funny responses when you ask for coffee or say hello. Personality would make this funner.
* Add a server: move the responses to a server and then write adapters for other chat clients (like Slack of FB Messenger). The whole thing could probably be done via AWS Lambda.