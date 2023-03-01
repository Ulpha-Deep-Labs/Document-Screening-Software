module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
    // …
  },
  plugins: [
    ({ matchUtilities, theme /* … */ }) => {
      // …
      matchUtilities(
        // https://gist.github.com/olets/9b833a33d01384eed1e9f1e106003a3b
        {
          aspect: (value) => ({
            "@supports (aspect-ratio: 1 / 1)": {
              aspectRatio: value,
            },
            "@supports not (aspect-ratio: 1 / 1)": {
              // https://github.com/takamoso/postcss-aspect-ratio-polyfill

              "&::before": {
                content: '""',
                float: "left",
                paddingTop: `calc(100% / (${value}))`,
              },
              "&::after": {
                clear: "left",
                content: '""',
                display: "block",
              },
            },
          }),
        },
        { values: theme("aspectRatio") }
      );
    },
  ],
};
