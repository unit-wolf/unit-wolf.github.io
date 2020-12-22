
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
}

var myCookie = getCookie("language_choice")
if (myCookie == null) {
    $('[lang]').hide();
    $('[lang="en"]').show();
}
else
{
    if (myCookie == "es") {
        $('[lang]').hide();
        $('[lang="es"]').show();      
    }
    else
    {
        $('[lang]').hide();
        $('[lang="en"]').show();
    } 
}

$('#lang-switch').change(function () { // put onchange event when user select option from select
    var lang = $(this).val(); // decide which language to display using switch case. The rest is obvious (i think)
    var expiration_date = new Date();
    var lang_choice = '';
    expiration_date.setFullYear(expiration_date.getFullYear() + 1);
    switch (lang) {
        case 'en':
            lang_choice = "language_choice=en; expires=" + expiration_date.toUTCString(); + " path=/;"
            document.cookie = lang_choice;
            $('[lang]').hide();
            $('[lang="en"]').show();
            document.getElementById('lang-switch').selectedIndex=0;
        break;
        case 'es':
            lang_choice = "language_choice=es; expires=" + expiration_date.toUTCString(); + " path=/;"
            document.cookie = lang_choice;
            $('[lang]').hide();
            $('[lang="es"]').show();
            document.getElementById('lang-switch').selectedIndex=1;
        break;
        default:
           if (myCookie == 'es') {
               $('[lang]').hide();
               $('[lang="es"]').show();
               document.getElementById('lang-switch').selectedIndex=1;
           }
           else
           {
               $('[lang]').hide();
               $('[lang="en"]').show();
               document.getElementById('lang-switch').selectedIndex=0;
           }
        }
});