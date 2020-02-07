import Boom from "boom";

const routerRoutesMd = (r) => r.routes();
const routerAllowMethodsMd = (r) => r.allowedMethods({
    throw: true,
    notImplemented: () => Boom.notImplemented("that method is not allowed"),
    methodNotAllowed: () => Boom.methodNotAllowed("that method is not allowed"),
});

export {
    routerRoutesMd,
    routerAllowMethodsMd,
};
