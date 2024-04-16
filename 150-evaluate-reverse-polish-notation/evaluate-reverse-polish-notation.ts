function evalRPN(tokens: string[]): number {
    const stack=[]
    for (const i of tokens){
        switch(i){
            case'+':
            stack.push(stack.pop()+stack.pop());
            break;
            case'-':
            stack.push(-stack.pop()+stack.pop());
            break;
            case'*':
            stack.push(stack.pop()*stack.pop());
            break;
            case'/':
            const divisor=stack.pop()
            const dividend=stack.pop()
            stack.push(Math.trunc(dividend/divisor));
            break;
            default:
            stack.push(+i);
            break
        }
    }
    return stack[0]
    
    };