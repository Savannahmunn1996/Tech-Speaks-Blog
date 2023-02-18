console.log("hello world");
var modal = document.getElementById("#myModal");
var btn = document.getElementById("#feature");
var span = document.getElementsByClassName(".close")[0];


// btn.onclick = function() {
//     modal.style.display = "block";}

//     span.onclick = function() {
//         modal.style.display = "none";
//       }

//       window.onclick = function(event) {
//         if (event.target == modal) {
//           modal.style.display = "none";
//         }
//       }

// $("#form").submit((event) => {
//   event.preventDefault();
//   const username = $("#user").val();
//   const password = $("#passW").val();
//   $.post("/", { username, password }, (data) => {
//     console.log(data);
//   });
// });
$("#form").click(async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const username = $("#user").val().trim();
  const password = $("#passW").val().trim();

  if (username && password) {
    // Send the user and password to the server
    const response = await fetch("/", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
  }

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    response.status(404);
  }
});
// this code allows the create a post button on the dashboard page to work
function gopost() {
  window.location.replace("/create");
}
$("#create").click("click", gopost);




