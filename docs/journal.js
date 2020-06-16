window.onload = function() {
  var r = new XMLHttpRequest();
  r.onreadystatechange = function() {
      if (r.readyState == 4 && r.status == 200)
          renderJournal(JSON.parse(r.responseText));
  }
  r.open("GET", "https://kikeelectronico.github.io/R2-D2/content/journal.json", true);
  r.send(null);
}

function renderJournal(journal){
  console.log(journal);
  journal_content = "";
  journal.forEach((rengister, i) => {
    journal_content += '<div class="card">\
                          <div class="card-body">\
                            Fecha:' + rengister['date'] + ' (' + rengister['date'] + ')<br>\
                            <strong>' + rengister['title'] + '</strong><br>\
                            <p>' + rengister['message'] + '</p>\
                          </div>\
                        </div>';
  });

  document.getElementById('journal').innerHTML = journal_content;

}
