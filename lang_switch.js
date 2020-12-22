
if (langChoice == null) {
    $('[lang]').hide();
    $('[lang="en"]').show();
    document.getElementById('lang-switch').selectedIndex=0;
    document.title = en_title
}
else
{
    if (langChoice == "es") {
        $('[lang]').hide();
        $('[lang="es"]').show();
        document.getElementById('lang-switch').selectedIndex=1;
        document.title = es_title
    }
    else
    {
        $('[lang]').hide();
        $('[lang="en"]').show();
        document.getElementById('lang-switch').selectedIndex=0;
        document.title = en_title
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
            document.title = en_title
        break;
        case 'es':
            lang_choice = "language_choice=es; expires=" + expiration_date.toUTCString(); + " path=/;"
            document.cookie = lang_choice;
            $('[lang]').hide();
            $('[lang="es"]').show();
            document.getElementById('lang-switch').selectedIndex=1;
            document.title = es_title
        break;
        default:
           if (langChoice == 'es') {
               $('[lang]').hide();
               $('[lang="es"]').show();
               document.getElementById('lang-switch').selectedIndex=1;
               document.title = es_title
           }
           else
           {
               $('[lang]').hide();
               $('[lang="en"]').show();
               document.getElementById('lang-switch').selectedIndex=0;
               document.title = en_title
           }
        }
});