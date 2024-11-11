import { cardDetails, deleteProfile, getOneProfileData, getProfiles } from "../controllers/bussiness_card.js";
import Routes from 'express';

const router = Routes()

router.post("/details",cardDetails);
router.get("/profiles",getProfiles);
router.get("/profiles/:id",getOneProfileData)
router.post("/profiles/:id",deleteProfile)
export default router;