import prisma from "../../prismaClient";
import {type UpdateReq} from "@services/Slider/Slider.type";
import {type AppReq} from "../../common/types/Request.type";
import jwtMiddleware from "../../middleware/jwtMiddleware";
import logger from "../../config/logger";
import {ExtendedError} from "../../utils/error/error";
import { StatusCodes } from "http-status-codes";

const update = async (req: AppReq): Promise<void> => {
    let previousSliderValue
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

    try {
        previousSliderValue =  await prisma.slider.findFirstOrThrow({select: {value: true}})
    } catch (e) {
        logger.error('Slider.service: Slider previous value not found');
        throw ExtendedError.of('Slider previous value not found', StatusCodes.NOT_FOUND)
    }

    await prisma.slider.update({
        where: {
            id: 1
        },
        data: {
            value: data.value
        }
    })

    await prisma.slider_history.create({
        data: {
            editDate: new Date(),
            prevValue: previousSliderValue.value,
            editorId: user.id,
            nextValue: data.value,
            editorName: user.username,
            slider: {
                connect: {
                    id: 1
                }
            }
        }

    })

}

const SliderService = {update}

export default SliderService
