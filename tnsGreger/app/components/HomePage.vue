<template>
    <Page actionBarHidden="true">
        <StackLayout>
            <label text="Gregers-FaraHärIfrån..  bayyy"></label>
            <TextField :lat="textFieldValue" hint="Latitude" />
            <TextField :long="textFieldValue" hint="Longitude" />
            <button text="Search" @tap="ShowLocationsTap" />
        </StackLayout>
    </Page>
</template>

<script>
import showlocations from './showlocations';
export default {
    components: {
        showlocations
    },
    methods: {
        ShowLocationsTap(args) {
            this.$navigateTo(showlocations);
        }
    }
};
</script>