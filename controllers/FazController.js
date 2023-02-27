const fazmodel = require("../Models/FazModel");

 const postfaz = async(req,res)=>{



const fazz = new fazmodel({
    other_id:req.body.other_id,
    description: req.body.description,
  feed: req.body.feed
});

await fazz.save();
res.send("Document saved successfully");

}




const getfaz =async(req,res)=>{

const sandder=await fazmodel.find();
res.send(sandder);


}
const getbyother = async (req, res) => {
    try {
      const other_id = req.query.other_id;
      const sandder = await fazmodel.find({other_id});
      res.send(sandder); 
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }


const updatefaz=async(req,res)=>{


  const { id,description,feed } = req.query;

  const movie = await fazmodel.findById(id);

  if (description) {
    movie.description = description;
  }
  if (feed) {
    movie.feed = feed;
  }


  
  await movie.save();
  const movies = await fazmodel.find();
  res.send(movies);



}


const desfaz=async(req,res)=>{
  const _id=req.query
   await fazmodel.findByIdAndDelete(_id);

  res.send("the info is deleted ");
}



module.exports = {
    postfaz,
    getfaz,
    updatefaz,
    desfaz,
    getbyother,
 
  };