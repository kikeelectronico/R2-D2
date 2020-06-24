window.onload = function() {
  var r = new XMLHttpRequest();
  r.onreadystatechange = function() {
      if (r.readyState == 4 && r.status == 200)
          renderJournal(JSON.parse(r.responseText));
  }
  r.open("GET", "content/journal.json", true);
  r.send(null);
}

function renderJournal(journal){
  console.log(journal);
  journal_content = "";
  journal.forEach((rengister, i) => {
    journal_content += '<div class="card">\
                          <div class="card-body">\
                            Fecha: ' + rengister['date'] + ' - Entrada: ' + rengister['day'] + '<br>\
                            <strong>' + rengister['title'] + '</strong><br><hr>\
                            <p>' + rengister['message'] + '</p>\
                          </div>\
                        </div>';
  });

  document.getElementById('journal').innerHTML = journal_content;

}
