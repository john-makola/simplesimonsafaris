export const sendContactForm = async (data) =>
  fetch("/api/contact", {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application.json",
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message. Try again later");
    return res.json();
  });
