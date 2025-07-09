
import Comment from "../models/comment.model.js";
import User from "../models/user.model.js";


export const getPostComments = async (req,res)=>{

 const comments = await Comment.find({post:req.params.postId}).populate("user","username img").sort({createdAt:-1});
 res.json(comments);
}
export const addPostComments = async (req,res)=>{
    const clerkUserId = req.auth().userId;
    const postId = req.params.postId;

    if (!clerkUserId){
        res.status(401).json("Not authenticated.")
    }

    const user = await User.findOne({clerkUserId}); 
    const comment = new Comment({
        ...req.body, user:user._id, post:postId
    })
    const savedComment = await comment.save();
    res.status(201).json(savedComment);

}
export const deletePostComments = async (req,res)=>{

    const clerkUserId = req.auth().userId;
    const id = req.params.id;

    if (!clerkUserId){
        res.status(401).json("Not authenticated.")
    }
    const user = await User.findOne({clerkUserId}); 

    const deletedComment = await Comment.findOneAndDelete({_id:id, user:user._id});


    if(!deletedComment){
        return res.status(401).json("You can't delete someone else's comment.")
    }
    res.status(201).json("Comment deleted.");

}