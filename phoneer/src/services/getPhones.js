export default function getPhones() {
  //const path = process.env.REACT_APP_API_PATH;
  const path = "localhost:3001";
  return fetch(`http://${path}/getPhones`).then((res) => res.json());
}
