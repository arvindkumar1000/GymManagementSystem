const Member = require('../Modals/member');
const Membership = require('../Modals/memberShip');

exports.getAllMember = async (req, res) => {
    try {
        const { skip, limit } = req.query;
        const members = await Member.find({ gym: req.gym._id });
        const totalMember = members.length;

        const limitedMembers = await Member.find({ gym: req.gym._id }).sort({ createdAt: -1 }).skip(skip).limit(limit);

        res.status(200).json({
            message: members.length ? "Fetched Members Successfully" : "No any Member Registered yet",
            members: limitedMembers,
            totalMembers: totalMember
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
}




function addMonthsToDate(months, joiningDate) {
    // Get current year, months and day
    let today = joiningDate;
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth(); // months are 0-indexed.
    const currentDay = today.getDate();

    // Calculate the new month and year
    const futureMonth = currentMonth + months;
    const futureYear = currentYear + Math.floor(futureMonth / 12);
    // calculate the correct future Month (moduls for month)
    const adjustedMonth = futureMonth % 12;
    // set the date to the first of the future month
    const futureDate = new Date(futureYear, adjustedMonth, 1);
    // get the laast day of the future month
    const lastDayOfFutureMonth = new Date(futureYear, adjustedMonth, +1, 0).getDate();
    // Adjust the day if current day exceeds the number of day in the new month
    const adjustedDay = Math.min(currentDay, lastDayOfFutureMonth);
    // set the final adjusted day
    futureDate.setDate(adjustedDay);

    return futureDate;

}
exports.registerMember = async (req, res) => {
    try {

        const { name, mobileNo, address, membership, profilePic, joiningDate } = req.body;
        const member = await Member.findOne({ gym: req.gym._id, mobileNo });
        if (member) {
            return res.status(409).json({ error: 'Already registered with this Mobile No' })
        }

        const memberShip = await Membership.findOne({ _id: membership, gym: req.gym._id });
        const membershipMonth = memberShip.months;
        if (memberShip) {
            let jngDate = new Date(joiningDate);
            const nextBillDate = addMonthsToDate(membershipMonth, jngDate);
            let newmember = new Member({ name, mobileNo, address, membership, gym: req.gym._id, profilePic, nextBillDate });
            await newmember.save();
            res.status(200).json({ message: "Member Registered Successfully", newmember });


        } else {
            return res.status(409).json({ error: "No such membership are there" })
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
}


exports.searchMember = async (req, res) => {
    try {
        const { searchTerm } = req.body;
        const member = await Member.find({
            gym: req.gym._id,
            $or: [{ name: { $regex: '^' + searchTerm, $options: 'i' } },
            { mobileNo: { $regex: '^' + searchTerm, $options: 'i' } }
            ]
        });
        res.status(200).json({
            message: member.length ? "Fetched Members successfully" : "NO such member registered yet",
            members: member,
            totalMembers: member.length
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
}

exports.monthlyMember = async (req, res) => {
    try {
        const now = new Date();

        // Get the first day of the current month.............
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);

        const member = await Member.find({
            gtm: req.gym._id,
            createdAt: {
                $gte: startOfMonth, // Greater then or equal to the first day of the month

                $lte: endOfMonth  // Less than or equal to the last day of the month
            }
        }).sort({ createdAt: -1 });

        res.status(200).json({
            message: member.length ? "Fetched Memebrs Successfully" : "No Such Memebr Registered yet.",
            members: member,
            totalMembers: member.length
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
}


exports.expiringwithin3Days = async (req, res) => {
    try {
        const today = new Date();
        const nextThreeDays = new Date();
        nextThreeDays.setDate(today.getDate() + 3);

        const member = await Member.find({
            gym: req.gym._id,
            nextBillDate: {
                $gte: today, // Greater than or equal to today
                $lte: nextThreeDays // Less than or equak to 3 days from today
            }

        });

        res.status(200).json({
            message: member.length ? "Fetched Members Successfully" : "No Suchh Member is Expiring within 3 Days"
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
}