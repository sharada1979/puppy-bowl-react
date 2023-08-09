const COHORT = "2302-acc-pt-web-pt-a";
const baseUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`;

export async function fetchAllPlayers() {
  try {
    const response = await fetch(`${baseUrl}/players`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
export const apiFetchSinglePlayers = async (id) => {
  try {
    const response = await fetch(
      `${baseUrl}/players/${id}`
    );
    const result = await response.json();
  //   console.log(result);
    return result.data.player;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

export const createNewPlayer = async (name, breed, url, team, cohortId) => {
  try {
    const response = await fetch(
      `${baseUrl}/players`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          breed: breed,
          imageUrl: url,
          teamId: team,
          cohortId: cohortId,
        }),
      }
    );
    console.log("Created player!")
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};