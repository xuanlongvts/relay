const { nodeDefinitions, fromGlobalId } = require('graphql-relay');

const PostModel = require('../model/Post');

const { nodeInterface, nodeField } = nodeDefinitions(
    globalId => {
        const { type, id } = fromGlobalId(globalId);
        if (type === 'Post') {
            return PostModel.getPost(id);
        }
        return null;
    },
    object => {
        const { Post } = require('../types/Post');
        if (object.title) {
            return Post;
        }
    }
);

module.exports = { nodeInterface, nodeField };
