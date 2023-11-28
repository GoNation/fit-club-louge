// // functio to trip trailing whitespace from a string
function trimTrailingWhitespace(string) {
  return string.replace(/\s*$/, '');
}

// This fucntion does the same as the above, but instead name will be an array of strings. And we return an array of stories

const findMultipleStoriesByNames = (names = [], storiesData) => {
  const trimmedNames = names.map(name => trimTrailingWhitespace(name));
  return storiesData.filter(story => {
    const trimmedStoryName = trimTrailingWhitespace(story.name);
    return trimmedNames.includes(trimmedStoryName);
  });
};

export default findMultipleStoriesByNames;
