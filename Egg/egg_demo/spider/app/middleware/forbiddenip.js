// module.exports = (options, app) => {
//     return async function forbiddenIp(ctx, next) {
//         // 要屏蔽的 IP：1. 从数据库获取 2. 从参数传入
//         var forbidip = '127.0.0.1';
//         // 获取客户端 IP
//         console.log(ctx.request.ip);
//         if (ctx.request.ip == forbidip) {
//             ctx.status = 403;
//             ctx.body = '您的ip已经被屏蔽';
//         } else {
//             await next();
//         }
//     }
// }

module.exports = (options, app) => {
    return async function forbiddenIp(ctx, next) {
        // 要屏蔽的 IP：1. 从数据库获取 2. 从参数传入
        var forbidips = options.forbidips;
        // console.log(forbidips);
        // 获取客户端 IP
        // console.log(ctx.request.ip);
        // console.log(forbidips.indexOf(ctx.request.ip) != -1);
        if (forbidips.indexOf(ctx.request.ip) != -1) {
            ctx.status = 403;
            ctx.body = '您的ip已经被屏蔽';
        } else {
            await next();
        }
        // await next();
    }
}