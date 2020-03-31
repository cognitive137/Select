var $select = $("#people");

$.getJSON("data.JSON", function(data) {
  $select.html("");

  for (
    var i = 0;
    i < data["people"].length;
    i++
  ) {
    $select.append(
      '<option id="' +
        data["people"][i]["id"] +
        '">' +
        data["people"][i]["name"] +
        "</option>"
    );
  }
});
