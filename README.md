<p align="center">
  <img src="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/makeithome.png?raw=true" style="width: 40%"/><br>
  <img src="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/icon.png?raw=true" style="width: 40%"/>
</p>

<p align="center" >
  <a href="https://apps.apple.com/it/app/makeithome-screen-extender/id6444596296?l=en-GB&mt=12"><img src="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/download_mac_appstore.png?raw=true"/></a>
</p>

## The UI extender for macOS

<img src="https://github.com/Geckos-Ink/MakeItHome/blob/main/md-assets/guide_0.gif?raw=true">

## Some messages for new and older users

- The application uses Screen Recording to work and to create the magic. Don't be scared, the recorded images are not saved on storage nor sent through internet.
- I continue to have some bug that prevents the correct working of multi space (or virtual desktops) window management on the same running app. When I solve a bug, another one due to a new code prevents this feature to work in the release on the App Store. Currently this feature works in the code built from this repo, but I need a way to test (or auto test) better some critical features before an official release.

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

## Notes
This project deserve a better documentation, most of all seen the fact that soon I should publish a new update, at least to improve the user experience and to complete the widgets zone. 

I try to make a to do list as memorandum:

- Find a way to improve the performances.
- Find a way to have the community advise about the development of the feature.
- Improve Notes and Tasks widgets. The most problem is about the saving way, that used to saves the entire database every time.
- Correct the calendar permission request. The user is able to edit it even if he refused the permission. The in-using crashes are problematic, mostly in case of "Show in Dock" disabled.
- Correct the freeze happening while using MS RDP, probably due to the clipboard manager(?)
- Find a solution for the lack of localization in the Widgets Zone (written in WebKit)
- Found an issue about screen recording when you change users 
- As said, the multi space management is a critical code. I continue to improve and correct it, but it's a mess. This due to the fact that you can have a notification only when the space *did* change, but not during. For doing this, you have to check if multiple place holders are present at the same time. But if a place holder is not already existing, this is not revealed. Happens also to create multiple SwifterPlaceholder on the same space. So I had to create an array to check if multiple placeholders (or spaceholders) belongs the same space.

## Development guide
- The top widgets zone web assets if located at MakeItHome/Resources/assets/, instead the Swift controller is located at MakeItHome/Views/Overscreen/WidgetZoneView.swift

### Credits
Riccardo Cecchini \<rcecchini.ds@gmail.com> cekkr@github
