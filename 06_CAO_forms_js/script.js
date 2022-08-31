document.querySelector("form").addEventListener("submit", submitFunction);

function submitFunction(event) {
  event.preventDefault();
  //   console.log(event.target.elements.abc.value);
  // du alternatyvūs būdai
  console.log(document.querySelector("input[name=abc]").value);
}
