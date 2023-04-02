const uploadForm = document.querySelector(".upload");
console.log(uploadForm);
uploadForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const file = e.target[0].files[0];
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("http://13.52.247.5/upload", {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    method: "POST",
    mode: "no-cors",
    body: formData,
  });
  console.log(response);
  const data = await response.json();
  console.log({ data });
});
