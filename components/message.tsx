import React, { FunctionComponent } from 'react';

interface Props {
  author: string;
  content: string;
  timestamp: number;
}

const Message: FunctionComponent<Props> = ({ author, content, timestamp }) => (
  <div className="card my-3">
    <div className="card-body">
      <p className="card-text">{content}</p>
    </div>
    <div>
      Par {author}, {timestamp}
    </div>
  </div>
);
export default Message;
