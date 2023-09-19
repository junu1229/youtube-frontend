import axios from "axios";

// http://localhost:8081/api/
const instance = axios.create({
    baseURL: "http://localhost:8081/api/",
});

// async ~ await + axios
export const getCategories = async () => {
    return await instance.get("category");
};

