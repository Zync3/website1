// Word generator utility - currently uses static data
// TODO: Replace with actual Gemini AI API integration

const wordPairs = [
  { word: 'elephant', impostorWord: 'rhinoceros' },
  { word: 'ocean', impostorWord: 'lake' },
  { word: 'mountain', impostorWord: 'hill' },
  { word: 'fire', impostorWord: 'flame' },
  { word: 'sun', impostorWord: 'star' },
  { word: 'book', impostorWord: 'novel' },
  { word: 'car', impostorWord: 'vehicle' },
  { word: 'tree', impostorWord: 'plant' },
  { word: 'music', impostorWord: 'song' },
  { word: 'computer', impostorWord: 'machine' },
  { word: 'coffee', impostorWord: 'drink' },
  { word: 'phone', impostorWord: 'device' },
  { word: 'city', impostorWord: 'town' },
  { word: 'food', impostorWord: 'meal' },
  { word: 'game', impostorWord: 'sport' }
];

export const generateWordPair = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // For Gemini AI integration, replace this with:
  // const response = await fetch('GEMINI_API_ENDPOINT', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ prompt: 'Generate a word and a similar but different word for an impostor game' })
  // });
  // const data = await response.json();
  // return { word: data.word, impostorWord: data.impostorWord };

  const randomPair = wordPairs[Math.floor(Math.random() * wordPairs.length)];
  return randomPair;
};