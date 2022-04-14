import {AsyncActionCreatorBuilder} from "typesafe-actions";

// export default function getRequestSuccessFailure(req: AsyncActionCreatorBuilder<any, any, any>): object {
export default function getRequestSuccessFailure<AC extends AsyncActionCreatorBuilder<any, any, any>>(actionCreator: AC){
    const {request, success, failure} = actionCreator;

    return [request, success, failure];
};