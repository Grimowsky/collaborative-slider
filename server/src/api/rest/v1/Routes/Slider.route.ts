import * as express from    'express';
import {asyncWrapper} from "../../../../middleware/asyncWrapper";
import * as SliderController from '../Controllers/Slider.controller'
import roleMiddleware from "../../../../middleware/roleMiddleware";
import validateRequest from "../../../../middleware/validateRequest";
import SliderSchemas from "../../../../validators/Slider.validators";
const createRouter = (): express.Router => {
    const router = express.Router();
    router.post(
        '/',
        asyncWrapper(validateRequest(SliderSchemas.UpdateSliderSchema)),
        roleMiddleware(['user']),
        asyncWrapper(
            SliderController.updateSlider
        )
    );

    return router;
}

export default createRouter
