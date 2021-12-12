module.exports = {
  extends: ["next", "prettier"],
  settings: {
    next: {
      rootDir: [
        "apps/app/",
        "apps/web/",
        "packages/ui/",
        "packages/config/",
        "packages/tsconfig/",
        "packages/react-sdk/",
        "packages/expo-yarn-workspaces",
      ],
    },
  },
};
