const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const blogController = require("./controllers/blogController");
const pageController = require("./controllers/pageController");

mongoose
	.connect(process.env.DB_STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Database Connected");
	})
	.catch((e) => console.log("Error: ", e));

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//MODEL ROUTE CONTROLLERS
app.get("/", blogController.getAllBlogs);
app.get("/blogs/:id", blogController.getBlog);
app.post("/blogs", blogController.createBlog);
app.put("/blogs/:id", blogController.updateBlog);
app.delete("/blogs/:id", blogController.deleteBlog);

//PAGE ROUTE CONTROLLERS
app.get("/about", pageController.getAboutPage);
app.get("/add_post", pageController.getAddPage);
app.get("/blogs/edit/:id", pageController.getEditPage);

//EXPRESS SERVER
port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Sunucu http://localhost:${port} da başlatildi.`);
});
