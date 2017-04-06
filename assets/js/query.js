var myCallback = function() {
    if (document.readyState == 'complete') {
        renderSearchElement();
        var x = document.getElementById("form1");
        var text = "";
        var i;
        for (i = 0; i < x.length ;i++) 
        {
         text += x.elements[i].value + " ";
        }
        var element = google.search.cse.element.getElement('gsearch');
        if (text == '') {
        element.clearAllResults();
        } 
        else {
        element.execute(text);
        }
        return;
    } else {
        google.setOnLoadCallback(renderSearchElement, true);
        return;
    }
};


var renderSearchElement = function() {
    google.search.cse.element.render({
    gname:'gsearch', 
    div:'results', 
    tag:'search', 
    attributes:{linkTarget:''}
  });
return;
};

window.__gcse = {
  parsetags: 'explicit',
  callback: myCallback
};

var loadElements = function() {
    var cx = '006715744843082256873:6na9rtes4g0';
    var gcse = document.createElement('script'); 
    gcse.type = 'text/javascript'; 
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//www.google.com/cse/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
    return;
}
