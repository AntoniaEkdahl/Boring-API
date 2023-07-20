/*
{
  "activity": "Learn Kotlin",
  "type": "education",
  "participants": 1,
  "price": 0,
  "link": "https://kotlinlang.org/",
  "key": "3950821",
  "accessibility": 0.8
}
*/

export type BoringApiResponse = {
  // Defines the response from the API to a type and export it so it can be used elsewhere.
  activity: string;
  type?: string;
  participants?: number;
  price?: number;
  link?: string;
  key?: string;
  accessibility?: number;
};
