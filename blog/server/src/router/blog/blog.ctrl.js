
export const post = async (ctx) => {
    const { title, content } = ctx.request.body;

    console.log(`title; ${title}`);
    console.log(`content: ${content}`);

    ctx.status = 200;
};
