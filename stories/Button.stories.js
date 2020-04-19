import { story } from './story';
import CustomButtonNormal from './CustomButtonNormal.story.vue';
import CustomButtonPrimary from './CustomButtonPrimary.story.vue';

export default {
    title: 'CustomButton',
};

export const normalButton = story(CustomButtonNormal);

export const primaryButton = story(CustomButtonPrimary);