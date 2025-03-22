const Gym = require('../Modals/gym')


exports.register = async (req, res) => {
    try {
        const { userName, password, gymName, profilePic, email } = req.body;


        const isExist = await Gym.findOne({ userName });
        if (isExist) {
            res.status(400).json({
                error: "Username Already Exit, Please try with other username"

            })
        }
        else {
            const newGym = new Gym({ userName, password, gymName, profilePic, email });
            await newGym.save();

            res.status(201).json({ message: 'user register successfully', success: "yes", data: newGym });
        }
    } catch (err) {
        res.status(500).json({
            error: "Server Error"
        })
    }
}
exports.login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const gym = await Gym.findOne({ userName });

        if (gym && await bcrypt.compare(password, gym.password)) {

            res.json({ message: 'Logged in successfully', success: "true", gym });
        } else {
            const hashedPassword = await bcrypt.hash(password, 10)
            console.log(hashedPassword);
            const newGym = new Gym({ userName, password: hashedPassword, gymName, profilePic, email });
            res.status(400).json({ error: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).json({
            error: "Server Error"
        })
    }
}