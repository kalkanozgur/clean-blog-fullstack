const Blog = require("../models/Blog");

exports.getAboutPage = (req, res) => {
	res.send("about");
};
exports.getAddPage = (req, res) => {
	res.send("add_post");
};
exports.getEditPage = async (req, res) => {
	const blog = await Blog.findOne({ _id: req.params.id });
	res.send({
		blog,
	});
};
