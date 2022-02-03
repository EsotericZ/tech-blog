const router = require('express').Router();
const { User } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbGalleryData = await Gallery.findAll({
      include: [
        {
          model: Painting,
          attributes: ['filename', 'description'],
        },
      ],
    });
  
    const galleries = dbGalleryData.map((gallery) =>
      gallery.get({ plain: true })
    );
  
    res.render('homepage', {
      galleries,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
  
  // GET one gallery
//   router.get('/gallery/:id', async (req, res) => {
//     // If the user is not logged in, redirect the user to the login page
//     if (!req.session.loggedIn) {
//       res.redirect('/login');
//     } else {
//       // If the user is logged in, allow them to view the gallery
//       try {
//         const dbGalleryData = await Gallery.findByPk(req.params.id, {
//           include: [
//             {
//               model: Painting,
//               attributes: [
//                 'id',
//                 'title',
//                 'artist',
//                 'exhibition_date',
//                 'filename',
//                 'description',
//               ],
//             },
//           ],
//         });
//         const gallery = dbGalleryData.get({ plain: true });
//         res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
//       } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//       }
//     }
//   });
  
  // GET one painting
//   router.get('/painting/:id', async (req, res) => {
//     // If the user is not logged in, redirect the user to the login page
//     if (!req.session.loggedIn) {
//       res.redirect('/login');
//     } else {
//       // If the user is logged in, allow them to view the painting
//       try {
//         const dbPaintingData = await Painting.findByPk(req.params.id);
  
//         const painting = dbPaintingData.get({ plain: true });
  
//         res.render('painting', { painting, loggedIn: req.session.loggedIn });
//       } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//       }
//     }
//   });
  
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});
  
module.exports = router;
// module.exports = {
//     createUser: async (req, res) => {
//         const { username, email, password } = req.body;
//         if(!username || !email || !password) {
//             return res.status(400).json({ error: 'You must provide a username, email and password.' });
//         }
//         try {
//             const user = await User.create({
//                 username,
//                 email,
//                 password,
//             });
//             res.json(user);
//         } catch (e) {
//             res.json(e);
//         }
//     },
//     getAllUsers: async (req, res) => {
//         try {
//             const usersData = await User.findAll({});
//             const users = usersData.map(user => user.get({ plain: true }));
//             res.render('allUsers', {
//                 users,
//                 loggedInUser: req.session.user || null,
//             });
//         } catch (e) {
//             res.json(e);
//         }
//     },
//     getUserById: async (req, res) => {
//         try {
//             const userData = await User.findByPk(req.params.userId);
//             const user = userData.get({ plain: true });
//             res.render('singleUser', {
//                 user
//             });
//         } catch (e) {
//             res.json(e);
//         }
//     },
//     login: async (req, res) => {
//         try{
//             const userData = await User.findOne({ email: req.body.email });
//             const userFound = userData.get({ plain: true });
//             if (userFound.password === req.body.password) {
//                 req.session.save(() => {
//                     req.session.user = userFound;
//                     res.json({ success: true });
//                 });
//             }
//         } catch (e) {
//             res.json(e);
//         }
//     }
// }