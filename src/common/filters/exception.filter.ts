import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus, HttpException } from "@nestjs/common";
import { timeStamp } from "console";

@Catch()
export class ExceptionFilterService implements ExceptionFilter{
    catch(exception: any, host: ArgumentsHost) {
        const cxt=host.switchToHttp()

        const req = cxt.getRequest()
        const res = cxt.getResponse()

        //default
        let statusCode = HttpStatus.INTERNAL_SERVER_ERROR
        let message = "Server Error"

        if(exception instanceof HttpException){
            statusCode = exception.getStatus()
            const exceptionRes = exception.getResponse()
            if(typeof exceptionRes == 'string'){
                message = exceptionRes;
            }else if(typeof exceptionRes == 'object'){
                const responseObj = exceptionRes as Record<string, unknown>;
                message = responseObj.message as string || exception.message;
            }
        }
        res.status(statusCode).json({
            statusCode,
            message,
            timeStamp: new Date().toISOString(),
            path:req.url
        })
    }
}