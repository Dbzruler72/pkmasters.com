//var preload = ['joinOn.gif', 'eventsOn.gif', 'forumOn.gif', 'linksOn.gif', 'homeOn.gif', 'masterJoinOn.gif', 'masterJoinToOff.gif', 'masterOfTheMonthOn.jpg', 'mainOn.jpg', 'faOn.jpg', 'historyOn.jpg', 'homeCurrentOff.gif', 'eventsCurrentOff.gif', 'linksCurrentOff.gif', 'homeCurrentOn.gif', 'eventsCurrentOn.gif', 'linksCurrentOn.gif', 'tipIt.gif', 'zybez.png', 'worldPlayOnline.png', 'opera.png', 'tsm8.png', 'http://images.freewebs.com/Images/Smilies/Round/biggrin.gif', 'http://images.freewebs.com/Images/Smilies/Round/exclamation.gif', 'http://images.freewebs.com/Images/Smilies/Round/tongue.gif', 'http://images.freewebs.com/Images/Smilies/Round/laugh.gif', 'http://images.freewebs.com/Images/Smilies/Round/cool.gif', 'http://images.freewebs.com/Images/Smilies/Round/dry.gif'];
var preload = ['joinOn.gif', 'eventsOn.gif', 'forumOn.gif', 'linksOn.gif', 'homeOn.gif', 'masterJoinOn.gif', 'masterJoinToOff.gif', 'masterOfTheMonthOn.jpg', 'mainOn.jpg', 'faOn.jpg', 'historyOn.jpg', 'homeCurrentOff.gif', 'eventsCurrentOff.gif', 'linksCurrentOff.gif', 'homeCurrentOn.gif', 'eventsCurrentOn.gif', 'linksCurrentOn.gif', 'tipIt.gif', 'zybez.png', 'worldPlayOnline.png', 'opera.png', 'tsm8.png'];

for (i = 0; i < preload.length; i++) {
	new Image().src = preload[i];
}



var tag = document.getElementsByTagName('*'); //global variable



function news(title, date, name, content) //homepage
{
document.write('<div style="margin-top: 20px;">'
+ '<span style="font-weight: bold; font-size: 15px; margin-left: 50px;">' + title + '</span>'
+ '<div style="margin-top: 20px; text-align: justify;">' + content + '</div>'
+ '<div style="margin-top: 15px; text-align: right;">Posted by ' + name + ' on ' + date + '</div>'
+ '<div style="height: 5px; background-image: url(separator.jpg); background-repeat: repeat-x; margin-top: 5px;"></div>' //separator
+ '</div>'); //top margin
}

/* Until I learn how to get events from the previous page or use some other method, event links will not be clickable as in the previous version =/
function event(id, date, title) //homepage
{
document.write('<div style="margin-top: 20px; text-align: center;">'
+ date + '<br />'
+ '<span style="font-weight: bold;"><a class="url" onclick="localOnClick(\'events\'); hideEventInformation(); ' + id + '.style.display = \'\'; document.getElementById(\'navigationEvents\').style.backgroundImage = document.getElementById(\'navigationEvents\').style.backgroundImage.replace(\/Off\/, \'CurrentOff\');" title="' + title + '">' + title + '</a></span>'
+ '<div style="margin-top: 3px; height: 5px; background-image: url(separator.jpg); background-repeat: no-repeat; background-position: center center;"></div>'
+ '</div>'); //top margin
}*/

/**
Lame version :(
*/
function event(id, date, title) //homepage
{
document.write('<div style="margin-top: 20px; text-align: center;">'
+ date + '<br />'
+ '<span style="font-weight: bold;" title="' + title + '">' + title + '</span>'
+ '<div style="margin-top: 3px; height: 5px; background-image: url(separator.jpg); background-repeat: no-repeat; background-position: center center;"></div>'
+ '</div>'); //top margin
}

function addEvent(id, name) //events page, list column
{
document.write('<div style="margin-bottom: 10px; text-align: left;" onclick="for (i = 0; i < tag.length; i++){if (tag[i].className == \'eventListEvent\'){tag[i].style.fontWeight = \'normal\';}}; this.style.fontWeight = \'bold\'; hideEventInformation(); ' + id + '.style.display = \'\';" onmouseOver="localOnMouseOver(this);" onmouseOut="localOnMouseOut(this);" class="eventListEvent">' + name + '</div>');
}

