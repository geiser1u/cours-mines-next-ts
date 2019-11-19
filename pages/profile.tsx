import { NextPage } from 'next';
import Title from '../components/title';
import Message from '../components/message';

const messages = [
  {
    author: 'Moi',
    content: 'Rien',
    timestamp: 1,
  },
  {
    author: 'Moi',
    content: 'Rien',
    timestamp: 1,
  },
  {
    author: 'Moi',
    content: 'Rien',
    timestamp: 1,
  },
];

const counter = 'Counter 0';

const Profile: NextPage = () => (
  <div>
    <Title value="Profile" />
    <p>Test {counter}</p>
    <div>
      {messages.map(({ author, content, timestamp }) => (
        <Message author={author} content={content} timestamp={timestamp} />
      ))}
    </div>
  </div>
);

export default Profile;
