const baseUrl = 'http://52.63.253.74:5000'

export const post = async function (url, param) {
  // setLoadingValue(true);
  return await fetch(baseUrl + url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: param
  })
    .then((resp) => resp.json())
    .then((res) => res)
    .catch((e) => e)
}
