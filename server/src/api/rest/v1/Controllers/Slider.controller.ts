import {type AppReq, type  AppRes} from "../../../../common/types/Request.type";
import logger from "../../../../config/logger";
import SliderService    from "@services/Slider/Slider.service";
const updateSlider = async (req: AppReq, res: AppRes): Promise<void> => {
    logger.info('Slider.controller: updateSlider called');
    await SliderService.update(req)
    res.status(200).send({ ok: true});
}

export {updateSlider}
