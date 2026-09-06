import {guard,readJSON,response,failure,translateBatch} from '../lib/study.mjs';
export default async request=>{try{guard(request);return response(await translateBatch(await readJSON(request)));}catch(e){return failure(e);}};
export const config={path:'/api/study/translate',rateLimit:{windowLimit:30,windowSize:60,aggregateBy:['ip','domain']}};
