export function getThreshold(temp_c: number): 'freezing' | 'chilly'| 'warm' | 'hot' {
    if (temp_c < 0) {
        return 'freezing'
    }else if (temp_c <5){
        return 'chilly';
    }else if (temp_c < 22){
        return 'warm';
    } else {
        return 'hot';
    }
};