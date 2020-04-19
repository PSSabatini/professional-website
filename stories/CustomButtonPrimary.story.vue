<template>
    <custom-button color="primary">Primary Button</custom-button>
</template>

<script>
import CustomButton from '../src/components/CustomButton.vue';

export default {
    name: 'CustomButtonPrimary',
    components: { CustomButton },
};
</script>

+ <include-source>stories/CustomButtonPrimary.story.vue</include-source>