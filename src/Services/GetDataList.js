const GetDataList = async () => {
  let all_data = [];

  // localStorage.removeItem("is_data_list");
  let data_list = localStorage.getItem("is_data_list");

  if (data_list) {
    console.log("Existe localStorage");
    return JSON.parse(data_list);
  }

  console.log("No Existe localStorage");
  let poke_id = 4;
  for (poke_id; poke_id < 10; poke_id++) {
    try {
      const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke_id}`);
      const POKE_DATA = await API.json();

      const {
        id,
        name,
        sprites: {
          other: {
            "official-artwork": { front_default: sprite },
          },
        },
        types,
      } = POKE_DATA;

      all_data.push({ id, name, sprite, types });
      // console.log(all_data);
    } catch (error) {}
  }
  localStorage.setItem("is_data_list", JSON.stringify(all_data));
  return all_data;
};

export default GetDataList;
