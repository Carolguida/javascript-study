// middleware -> chain of responsability

const passo1 = (ctx, next) => {
    ctx.valor1 = 'md1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'md2'
    next()
}

const passo3 = (ctx => ctx.valor3 = 'md3')

//... rest
const executa = (ctx, ...middlewares) => {
    const executaPasso = indice => {
        middlewares && indice < middlewares.length 
        && middlewares[indice](ctx, () => executaPasso(indice + 1))
    }

    executaPasso(0)
}

const ctx = {} //ctx = contexto

executa(ctx, passo1, passo2, passo3)
console.log(ctx)