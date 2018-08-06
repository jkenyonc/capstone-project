import React from 'react';

const PostDetail = ( {match} ) => {
  console.log(match.params.postid)
  return (
    <div>
      <h1>{match.params.postid}</h1>
    </div>
  );
};

export default PostDetail;