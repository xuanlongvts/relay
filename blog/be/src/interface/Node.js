const { nodeDefinitions, fromGlobalId } = require('graphql-relay');

const PostModel = require('../model/Post');
const UserModel = require('../model/User');

const { nodeInterface, nodeField } = nodeDefinitions(
    globalId => {
        const { type, id } = fromGlobalId(globalId);
        if (type === 'Post') {
            return PostModel.getPost(id);
        } else if (type === 'User') {
            return UserModel.getUser(id);
        }

        return null;
    },
    object => {
        const { Post } = require('../types/Post');
        const { User } = require('../types/User');

        if (object.title) {
            return Post;
        }
        if (object.usename) {
            return User;
        }

        return null;
    }
);

module.exports = { nodeInterface, nodeField };
