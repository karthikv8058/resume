const {Router} = require('express');
const {getToDo,saveToDo,updateToDo,deleteToDo} = require("../controllers/todoController");
const {saveProfile,getProfile,deleteProfile,updateProfile} = require("../controllers/ProfileController");
const router = Router();

router.get('/',getToDo);
router.post('/save',saveToDo);
router.put('/update',updateToDo);
router.put('/delete',deleteToDo);

router.get('/profile',getProfile);
router.post('/createProfile',saveProfile);
router.put('/updateProfile',updateProfile);
router.put('/deleteProfile',deleteProfile);

module.exports = router;