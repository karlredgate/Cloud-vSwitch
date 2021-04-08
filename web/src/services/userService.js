const USERS_API = `${process.env.REACT_APP_API_URL}/users`;

/**
 * Create a new user.
 * @param user: an object { email, password, displayName (full name) }
 * @return {Promise<boolean>}: resolved with true if successful, false otherwise
 */
export function createUser(user) {
  return fetch(USERS_API, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => res.ok);
}
