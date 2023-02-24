// let title = document.getElementById("ptit");
// let textArea =document.getElementById("opentext");
const createAPost = async () => {
    const response = await fetch('/api/user/dashboard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('dashboard');
    } else {
      alert('not able to create post.');
    }
  };
  
  