import {createText, createBox} from '@shopify/restyle';
import {moderateScale} from 'react-native-size-matters';

const theme = {
    color:{
        white:'#fff',
        primary:'#2133A0',
        text:'#272829',
        button:'#7C72'
    },
    spacing:{
        s:8,
        m:16,
        l:24,
        xl:40
    },
    borderRadius:{
        s:4,
        m:10,
        l:25,
        xl:75
    },
    textVariants:{
        title:{
            fontSize: moderateScale(15),
            color:'red'
        },
        body:{
            fontSize:16,
            lineHeight:25,
            text:'text'
        },
        button:{
            fontSize:15,
            color:'text'
        },
        breakpoints:{},
    }
};
export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export default theme;
