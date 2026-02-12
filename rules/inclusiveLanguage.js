export default {
  /* eslint-disable inclusive-language/use-inclusive-words 
        -- config must specify non-inclusive words */
  "inclusive-language/use-inclusive-words": [
    "warn",
    {
      words: [
        {
          word: "blacklist",
          suggestions: ["blocklist", "denylist", "deny", "block", "unapproved"],
        },
        {
          word: "whitelist",
          suggestions: ["allowlist", "passlist", "allow", "permit", "approved"],
        },
        {
          word: "master",
          suggestions: ["main", "primary", "host", "leader"],
        },
        {
          word: "slave",
          suggestions: ["secondary", "replica", "client", "follower"],
        },
      ],

      lintStrings: true,
    },
  ],
  /* eslint-enable inclusive-language/use-inclusive-words 
            -- config must specify non-inclusive words */
};
