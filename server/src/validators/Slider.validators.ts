import {z} from 'zod';

const UpdateSliderSchema = z.object({
    body: z.object({
        value: z.number()
    })
})
const SliderSchemas = {UpdateSliderSchema}

export default SliderSchemas
