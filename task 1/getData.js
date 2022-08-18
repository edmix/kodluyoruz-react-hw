import fetch from "axios";

const getData = async (number) => {
    const { data: user } = await fetch("https://jsonplaceholder.typicode.com/users/" + number);
    const { data: posts } = await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + number);

    return { user, posts };
};

export default getData;

