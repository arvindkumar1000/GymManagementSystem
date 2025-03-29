
const Membership = require('../Modals/memberShip');



exports.addMembership = async (req, res) => {
    try {
        const { months, price } = req.body;
        const memberShip = await Membership.findOne({ gym: req.gym._id, months });
        if (memberShip) {
            memberShip.price = price;
            await memberShip.save();
            res.status(200).json({ message: "Updated Successfully" })
        } else {
            const newMembership = new Membership({ price, months, gym: req.gym._id });
            await newMembership.save();

            res.status(200).json({
                message: "Added Successfully"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "server Error"
        })
    }

}


exports.getmembership = async (req, res) => {
    try {
        const loggedInId = req.gym._id;
        const memberShip = await Membership.find({ gym: loggedInId });
        res.status(200).json({
            message: "Membership Fetched Successfully",
            Membership: memberShip
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "server Error"
        })
    }
}