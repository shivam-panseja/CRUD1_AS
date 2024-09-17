const { Blogs } = require("../Modals/db.js");

/// post request

async function getrequest(req, res) {
  const allblogs = await Blogs.find();
  res.json({ data: "no data", allblogs });
}

async function postrequest(req, res) {
  const newblog = req.body;

  const blogs = await Blogs.create({
    Blog_Title: newblog.Blog_Title,
    Blog_Post: newblog.Blog_Post,
  });

  res.json({ msg: "the blogs is creted :", newblog });
}

console.log(postrequest);

//  get by Id
async function getbyId(req, res) {
  const id = req.params.Id;
  console.log("id error is here");
  const finid = await Blogs.findOne({ _id: id });
  res.json({ msg: "This search by id :", finid });
}

// update
async function updaterequest(req, res) {
  const update = req.params.Id;
  const version = req.body;
  console.log("error is here", version);
  const updatedversion = await Blogs.updateOne(
    { _id: update },
    {
      Blog_Title: version.Blog_Title,
      Blog_Post: version.Blog_Post,
    }
  );
  res.json({ msg: "This is updated Blog : ", updatedversion });
}

async function deleterequest(req, res) {
  const id = req.params.Id;
  const body = req.body;
  const deleteing = await Blogs.deleteOne(
    { _id: id },
    { Blog_Title: body.Blog_Title, Blog_Post: body.Blog_Post }
  );
  res.json({ msg: "this is deleted now", deleteing });
}

module.exports = {
  getrequest,
  postrequest,
  getbyId,
  updaterequest,
  deleterequest,
};
