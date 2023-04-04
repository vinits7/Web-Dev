var list1 = [];

var n = 1;
var x = 0;

function AddRow() {
  var AddRown = document.getElementById("show");
  var NewRow = AddRown.insertRow(n);
  var fname = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var website = document.getElementById("website").value;
  var gender = document.getElementById("gender").value;
  var skills = document.getElementById("skills").value;

  list1[x] = "<div class=\"card\"><img src=\"./form.png\" height=\"100px\" width=\"100px\"></div>" + "<div class=\"card\">" + "<p>Full Name: "+ fname + "</p>" + "<p>Email: "+ email + "</p>" + "<p>Website: "+ website + "</p>" + "<p>Gender: "+ gender + "</p>" + "<p>Skills: "+ skills + "</p>" + "</div>";

  var cel1 = NewRow.insertCell(0);

  cel1.innerHTML = list1[x];

  n++;
  x++;
}