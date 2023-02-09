console.log("hello world");

$("#form").submit((event) => {
  event.preventDefault();
  const username = $("#user").val();
  const password = $("#passW").val();
  $.post("/", { username, password }, (data) => {
    console.log(data);
  });
});
