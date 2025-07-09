import express from "express"
import {getPostComments} from "../controllers/comment.controller.js"
import {addPostComments} from "../controllers/comment.controller.js"
import {deletePostComments} from "../controllers/comment.controller.js"

const router = express.Router()



router.get("/:postId",getPostComments);
router.post("/:postId",addPostComments);
router.delete("/:id",deletePostComments);


export default router