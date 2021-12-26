export const getDPR = () => {
    const ratio = Math.ceil(window.devicePixelRatio || 1);
    if (ratio <= 1) {
        return 1;
    } else if (ratio >= 4) {
        return 4;
    }
    return ratio;
};

export const DPR = getDPR();

export const ZOOM = 1 / getDPR();

export const scaleUnit = (size) => DPR * size;