function hideEventInformation()
{
for (i = 0; i < tag.length; i++)
{
if (tag[i].className == 'eventInformation')
{
tag[i].style.display = 'none';
}
}
}

function hideEventList()
{
for (i = 0; i < tag.length; i++)
{
if (tag[i].className == 'eventList')
{
tag[i].style.display = 'none';
}
}
}

function addEventInformation(id, date, name, description, baseURL, imageTotal, video, clanInitial, pkmStart, pkmEnd, clanStart, clanEnd, victor)
{
document.write('<div style="display: none;" class="eventInformation" id="' + id + '">'
+ '<table style="width: 100%; font-weight: bold;" cellspacing="0" cellpadding="0">'
+ '<tr>'
+ '<td>'
+ name
+ '</td>'
+ '<td style="text-align: right;">'
+ date
+ '</td>'
+ '</tr>'
+ '</table>');

if (clanInitial != null)
{
for (i = 0; i < clanInitial.length; i++)
{
document.write('<div style="text-align: center;">'
+ '<table style="margin: auto; margin-top: 10px;" cellspacing="0" cellpadding="4">'
+ '<tr>'
+ '<td style="vertical-align: bottom; text-align: right;" rowspan="2">'
+ 'Start<br />'
+ 'End'
+ '</td>'
+ '<td style="width: 80px; text-align: center; border-right: solid 1px #727272;">'
+ '*-P.K.M-*'
+ '</td>'
+ '<td style="width: 80px; text-align: center;">'
+ clanInitial[i]
+ '</td>'
+ '</tr>'
+ '<tr>'
+ '<td style="border-right: solid 1px #727272; text-align: center;">'
+ pkmStart[i] + '<br />'
+ pkmEnd[i]
+ '</td>'
+ '<td style="text-align: center;">'
+ clanStart[i] + '<br />'
+ clanEnd[i]
+ '</td>'
+ '</tr>'
+ '<tr>'
+ '<td style="text-align: center;" colspan="3">'
+ 'Victor: ' + victor[i]
+ '</td>'
+ '</tr>'
+ '</table>'
+ '</div>'); //align score table to center
}
}

if (description != '')
{
document.write('<div style="margin: 10px 0px 15px 0px; text-indent: 25px; text-align: justify;">' + description + '</div>'); //description
}

if (video.length != 0)
{
document.write('<div style="margin-bottom: 0px;" class="eventSeparator"></div>' //separator
+ '<div style="text-align: justify;">');

for (i = 1; i <= video.length; i++)
{
document.write('<a href="' + video[i - 1] + '" style="margin-right: 15px;" title="Video ' + (i) + '" target="_blank">Video ' + (i) + '</a>');
}
document.write('</div>' //justify video links
+ '<div style="margin-bottom: 10px;"></div>');
}

if (baseURL != '' && imageTotal != 0)
{
document.write('<div style="width: 665px; height: 88px; overflow-x: scroll; overflow-y: hidden; white-space: nowrap; scrollbar-face-color: #202020; scrollbar-highlight-color: #000; scrollbar-shadow-color: #000; scrollbar-3dlight-color: #000; scrollbar-arrow-color: #000; scrollbar-track-color: #000; scrollbar-darkshadow-color: #000;">');

//displays images, which must be .png
for (i = 1; i <= imageTotal; i++)
{
if (i < 10)
{
document.write('<img style="width: 122px; height: 70px; border: solid 1px #000;" onmouseover="imageOnMouseOver(this);" onmouseout="imageOnMouseOut(this);" src="' + baseURL + '00' + i + '.png" alt="' + name + '" />');
}
else if (i < 100) //doesn't need "&& i >= 10" because it's caught by the first if statement
{
document.write('<img style="width: 122px; height: 70px; border: solid 1px #000;" onmouseover="imageOnMouseOver(this);" onmouseout="imageOnMouseOut(this);" src="' + baseURL + '0' + i + '.png" alt="' + name + '" />');
}
else //if (i < 1000)
{
document.write('<img style="width: 122px; height: 70px; border: solid 1px #000;" onmouseover="imageOnMouseOver(this);" onmouseout="imageOnMouseOut(this);" src="' + baseURL + i + '.png" alt="' + name + '" />');
}
}
document.write('</div>' //image box with scrollbar
+ '<div class="eventSeparator"></div>' //separator
+ '<div style="text-align: center;">Click the image below to view in normal resolution.</div>'
+ '<img style="width: 653px; border: solid 1px #000; cursor: pointer;" src="' + baseURL + '001.png" onclick="window.open(this.src, \'fullResolution\', \'location = no, menubar = no, scrollbars = no, status = no, titlebar = no, toolbar = no, resizable = yes, directories = no\');" alt="Click to view in normal resolution." name="eventImage" />');
}
document.write('</div>'); //eventInformation, initially hidden
}

