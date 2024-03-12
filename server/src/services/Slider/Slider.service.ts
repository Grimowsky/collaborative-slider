import prisma from "../../prismaClient";
import {type UpdateReq} from "@services/Slider/Slider.type";
import {type AppReq} from "../../common/types/Request.type";
import jwtMiddleware from "../../middleware/jwtMiddleware";
import logger from "../../config/logger";
import {ExtendedError} from "../../utils/error/error";
import { StatusCodes } from "http-status-codes";

const update = async (req: AppReq): Promise<void> => {
    const data: UpdateReq = req.body
    const userIdentity = req.headers.authorization as string
    const userInfo = jwtMiddleware.decodeUserFromToken(userIdentity.split(' ')[1])


    const user = await prisma.user.findUnique({
        where: {
            id: Number(userInfo.data.id)
        }
    })

    if(!user){
        logger.error('Slider.service: User not found');
        throw ExtendedError.of('User not found', StatusCodes.NOT_FOUND)
    }

    await prisma.slider.create({
        data: {
            lastEdited: new Date(),
            lastEditorName: user?.username,
            value: data.value,
            lastEditorId: user?.id
        }
    })

}

const SliderService = {update}

export default SliderService
