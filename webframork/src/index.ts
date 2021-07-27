import axios from 'axios';
import { Collection } from './models/Collection';
import { User, UserProps } from './models/User'

axios.get('http://localhost:3000/users')
  .then(res => console.log(res))

const collection = new Collection<User, UserProps>(
  'http://localhost:3000/users',
  (json: UserProps) => User.buildUser(json)
);

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();