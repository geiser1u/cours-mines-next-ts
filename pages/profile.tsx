import { NextPage } from 'next';

const counter = 'Counter 0';

const Profile: NextPage = () => (
  <div>
    <h1 className="test">Profile</h1>
    <p>Test {counter}</p>
  </div>
);

export default Profile;
