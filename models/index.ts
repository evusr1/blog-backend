import Comment from "./comment";
import Post from "./post";
import Session from "./session";
import User from "./user";

User.hasMany(Post);
User.hasMany(Comment);
Post.hasMany(Comment);

Post.belongsTo(User);
Comment.belongsTo(User);
Comment.belongsTo(Post);
Session.belongsTo(User);

export {
    Comment,
    Post,
    Session,
    User
};