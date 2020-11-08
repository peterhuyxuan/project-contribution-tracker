const router = require("express").Router();
let Contribution = require("../models/contributionModel");

router.route("/").get((req, res) => {
  Contribution.find()
    .then((contributions) => res.json(contributions))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newContribution = new Contribution({
    username,
    description,
    duration,
    date,
  });

  newContribution
    .save()
    .then(() => res.json("Contribution has been successfully added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Contribution.findById(req.params.id)
    .then((contribution) => res.json(contribution))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Contribution.findByIdAndDelete(req.params.id)
    .then(() => res.json("Contribution has been deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Contribution.findById(req.params.id)
    .then((contribution) => {
      contribution.username = req.body.username;
      contribution.description = req.body.description;
      contribution.duration = Number(req.body.duration);
      contribution.date = Date.parse(req.body.date);

      contribution
        .save()
        .then(() => res.json("Contribution has been successfully updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
