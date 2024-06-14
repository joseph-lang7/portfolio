function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const sendForm = async (formName, data) => {
  try {
    const res = await fetch("/__contact-form.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(
        encode({ "form-name": formName, ...data })
      ).toString(),
    });
    return res;
  } catch (error) {
    return error;
  }
};

export default sendForm;
