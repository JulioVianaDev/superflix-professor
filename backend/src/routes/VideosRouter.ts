import { Router } from "express";
const router = Router()
import { VideoController } from "src/controllers/VideosController";

router
      .get('/',VideoController.getAllVideos)
      .post('/createVideo',VideoController.createVideo)

export default router;