import axios from 'axios';

/** 
 *@param {number} userIdVal
 *@returns {Object}
 */

async function getData(userIdVal) {

    const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${userIdVal}`);
    const { data: post } = await axios(`https://jsonplaceholder.typicode.com/posts/${userIdVal}`);

    user.post = post
    return user;

}



export default getData;