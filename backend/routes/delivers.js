const router = require("express").Router();
let Delivery = require("../models/Delivery");


router.route("/add").post((req, res) => {


    const deliverID = req.body.OID;
    const cusName = req.body.cusName;
    const address = req.body.address;
    const date = req.body.date;
    const driverName = req.body.driverName;
    const vehicleNumber = req.body.vehicleNumber;
    const nic = req.body.nic;
    const contactNumber = req.body.contactNumber;
    const deliveryStatus = req.body.deliveryStatus;

    const newDelivery = new Delivery({


        deliverID,
        cusName,
        address,
        date,
        driverName,
        nic,
        contactNumber,
        deliveryStatus,
        vehicleNumber
    })

    newDelivery.save().then(() => {
        res.json("successful details")
    }).catch((err) => {
        console.log(err);
    })

})



router.route("/view").get((req, res) => {
    Delivery.find().then((delivers) => {
        res.json(delivers)
    }).catch((err) => {
        console.log(err)
    })
})


router.put('/update/:id', (req, res) => {
    Delivery.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, post) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            return res.status(200).json({
                success: "updated succesfully"
            });
        }
    );
});

router.delete('/delete/:id', (req, res) => {
    Delivery.findByIdAndRemove(req.params.id).exec((err, deletedDelivery) => {

        if (err) return res.status(400).json({
            message: "delete unsuccessful", err
        });


        return res.json({
            message: "delete successfull", deletedDelivery
        });
    });
});




module.exports = router;