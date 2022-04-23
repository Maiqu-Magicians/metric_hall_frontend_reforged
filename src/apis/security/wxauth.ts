import axios from "axios";

/**
 *
 * @param code
 * @param state
 */

export default async function wxauth(
  code: string,
  state: string
): Promise<string> {
  let jwt = "";
  await axios
    .get(`/callback?code=${code}&state=${state}`)
    .then((response) => {
      if (response.data.code == 0) {
        jwt = response.data.data.jwt;
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return jwt;
}
