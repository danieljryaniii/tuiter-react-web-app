import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return (`
        ${posts.map((post, index) => PostItem(post, index)).join('')}
    `);
}
export default PostList;