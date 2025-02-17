<p align="center">
  <img src="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/makeithome.png?raw=true" style="width: 40%"/><br>
  <img src="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/icon.png?raw=true" style="width: 40%"/>
</p>

<p align="center" >
  <a href="https://apps.apple.com/it/app/makeithome-screen-extender/id6444596296?l=en-GB&mt=12"><img src="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/download_mac_appstore.png?raw=true"/></a>
</p>

## The UI extender for macOS

<img src="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_0.gif?raw=true">

Current release version: 1.9.6

## Some messages for new and older users

- The application uses Screen Recording to work and to create the magic. Don't be scared, the recorded images are not saved on storage nor sent through internet.
- Don't be scared neither by the "Security" issues presented by GitHub: are all related to the Angular project used for the Notes and Tasks in the Widgets Zone, and are incosistent issues in the practice. Anyway, it's important to check sometimes issues related to the Swift code.

## How to
<center>
  <table>
  	<tr>
  		<td><b>How to lock an app</b></td>
  		<td><b>The Widgets Zone</b></td>
  	</tr>
  	<tr>
  		<td><a href="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_1.gif"><img stype="width: 25%" src="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_mini_1.gif?raw=true"></a></td>
  		<td><a href="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_2.gif"><img stype="width: 25%" src="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_mini_2.gif?raw=true"></a></td>
  	</tr>
  	<tr>
  		<td><b>Fast web search</b></td>
  		<td><b>Notes and Tasks</b></td>
  	</tr>
  	<tr>
  		<td><a href="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_3.gif"><img stype="width: 25%" src="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_mini_3.gif?raw=true"></a></td>
  		<td><a href="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_4.gif"><img stype="width: 25%" src="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_mini_4.gif?raw=true"></a></td>
  	</tr>
  	<tr>
  		<td><b>The Calendar</b></td>
  		<td><b>My Widgets</b></td>
  	</tr>
  	<tr>
  		<td><a href="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_5.gif"><img stype="width: 25%" src="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_mini_5.gif?raw=true"></a></td>
  		<td><a href="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_6.gif"><img stype="width: 25%" src="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_mini_6.gif?raw=true"></a></td>
  	</tr>
  <table>
</center>

## MakeItHome 2.0
The current versions 1.9.x aims to the completion of "MakeItHome 2.0" objectives.

These objectives are:
- Widgets Zone in the top bar (completed)
- Widgets from external apps (todo)
- App Extension: an application can extend its icon in the windows switching area. The work is in progress: when an application has the extension area, an aurora borealis is generated at the base of its preview. Then, if the user "break" more the screen boundaries on the aurora's side, he will access a doubled overscreen with a WebView where the application can render what he wants. My first intention about using this feature is to create a browser extension and create a rapid tab switching with web page preview. But an application is free to set what it wants: for example a music player app can display the songs queue and permit the rapid change of song. Respect than the Widgets Zone, the App Extension has no design structure, so all focus is about the APIs and the communication protocol between MakeItHome and the app. I aim to implement the App Extension "theoretically" with an update only with a demo app and documentation and then create the browsers extensions... well, when I'll have time. 

<img src="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/makeithome-web-preview.gif?raw=true">
<i>A preview of App Extension area with MakeItHome Web for Safari.</i>

The App Extension is implemented in current release of MakeItHome. As soon as possible I'll write a tutorial about it.
Here's already available an App Extension demo: <a href="https://github.com/Geckos-Ink/MakeItHome-AppExtension-Demo">https://github.com/Geckos-Ink/MakeItHome-AppExtension-Demo</a>. 

<hr>
In conclusion, all 1.9.x versions are, yes, essential bug fixing but also mainly features introduction. I aim to new features' stability on version 2.0.x

## Notes
This project deserves a better documentation, most of all seen the fact that soon I should publish a new update, at least to improve the user experience and to complete the widgets zone. 

I try to make a to do list as memorandum:

- Find a way to improve the performances. (nearly found, I'm improving multi threading design)
- Find a way to have the community advise about the development of the feature. (is it GitHub discussion page enough accessible?)
- Improve Notes and Tasks widgets. The most problem is about the saving way, that used to saves the entire database every time.
- Correct the freeze happening while using MS RDP, probably due to the clipboard manager(?)
- Find a solution for the lack of localization in the Widgets Zone (written in WebKit)
- Found an issue about screen recording when you change users.
- Find a solution about the local http server in multi user session. The solution to implement would be stop and restart the server when the screen is locked. <b>!!!PRIORITY!!!</b>
- The aboveBy management in Display class is full of unused variables. Clear it.
- <b>VERY IMPORTANT: solve this holy threads "overflow" issue (only a debug problem?)</b>

## Development guide
- The top widgets zone web assets if located at MakeItHome/Resources/assets/, instead the Swift controller is located at MakeItHome/Views/Overscreen/WidgetZoneView.swift

Currently I'm working on version **1.9.7** on the homonymous branch.

<b>I have a huge problem about testing before its release. If I create a new feature, this mathematically brings a new bug that I don't notice. I'm looking for tester to make more stable the releases.</b>

SonarCloud link: <a>https://sonarcloud.io/project/overview?id=Geckos-Ink_MakeItHome</a>

### Credits
Riccardo Cecchini \<rcecchini.ds@gmail.com> cekkr@github
