import React from 'react';
import "./post.css";
import Comment from './Comment/Comment';

const Post = ({postMainText, imgUrl, userName, isOdd}) => {
    const [commentBoxOpen, setCommentBoxOpen] = React.useState(false);
    const [comments, setComments] = React.useState([]);
    const [comment, setComment] = React.useState("");

    const openCommentBox = () => setCommentBoxOpen(!commentBoxOpen);
    const addComment = () => setComments([...comments, comment]);
    const handleCommentChange = (e) => setComment(e.target.value);

    return  (
        <div>
            <div className={isOdd ? "post-container bg-black" : "post-container bg-red"}>
                <img src={imgUrl} alt="person"/>
                <div>
                    <h2>{postMainText} {userName}</h2>
                    <div className="post-actions">
                        <span className="post-actions-buttons">
                            <span className="button">Like</span> 
                            <span className="button" onClick={openCommentBox}>Reply</span>
                        </span>
                        <span className="post-actions-date">2020-02-02</span>
                    </div>
                </div>

            </div>
            {commentBoxOpen ? 
                <div> 
                    <div className="post-comment">
                        <textarea type="text" onChange={e => handleCommentChange(e)}></textarea>
                        <button onClick={addComment}>Post comment</button>
                    </div>
                    {comments.map(comment => <Comment comment={comment}/>)}
                </div>
                :
                <></>
            }
        </div>
    )
}

export default Post;