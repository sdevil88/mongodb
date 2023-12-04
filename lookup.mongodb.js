use("mernstack")




// db.courses.insertMany([
//   {
//     name: "MERN",
//     duration: "3 months",
//     price: 25000,
//   },
//   {
//     name: "Python with Data science",
//     duration: "2.5 months",
//     price: 22000,
//   },
//   {
//     name: "Cyber security",
//     duration: "3 months",
//     price: 35000,
//   },
//   {
//     name: "Devops engineer",
//     duration: "3 months",
//     price: 45000,
//   },
// ]);



// db.learners.insertMany([
//   {
//     name: "Sujit Sharma",
//     address: "Kalanki",
//     phone: "984612356",
//     course: ObjectId("656c60cc0c44e6f3160c61bc"),
//   },
//   {
//     name: "Sahil Khatiwoda",
//     address: "Gwarkho",
//     phone: "9846123785",
//     course: ObjectId("656c60cc0c44e6f3160c61be"),
//   },
// ]);




db.learners.aggregate([
    {
        $match: {
          name: "Sujit Sharma"
        }
    },
    {
        $lookup: {
          from: "courses",
          localField: "course",
          foreignField: "_id",
          as: "coursedata",
        }
    },
    {
        $project: {
          name:1,
          address:1,
          phone: 1,
          courseName: {$first: "$coursedata.name"},
          courseDuration: {$first:"$coursedata.duration"},
          coursePrice:{$first:"$coursedata.price"}
        },
    },


])







