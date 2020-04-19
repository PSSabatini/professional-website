<template>
    <custom-button>Normal Button</custom-button>
</template>

<script>
import CustomButton from '../src/components/CustomButton.vue';

export default {
    name: 'CustomButtonNormal',
    components: { CustomButton },
};
</script>

+ <include-source>stories/CustomButtonNormal.story.vue</include-source>