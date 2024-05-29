export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve(0);
    reject(new Error('Error'));
  });
}
