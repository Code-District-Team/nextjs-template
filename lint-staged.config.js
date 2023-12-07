module.exports = {
  '**/*.(js|jsx|ts|tsx)': filenames => [
    // `yarn lint ${filenames.join(' ')}`,
    `yarn format ${filenames.join(' ')}`,
  ],
};
