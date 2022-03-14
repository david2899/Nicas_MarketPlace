import {status, url} from "./index";
export let network;

const localHost = "http://localhost:3000/";
const devHost = "https://dev.api/";
const productHost = "https://dev.api.product/";

if (url === status) {
    network = localHost
} else if (url === "local") {
    network = devHost
} else {
    network = productHost
}