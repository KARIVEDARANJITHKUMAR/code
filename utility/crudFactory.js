// const getAllFactory = function(ElementModel){
//     return async function (req,res) {
//         try{
//             const elementsDetails = await ElementModel.find()
//             if (elementsDetails.length == 0){
//                 throw new Error("no elements found");
//             }
//             res.status(200).json({
//                 status:"Success",
//                 message:elementsDetails
//             })
//         }catch(e){
//             res.status(400).json({
//                 status:"Failure",
//                 message:e.message
//             })
//         }     
//     }
// }

// const Course = require("../model/courseModel"); 

const getAllFactory =  function(ElementModel){
 return async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 3;

  const skip = (page - 1) * limit;

  try {
    const courses = await ElementModel.find().skip(skip).limit(limit);
    const total = await ElementModel.countDocuments();

    res.status(200).json({
      message: courses,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    });
  } catch (err) {
    console.error("Error fetching courses:", err);
    res.status(500).json({ error: "Server error" });
  }
};
}




const getByIdFactory = function(ElementModel){
    return async function (req,res) {
      try{
        const elementId = req.params.elementId
        const ElementDetails = await ElementModel.findById(elementId);
        if(ElementDetails.length == 0){
            throw new Error(`no elemnts found with elementId:${elementId}`)
        }
        res.status(200).json({
            status:"success",
            message:ElementDetails
        })
      }catch(e){
        res.status(400).json({
            status:"failure",
            message:e.message
        })
      }  
    }
}

const postFactory = function(ElementModel){
    return async function(req,res) {
        try{
            const elementdetails = req.body 
            const Element = await ElementModel.create(elementdetails);
            res.status(200).json({
                status:"Success",
                message:"Element created successfully"
            })
        }catch(e){
        res.status(400).json({
            status:"failure",
            message:e.message
        })
    }
    }
}

const deleteFactory = function(ElementModel){
    return async function (req,res) {
        let {elementId} = req.params
        try{
            const Element = await ElementModel.findByIdAndDelete(elementId)
            res.status(200).json({
                status:'Success',
                message:`Element with elementId :${elementId} deleted successfully`
            })
        }catch(e){
            res.status(400).json({
                status:"failure",
                message:e.message
            })
        }
    }
}


const updateFactory = function(ElementModel){
    return async function (req,res) {
        let elementId = req.params.elementId
        try{
            const Element = await ElementModel.findByIdAndUpdate(elementId,req.body)
            res.status(200).json({
                status:"success",
                message:`Element with elementId:${elementId} updated successfully`
            })
        }catch(e){
            res.status(400).json({
                status:"failure",
                message:e.message
            })
        }
    }
}



module.exports = {
    getAllFactory,
    getByIdFactory,
    postFactory,
    deleteFactory,
    updateFactory
}