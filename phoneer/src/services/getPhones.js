export default function getPhones() {
  return fetch("http://localhost:3001/getPhones").then((res) => res.json());
}
