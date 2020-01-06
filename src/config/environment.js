import dev from "./environments/dev.dist";
import prod from "./environments/prod.dist";

export default process.env.NODE_ENV === "production" ? prod : dev;
