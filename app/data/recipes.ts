export type Recipe = {
  id: number;
  name: string;
  cuisine: string;
  minutes: number;
};

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Cheeseburst Pizza",
    cuisine: "Italian",
    minutes: 60,
  },
  {
    id: 2,
    name: "Neapolitan Pizza",
    cuisine: "American",
    minutes: 45,
  },
  {
    id: 3,
    name: "Pasta Alfredo",
    cuisine: "Italian",
    minutes: 120,
  },
  {
    id: 4,
    name: "Big Mac",
    cuisine: "American",
    minutes: 40,
  },
];