function old(id, date, name, description, baseURL, imageTotal, video)
{
document.write('<div style="display: none;" class="eventInformation" id="' + id + '">'
+ '<table style="width: 100%; font-weight: bold;" cellspacing="0" cellpadding="0">'
+ '<tr>'
+ '<td>'
+ name
+ '</td>'
+ '<td style="text-align: right;">'
+ date
+ '</td>'
+ '</tr>'
+ '</table>');



if (description != '')
{
document.write('<div style="margin: 10px 0px 15px 0px; text-indent: 25px; text-align: justify;">' + description + '</div>'); //description
}

if (video.length != 0)
{
document.write('<div style="margin-bottom: 0px;" class="eventSeparator"></div>' //separator
+ '<div style="text-align: justify;">');

for (i = 1; i <= video.length; i++)
{
document.write('<a href="' + video[i] + '" style="margin-right: 15px;" title="Video ' + (i) + '" target="_blank">Video ' + (i) + '</a>');
}
document.write('</div>' //justify video links
+ '<div style="margin-bottom: 10px;"></div>');
}

if (baseURL != '' && imageTotal != 0)
{
document.write('<div style="width: 665px; height: 88px; overflow-x: scroll; overflow-y: hidden; white-space: nowrap; scrollbar-face-color: #202020; scrollbar-highlight-color: #000; scrollbar-shadow-color: #000; scrollbar-3dlight-color: #000; scrollbar-arrow-color: #000; scrollbar-track-color: #000; scrollbar-darkshadow-color: #000;">');

//displays images, which must be .png
for (i = 1; i <= imageTotal; i++)
{
document.write('<img style="width: 122px; height: 70px; border: solid 1px #000;" onmouseover="imageOnMouseOver(this);" onmouseout="imageOnMouseOut(this);" src="' + baseURL + i + '.png" alt="' + name + '" />');
}
document.write('</div>' //image box with scrollbar
+ '<div class="eventSeparator"></div>' //separator
+ '<div style="text-align: center;">Click the image below to view in normal resolution.</div>'
+ '<img style="width: 653px; border: solid 1px #000; cursor: pointer;" src="' + baseURL + '001.png" onclick="window.open(this.src, \'fullResolution\', \'location = no, menubar = no, scrollbars = no, status = no, titlebar = no, toolbar = no, resizable = yes, directories = no\');" alt="Click to view in normal resolution." name="eventImage" />');
}
document.write('</div>'); //eventInformation, initially hidden
}

function imageOnMouseOver(object)
{
object.style.opacity = 0.4;

var nameTag = document.getElementsByName('eventImage');

for (i = 0; i < nameTag.length; i++)
{
if (nameTag[i].name == 'eventImage')
{
nameTag[i].src = object.src;
}
}
}

function imageOnMouseOut(object)
{
object.style.opacity = 1.0;
}

function addNews(title, date, name, content) //news archive
{
document.write('<div style="margin-top: 20px;">');

if (title != '')
{
document.write('<table style="width: 100%;" cellspacing="0" cellpadding="0">'
+ '<tr>'
+ '<td style="font-weight: bold;">'
+ title
+ '</td>'
+ '<td style="text-align: right;">'
+ 'Posted by <span style="font-weight: bold;">' + name + '</span> on <span style="font-weight: bold;">' + date + '</span>'
+ '</td>'
+ '</tr>'
+ '</table>');
}
else //older news posts had no titles
{
document.write('Posted by <span style="font-weight: bold;">' + name + '</span> on <span style="font-weight: bold;">' + date + '</span>');
}
document.write('<div style="margin-top: 20px; text-align: justify;">' + content + '</div>'
+ '<div style="height: 5px; background-image: url(separator.jpg); background-repeat: no-repeat; background-position: left center; margin-top: 5px;"></div>' //separator
+ '</div>'); //top margin
}

function hideNews()
{
for (i = 0; i < tag.length; i++)
{
if (tag[i].className == 'news')
{
tag[i].style.display = 'none';
}
}
}