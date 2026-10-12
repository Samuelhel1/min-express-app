export default function notFound(req, res) {
  res.status(404).render("notFound", {
    title: "Sidan finns inte",
    heading: "404 – Sidan hittades inte",
  });
}