const informationmodel = require("../Models/AlohaModel");

 const posting = async(req,res)=>{



const inff = new informationmodel({
  title: req.body.title,
  name: req.body.name
});

await inff.save();
res.send("Document saved successfully");

}




const getter =async(req,res)=>{

const sandder=await informationmodel.find();
res.send(sandder);


}



const updater = async (req, res) => {
  const { id, name, title } = req.body;

  try {
    const movie = await informationmodel.findById(id);
    if (!movie) {
      return res.status(404).send('Movie not found');
    }
    if (name) {
      movie.name = name;
    }
    if (title) {
      movie.title = title;
    }
    await movie.save();
    const movies = await informationmodel.find();
    res.send(movies);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};


const deleter=async(req,res)=>{


  try {
  const _id=req.query
   await informationmodel.findByIdAndDelete(_id);

  res.send("the info is deleted ");}
  catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}



module.exports = {
    posting,
    getter,
    updater,
    deleter,
 
  };