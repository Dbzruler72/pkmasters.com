function toOn(object)
{
object.style.backgroundImage = object.style.backgroundImage.replace(/Off/, 'On');
}

function toOff(object)
{
object.style.backgroundImage = object.style.backgroundImage.replace(/On/, 'Off');
}

function localOnMouseOver(object) //used for local linksthat are not in the navigation
{
object.style.textDecoration = 'underline overline';
}

function localOnMouseOut(object) //used for local links that are not in the navigation
{
object.style.textDecoration = 'none';
}

function navigation(navigationItem) //goes to clicked navigation item
{
switch(navigationItem)
{
case 'join':
location.href = 'http://pkmasters.com/forum/viewtopic.php?f=4&t=303#p3332';
break;

case 'events':
location.href = navigationItem + '.shtml';
break;

case 'forum':
location.href = 'http://pkmasters.com/forum/';
break;

case 'links':
location.href = navigationItem + '.shtml';
break;

default:
location.href = 'index.shtml';
}
}



if (location.href.match(/events|newsArchive/))
{
document.getElementById('validatedXHTML1_1Son').style.display = 'none';
}