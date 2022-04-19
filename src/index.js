const { ApolloServer, gql } = require('apollo-server');
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');

const { continents } = require('./data/continent');
const { countries } = require('./data/countries.js');
const { languages } = require('./data/languages');
const typeDefs = gql`
  type Country {
    code: String!
    name: String!
    native: String!
    phone: [Int!]
    continent: Continent!
    capital: String!
    currency: [String!]
    languages: [Language!]
    emoji: String!
    emojiU: String!
  }

  type Continent {
    name: String!
    countries: [Country!]
  }

  type Language {
    name: String!
    native: String!
    rtl: Int
    countries: [Country!]
  }

  type Query {
    continent(code: String!): Continent
    continents: [Continent!]

    country(code: String!): Country
    countries: [Country!]

    language(code: String!): Language
    languages: [Language!]
  }
`;
const resolvers = {
  Query: {
    countries: () => countries,

    country: (parent, args) =>
      countries.find(country => country.code === args.code),

    continents: () => continents,
    continent: (parent, args) =>
      continents.find(continent => continent.name === args.name),
    languages: () => languages,
    language: (parent, args) =>
      languages.find(language => language.code === args.code),
  },
  Language: {
    countries: (parent, _, { db }) => {
      let languageCode = '';
      for (const code in db.languages) {
        if (parent.name === db.languages[code].name) languageCode = code;
      }

      const countries = Object.values(db.countries).filter(country =>
        country.languages.includes(languageCode)
      );
      return countries;
    },
  },
  Country: {
    continent: (parent, _, { db }) => {
      const continent = db.continents[parent.continent];
      const countries = Object.values(db.countries).filter(
        country => country.continent === parent.continent
      );

      return {
        name: continent,
        countries,
      };
    },
    languages: (parent, _, { db }) => {
      const languages = [];

      for (const languageCode of parent.languages) {
        const language = db.languages[languageCode];
        const countries = Object.values(db.countries).filter(country =>
          country.languages.includes(languageCode)
        );

        language.countries = countries;
        languages.push(language);
      }

      return languages;
    },
  },
  Continent: {
    countries: (parent, _, { db }) => {
      let continentCode = '';
      for (const code in db.continents) {
        if (db.continents[code] === parent.name) {
          continentCode = code;
        }
      }
      const countries = Object.values(db.countries).filter(
        country => country.continent === continentCode
      );
      return countries;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      // options
    }),
  ],
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
