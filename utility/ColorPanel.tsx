const color =
{
    light : {
        primary : "#1D75CCFF",
        secondary : "#F6F231FF",
        background : "white",
        text : "black",
        border : "#D8DFE7FF",
        negativ : "white",
        b_a1 : "#E6EBF0FF",
        b_a2 : "#C9D4DFFF",
        b_a3 : "#90A5BBFF",
        p_a1 : "#DDEEFFFF",
        p_a2 : "#B1D8FFFF",
        p_a3 : "#70B5FFFF",
        shadow : {

        }
    },

    dark : {
        primary : "#a2c5ff",
        secondary : "#FFE600FF",
        background : "black",
        primary_s : "#181D20FF",
        text : "white",
        border : "#121212",
        negativ : "black",
        b_a1 : "#1A1D22FF",
        b_a2 : "#3B3E49FF",
        b_a3 : "#4A4C5DFF",
        p_a1 : "#71A8FFFF",
        p_a2 : "#54A9FFFF",
        p_a3 : "#3597FFFF",
        shadow : {
            
        }
    }
}

function Theme(isDark:boolean) {
    return isDark ? color.dark : color.light; 
}


export default {color, Theme};