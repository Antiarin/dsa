function carFleet(target: number, position: number[], speed: number[]): number {
    let carsOrder: number[] = new Array(position.length);
    for (let i = 0; i < carsOrder.length; i++) {
        carsOrder[i] = i;
    }
    carsOrder.sort((a, b) => position[b] - position[a]);

    const stepsStack: number[] = [];
    for (let i = 0; i < carsOrder.length; i++) {
        const n = carsOrder[i];
        const stepsToTarget: number = (target - position[n]) / speed[n]
        if (stepsStack.length && stepsToTarget <= stepsStack[stepsStack.length - 1]) {
            continue;
        }
        stepsStack.push(stepsToTarget);
    }
    return stepsStack.length;
};