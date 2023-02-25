// let title = document.getElementById("ptit");



// let textArea =document.getElementById("opentext");
const createAPost = async (event) => {
  event.preventDefault();
 
  const response = await fetch("/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: document.getElementById("ptit").value,
      post: document.getElementById("opentext").value,
    }),
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("not able to create post.");
  }
};
