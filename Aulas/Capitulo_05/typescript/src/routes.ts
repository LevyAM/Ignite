import { Request, Response} from 'express'
import CreateCourseService from './CreateCourseService'


export function createCourse(request: Request, response: Response) {

    CreateCourseService.execute({
        name:"NodeJS",
        duration: 6,
        educator: "Daniela"})

    CreateCourseService.execute({
        name:"ReactJS",
        //duration: 6,
        educator: "Diego"})

    return response.send();

}