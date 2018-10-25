const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');

let links = [
    {
        id: 'link-0',
        description: 'Fullstack tutorial for GraphQL',
        url: 'www.howtographql.com'
    }
];

let idCount = links.length;
const resolvers = {
    Query: {
        info: () => 'This is the api for architect xuanlongvts@gmail.com',
        feed: (root, args, context, info) => {
            return context.db.query.links({}, info);
        }
    },
    Link: {
        id: root => root.id,
        description: root => root.description,
        url: root => root.url
    },
    Mutation: {
        post: (root, args, context, info) => {
            return context.db.mutation.createLink(
                {
                    data: {
                        url: args.url,
                        description: args.description
                    }
                },
                info
            );
        }
    }
};

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: req => ({
        ...req,
        db: new Prisma({
            typeDefs: 'src/generated/prisma.graphql',
            endpoint: 'https://us1.prisma.sh/xuanlongvts/prisma-server/dev',
            secret:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJwcmlzbWEtc2VydmVyQGRldiIsInJvbGVzIjpbImFkbWluIl19LCJpYXQiOjE1Mzg4OTc2NTcsImV4cCI6MTUzOTUwMjQ1N30.jFD7w6WsDEggNK3OxRhIwHLsiRYnZSpwpViO9JCCqvk',
            debug: true
        })
    })
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
