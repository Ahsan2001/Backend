const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

require("../database/connection")
const User = require("../module/userSchema");



// const middleware = (req,res, next) => {
//     console.log("running middleware Successfully")
//     next();
// }

router.get('/', (req, res) => {
    res.send("home page testing router ")
    console.log(User)
});

router.get('/about', (req, res) => {
    res.send("about page testing")
    console.log("running about testing")
});

router.get('/contact', (req, res) => {
    res.send("contact page testing")
});

router.get('/login', (req, res) => {
    res.send("signin page testing")
});


// thappa bhai hai yeh 

router.post('/register', (req, res) => {
    const { name, email, phone, work, password, confirmPassword } = req.body;
    if (!name || !email || !phone || !work || !password || !confirmPassword) {
        res.status(422).json({ error: "please fill the field properly" })
    }
    User.findOne({ email: email })
        .then((userExits) => {
            if (userExits) {
                return res.status(422).json({ error: "User Already Exits" })
            }
            const user = new User({ name, email, phone, work, password, confirmPassword })
            user.save()
                .then(() => {
                    res.status(201).json({ message: "User Successfully Registered" })
                })
                .catch((err) => {
                    res.status(500).json({ error: "Not Registered" })
                })
        })
});

// sir jaffer hai yeh walay 

router.post("/api/signup", async (req, res) => {
    const { name, email, phone, work, password, confirmPassword } = req.body;
    if (!name || !email || !phone || !work || !password || !confirmPassword) {
        return res.json({ message: "Required field are missing" });
    }
    const hashPass = await bcrypt.hash(password, 10);
    const userObj = {
        ...req.body,
        password: hashPass,
    };
    User.findOne({ email }, (error, user) => {
        if (error) {
            res.send(error);
        } else if (user) {
            console.log(user);
            res.json({ message: "email address is already exist" });
        } else {
            User.create(userObj, (err, _) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send({ message: "user successfully signup" });
                }
            });
        }
    })
});

router.post("/api/login", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.json({ message: "Required field are missing" });
    }

    User.findOne({ email }, async (error, user) => {
        if (error) {
            res.send(error);
        } else if (user) {
            //   console.log(user.password);
            await bcrypt
                .compare(password, user.password)
                .then((password) => {
                    if (password) {
                        res.send({ message: "user successfully login" });
                    } else {
                        res.send({ message: "Invalid User" });
                    }
                })
                .catch((err) => {
                    res.send(err);
                });
        } else {
            res.json({ message: "Invalid User" });
        }
    });
});


// hamary pangay hai yeha say ab 
router.post("/api/v2/signup", async (req, res) => {
    const { name, phone, email, password, confirmPassword, work } = req.body;

    if (!name, !phone, !email, !password, !confirmPassword, !work) {
        res.send({ message: "please Put All the Fields" })
    }
    const passHashKarhaHoon = await bcrypt.hash(password,10)
    const userObj2 = {
        ...req.body,
        password : passHashKarhaHoon,

    };
    User.findOne({ email: email }, (error, user) => {
        if (error) {
            res.send(error)
        }
        else if (user) {
            res.send({ message: "email is already registered" })
        } else {
            User.create(userObj2, (err, _) => {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send({ message: "hogya ja moj kar" })
                }
            })
        }
    })
}
)

router.post("/api/v2/login", (req, res) => {
    const { email, password } = req.body;

    if (!email, !password) {
        res.send({ message: "Enter tu karo jani kuch" })
    }

    User.findOne({ email: email }, async (error, user) => {
        if (error) {
            res.send(error)
        }
        else if (user) {
           await bcrypt.compare(password, user.password)
           .then( (password)=> {
                if(password) {
                    res.send({message: "password sahi hai congratz haha !"})
                }
                else  {
                    res.send({ message: "password sahi nhi hai sed loif ! "})
                }
           } ) 
           .catch((err) => { res.send(err) });
        } 
        else {
            res.send({ message: "jani login credentials sahi dalo na esay kesa hoga login" })
        }
    })
}
)

module.exports = router;