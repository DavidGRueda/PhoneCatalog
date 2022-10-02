export default function getPhones() {
  const path = process.env.API_PATH;
  return fetch(`http://${path}}/getPhones`).then((res) => res.json());
}
